/**
 * Utility method to hide one or more elements.
 *
 * @param {Array<string|HTMLElement> | HTMLElement | string} val a reference to the target HTML element, a string
 * containing the target element's ID, or an array containing any number of HTML Elements or IDs
 */
const hide = function (val) {
    if (Array.isArray(val)) {
        for (const elem of val) {
            hide(elem);
        }
    } else if (val instanceof HTMLElement) {
        val.setAttribute('hidden', '');
        val.setAttribute('aria-hidden', 'true');
    } else {
        document.getElementById(val).setAttribute('hidden', '');
        document.getElementById(val).setAttribute('aria-hidden', 'true');
    }
};

/**
 * Utility method to un-hide one or more elements.
 *
 * @param {Array<string|HTMLElement> | HTMLElement | string} val a reference to the target HTML element, a string
 * containing the target element's ID, or an array containing any number of HTML elements or IDs
 */
const show = function (val) {
    if (Array.isArray(val)) {
        for (const elem of val) {
            show(elem);
        }
    } else if (val instanceof HTMLElement) {
        val.removeAttribute('hidden');
        val.removeAttribute('aria-hidden');
    } else {
        document.getElementById(val).removeAttribute('hidden');
        document.getElementById(val).removeAttribute('aria-hidden');
    }
};

/**
 * Converts a JS date to a consistent string format, for looking up dailies.
 * @param {Date} date date to convert
 * @returns a string of the date as YYYYMMDD
 */
const dateToString = function (date) {
    return date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0');
};

/**
 * Hashes a single character in a longer string.
 * 
 * @param {string} char input character
 * @param {number} s a salt value based on the overall string being hashed, used to prevent
 * substrings from being identifiable. in our case, the sum of the character codes of the input string.
 * @returns the hashed character
 */
const hashChar = function (char, s) {
    if (char === ' ') {
        return '';
    }
    let code = (((char.charCodeAt(0) * 17) + s) % 62) + 48;
    // Keep chars in valid ASCII range for HTML classes. 0-9, A-z only.
    if (code > 57) {
        code += 7;
    }
    if (code > 90) {
        code += 6;
    }
    return String.fromCharCode(code);
}
const invalidClassRegex = /[0-9+/=]/;
const filler = "zaq1xsw2cde3vfr4bgt5nhy6mju7ki8lo9p0";
/**
 * Simple, non-secure string hash function to obscure song titles. Hashed song titles are used as HTML classes
 * for multi-joke rips, allowing quick retrieval of multiple joke instances without exposing the answers.
 * 
 * @param {string} str string to hash
 * @param {boolean} fixLength fix output length to 20, to further obscure input
 * @returns a hashed version of the string
 */
const simpleHash = function (str, fixLength = true) {
    let s = str.length;
    for (let i = 0; i < str.length; i++) {
        s += str.charCodeAt(i);
    }
    let hash = hashChar(str[0], s);
    if (invalidClassRegex.test(hash)) {
        hash = 'a';
    }
    for (let i = 1; i < str.length; i++) {
        hash += hashChar(str[i], s);
        if (fixLength && hash.length === 20) {
            return hash;
        }
    }
    if (fixLength) {
        for (let i = str.length; hash.length < 20; i++) {
            if (i >= filler.length) {
                i = 0;
            }
            hash += hashChar(filler[i], s);
        }
    }
    return hash;
}

const ytHashChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-".split('');
/** Map of YT hash chars to numbers. */
const abet = {};
/** Inverse map of abet. */
const teba = {};
for (let i = 0; i < ytHashChars.length; i++) {
    abet[ytHashChars[i]] = i;
    teba[i] = ytHashChars[i];
}

/**
 * Ciphers (or de-ciphers) a string using a simple circular cipher.
 * Only works for strings consisting of valid YouTube video hash characters, [-_0-9a-Z].
 * 
 * @param {string} str string to cipher
 * @returns the ciphered string
 */
const simpleCircleCipher = function (str) {
    let res = '';
    for (const char of str) {
        res += teba[(abet[char] + 32) % 64];
    }
    return res;
};

/**
 * Aliases are alternate titles that are accepted for the same song.
 * Useful when multiple songs have similar melodies, and particularly when one song
 * heavily samples another to the point that a player might mistake them. Not much fun
 * punishing players for being unaware of a song's sampled origin.
 **/
const aliases = [
    ["Can You Feel (Abstract Map, SMW Central VLDC 9) - Torchkas",
        "Abstract Map - Mario's Mystery Meat"],

    ["Title Theme & Ending - The Flintstones: The Rescue of Dino & Hoppy",
        "Title Theme & Ending - 7 GRAND DAD"],

    ["Game Over - Uwol: Quest for Money",
        "Game Over - Felix the Cat"],

    ["The Prelude - Final Fantasy (Series)",
        "The Prelude - Final Fantasy",
        "The Prelude - Final Fantasy X",
        "The Prelude - Final Fantasy II",
        "The Prelude - Final Fantasy VII",
        "The Prelude - Final Fantasy VI",
        "The Prelude - Final Fantasy V",
        "Conversation With Culex - Super Mario RPG"],

    ["Kirby Dance - Kirby (Series)",
        "Kirby Dance - Kirby's Adventure",
        "Kirby Dance - Kirby Super Star",
        "Kirby Dance - Kirby: Squeak Squad",
        "Kirby Dance - Kirby & The Amazing Mirror",
        "Kirby Dance - Kirby: Nightmare in Dream Land",
        "Kirby Dance - Kirby 64: The Crystal Shards",
        "Kirby Dance - Kirby: Canvas Curse",
        "Kirby Dance - Kirby's Dream Land"],

    ["Victory Fanfare - Final Fantasy (Series)",
        "Victory Fanfare - Final Fantasy",
        "Victory Fanfare - Final Fantasy VII",
        "Victory Fanfare - Final Fantasy X",
        "Victory - Final Fantasy III"],

    ["Invincible (Star) - Super Mario (Series)",
        "Invincible - Super Mario Bros.",
        "Invincible - Super Mario Bros. 3",
        "Invincible - Super Mario Bros. 2",
        "Invincible - Super Mario Bros. 2 (Super Mario All-Stars)",
        "Starman - Super Smash Bros.",
        "Invincibility/Starman - New Super Mario Bros."],

    ["Route 209 - Pokemon Diamond & Pearl",
        "Route 209 (Day) - Pokemon Diamond & Pearl",
        "Route 209 (Night) - Pokemon Diamond & Pearl"],

    ["Bad Apple!! - Touhou 4: Lotus Land Story",
        "Bad Apple!! feat.nomico - Alstroemeria Records"],

    ["Proto Man Whistle - Mega Man (Series)",
        "Proto Man's Whistle - Mega Man 9",
        "Proto Man's Whistle - Mega Man 3",
        "Proto Man's Whistle - Mega Man 7"],

    ["Misirlou - Dick Dale",
        "Pump It - The Black Eyed Peas"],

    ["Mysterious Flying Object - MOTHER 3",
        "Suspicious Flying Object - MOTHER 3"],

    ["Strong One - MOTHER 3",
        "Strong One (Masked Man) - MOTHER 3"],

    ["MOTHER 3 Love Theme - MOTHER 3",
        "Love Theme (Reprise) - MOTHER 3"],

    ["Chaos Emerald Jingle - Sonic the Hedgehog (Series)",
        "Chaos Emerald Jingle - Sonic the Hedgehog",
        "Chaos Emerald - Sonic the Hedgehog 2"],

    ["Invincible - Kirby's Dream Land 3",
        "Invincible Lollipop - Kirby's Dream Land"],

    ["Zelda's Theme - The Legend of Zelda: Majora's Mask",
        "Zelda's Lullaby - The Legend of Zelda: Ocarina of Time"],

    ["Vampire Killer - Castlevania",
        "Deja Vu (Vampire Killer) - Castlevania III: Dracula's Curse"],

    ["Main Theme - Barkley, Shut Up and Jam: Gaiden",
        "Hybrid song 2:20 (Funky stars) - Quazar of Sanxion"],

    ["Radio: Lucky Channel/Game Corner - Pokemon Gold & Silver",
        "Goldenrod Game Corner - Pokemon HeartGold & SoulSilver"],

    ["Eight Melodies - EarthBound",
        "Smiles and Tears - EarthBound"],

    ["Think (About It) - Lyn Collins",
        "It Takes Two - Rob Base & DJ E-Z Rock"],

    ["Sticker of Puyo Puyo - Puyo Puyo",
        "Exercise Mode - Dr. Robotnik's Mean Bean Machine"],

    ["Sins of the Father - Donna Burke (Metal Gear Solid V: The Phantom Pain)",
        "Big Chungus | Official Main Theme - Endigo"],

    ["Billie Jean - Michael Jackson's Moonwalker",
        "Billie Jean - Michael Jackson"],

    ["Beat It - Michael Jackson's Moonwalker",
        "Beat It - Michael Jackson"],

    ["Jingle Bells - James Lord Pierpont",
        "Jingle Bells - Gummibär"],

    ["Bad Apple!! - Touhou 4: Lotus Land Story",
        "Bad Apple!! feat.nomico - Alstroemeria Records"],

    ["Pollyanna (I Believe in You) - EarthBound Beginnings/MOTHER",
        "Home Sweet Home - EarthBound",
        "A Certain Someone's Memories - MOTHER 3"],

    ["Through the Fire and Flames - DragonForce",
        "Through The Fire And Flames - Guitar Hero III: Legends of Rock"],

    ["Overworld Theme - New Super Mario Bros.",
        "Overworld Theme - New Super Mario Bros. Wii"]
];
const aliasMap = new Map();
const aliasedAnswers = new Map();

const songSet = new Set();
let randomDailyHashes;

const initSongSetAndRandomDailies = function () {
    const curatedDailyHashes = new Set(Object.values(dailies).map((d) => simpleCircleCipher(d.hash)));
    const randomDailiesSet = new Set(Object.keys(db));
    for (const hash in db) {
        if (db[hash].exclude !== 'title') {
            songSet.add(db[hash].title);
        }
        if (Array.isArray(db[hash].joke)) {
            for (const entry of db[hash].joke) {
                songSet.add(entry.joke);
            }
        } else {
            songSet.add(db[hash].joke);
        }
        if (curatedDailyHashes.has(hash)) {
            randomDailiesSet.delete(hash);
        }
    }
    randomDailyHashes = Array.from(randomDailiesSet);
}
initSongSetAndRandomDailies();

for (let i = 0; i < aliases.length; i++) {
    const aliasSet = aliases[i];
    const aliasHash = simpleHash('alias_set_' + i);
    for (const alias of aliasSet) {
        aliasMap.set(alias, aliasHash);
        songSet.add(alias);
    }
}
const songs = Array.from(songSet).sort();

/**
 * Hashes a given song title. Sets of aliases share a single hash.
 *
 * @param {string} answerString human-readable answer string
 * @param {boolean} loading flag indicating if this hash op is being done while loading the question. When true, also populates the aliasedAnswers for the question.
 * @returns the hash string for this answer
 */
const hashAnswer = function (answerString, loading = false) {
    if (aliasMap.has(answerString)) {
        if (loading) {
            aliasedAnswers.set(aliasMap.get(answerString), answerString);
        }
        return aliasMap.get(answerString);
    }
    return simpleHash(answerString);
}

/**
 * Converts a timestamp string into the number of seconds it represents.
 *
 * @param {string} timestamp timestamp string in the format hh:mm:ss
 * @returns the number of seconds from 00:00:00 to the timestamp
 */
const timestampToSeconds = function (timestamp) {
    const parts = timestamp.indexOf('-') !== -1 ? timestamp.substring(0, timestamp.indexOf('-')).trim().split(':') : timestamp.trim().split(':');
    if (parts.length === 3) {
        return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    } else {
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
}

/**
 * Changes the current view.
 * @param {string} id HTML ID of the view to switch to
 */
const showView = function (id) {
    hide([curView, 'shareResultsContainer']);
    show(id);
    curView = id;
    if (backNavViews.includes(curView)) {
        show(backBtn);
    } else {
        hide(backBtn);
    }
    if (id !== 'startView') {
        document.getElementById('logo').className = 'img-small';
    }
}

const beforeUnloadHandler = (event) => { event.preventDefault(); };

// You wouldn't think counting the daily numbers would be so hard, but timezones make everything more annoying.
const firstDateUTCAdjusted = new Date('2025-09-14T00:00:00');
firstDateUTCAdjusted.setMinutes(firstDateUTCAdjusted.getMinutes() - firstDateUTCAdjusted.getTimezoneOffset())
const nowDate = new Date();
nowDate.setMinutes(nowDate.getMinutes() - nowDate.getTimezoneOffset())
const todaysDailyNumber = 1 + Math.floor((nowDate - firstDateUTCAdjusted) / 86400000);
if (todaysDailyNumber >= 366) {
    show('dailiesOverMsg');
}

// This is a fairly future-proof way to generate daily puzzles, which also ensures that historical dailies will stay consistent
// (e.g. daily#400 will always be the same song). However, if the database is *ever* changed, we will first have to get a list of all
// random dailies up to the date of the database modification, and add those to the statically-declared dailies object in dailies.js.
// Otherwise, the questions past 366 in the dailies archive will suddenly change, as they are selected pseudorandomly here.
const randomDailies = {};
// The starting index of this loop should be the first new daily number after updating the database.
for (let i = 367; i <= todaysDailyNumber; i++) {
    randomDailies[i] = {
        hash: simpleCircleCipher(randomDailyHashes[(i * 40111) % randomDailyHashes.length]),
        mode: 1
    }
}
const todaysDailyDateString = dateToString(new Date());
const isAfd = todaysDailyDateString.endsWith('0401');

let daily = dailies[simpleCircleCipher(todaysDailyDateString).split('').reverse().join('')];
if (!daily) {
    daily = randomDailies[todaysDailyNumber];
}

const LAST_DAILY_WIN_KEY = 'lDailyWin';
const LAST_DAILY_KEY = 'lDaily';
const DAILY_RESULTS_KEY = 'dailyResults';
const DAILY_RESULT_GUESS_DELIMITER = '__';
const LONG_TITLE_THRESHOLD = 84;
const DAILY_ARCHIVE_ID_PREFIX = 'dailyArchive'
const backNavViews = ['customQuizView', 'createCustomQuizView', 'helpView', 'quizIntroView', 'quizEndView', 'dailyArchiveView'];
const backBtn = document.getElementById('backBtn');
const vidPlayer = document.getElementById('vidPlayer');
const playbackControls = document.getElementById('playbackControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const seekBar = document.getElementById('seekBar');
const curTimeCode = document.getElementById('curTimeCode');
const durationTimeCode = document.getElementById('durationTimeCode');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const statusMsgElem = document.getElementById('statusMsg');
const giveUpContainer = document.getElementById('giveUpContainer');
const guessInput = document.getElementById('guessInput');
const autofillOptionsElem = document.getElementById('autofill-options');
const multiJokeContainer = document.getElementById('multiJokeContainer');
const multiCorrect = document.getElementById('multiCorrect');
const dailyResults = localStorage.getItem(DAILY_RESULTS_KEY) ? JSON.parse(localStorage.getItem(DAILY_RESULTS_KEY)) : {};
const highlightRanges = new Map();
let questionTime = 0;
let questionTimerInterval = -1;
let curView = 'loadingView';
let activeQuestion = undefined;
let activeQuestionTotalAnswers = 0;
let answerSet = new Set();
let guesses = new Set();
let activeQuiz = [];
let activeQuizQuestionIndex = -1;
let hasUnsavedChanges = false;
let loadedDailyDateString = '';

if (!localStorage.getItem(LAST_DAILY_WIN_KEY) && localStorage.getItem(LAST_DAILY_KEY)) {
    /**
     * Returning players who played before the archive and grace rule update will not have a
     * lastDailyWin entry. Set it to their current LastDaily to ensure no one loses their streak.
     */
    localStorage.setItem(LAST_DAILY_WIN_KEY, localStorage.getItem(LAST_DAILY_KEY));
}

/**
 * Loads a question and cues the corresponding video. When the video is cued,
 * it fires a statechange event, handled by {@link onVideoStateChange}.
 * 
 * @param {string} videoHash the YT hash of the video to load and the hash of the joke object in the database
 * @param {QuestionMode} mode the question mode to use
 * @param {string} dailyNumber the number of the daily being loaded, if applicable
 */
const loadQuestion = function (videoHash, mode, dailyNumber = -1) {
    showView('loadingView');
    questionTime = 0;
    hide(['ripCredits', 'giveUpConfirm', 'shareResultsContainer', 'quizResultsBtn', 'nextQuestionBtn', 'giveUpContainer', 'giveUpBtn', 'quizQuestionNumber', vidPlayer, multiCorrect]);
    show(['giveUpBtn', guessInput]);
    activeQuestion = db[videoHash];
    if (activeQuizQuestionIndex > -1) {
        const quizQuestionNumberElem = document.getElementById('quizQuestionNumber');
        quizQuestionNumberElem.innerText = `Question ${activeQuizQuestionIndex + 1} of ${activeQuiz.length}`;
        show(quizQuestionNumberElem);
    }
    aliasedAnswers.clear();
    highlightRanges.clear();
    answerSet.clear();
    guesses.clear();
    const sourceTrackHash = hashAnswer(activeQuestion.title, true);
    const sourceTrackAnswerElem = document.getElementById('stAns');
    if (activeQuestion.exclude !== 'title') {
        sourceTrackAnswerElem.innerText = '____________';
        sourceTrackAnswerElem.className = 'free-text-answer ' + sourceTrackHash;
    } else if (mode === QuestionMode.REVERSE || mode === QuestionMode.SICKO) {
        mode = QuestionMode.NORMAL;
    }
    const jokeAnwserElem = document.getElementById('jAns');
    jokeAnwserElem.innerText = '____________';
    switch (mode) {
        case QuestionMode.NORMAL:
            show(vidPlayer);
            sourceTrackAnswerElem.innerText = activeQuestion.title;
            updateText(statusMsgElem, 'Guess the joke!');
            break;
        case QuestionMode.REVERSE:
            jokeAnwserElem.innerText = activeQuestion.joke;
            answerSet.add(sourceTrackHash);
            updateText(statusMsgElem, 'Guess the source track!');
            break;
        case QuestionMode.SICKO:
            if (activeQuestion.exclude !== 'title') {
                answerSet.add(sourceTrackHash);
                updateText(statusMsgElem, 'Guess the joke, or the source track!');
            }
            break;
    }
    if (Array.isArray(activeQuestion.joke)) {
        populateMultiJokeTable(activeQuestion.joke, mode === QuestionMode.REVERSE);
        hide([jokeAnwserElem, 'singleJokeDisplay']);
        show('multiJokeDisplay');
    } else {
        if (mode !== QuestionMode.REVERSE) {
            const jokeAnswerHash = hashAnswer(activeQuestion.joke, true);
            answerSet.add(jokeAnswerHash);
            jokeAnwserElem.className = 'free-text-answer ' + jokeAnswerHash;
        } else {
            jokeAnwserElem.className = 'free-text-answer';
        }
        hide('multiJokeDisplay');
        show([jokeAnwserElem, 'singleJokeDisplay']);
    }
    if (activeQuestion.artist === 'Unknown Ripper') {
        show('creditUnknown');
        hide('credit');
    } else {
        document.getElementById('ripArtist').innerText = activeQuestion.artist;
        show('credit');
        hide('creditUnknown');
    }
    const shareBtn = document.getElementById('shareResultsBtn');
    shareBtn.dataset.sickoMode = mode === QuestionMode.SICKO;
    shareBtn.dataset.dailyNumber = dailyNumber;
    activeQuestionTotalAnswers = answerSet.size;
    document.getElementById('wikiLink').href = '/';
    ytPlayer.cueVideoById(videoHash);
};

/**
 * Populates the HTML for a multi-joke question.
 * 
 * @param {Array} jokesArray array of joke definitions.
 * @param {boolean} isReverseMode although ill-advised, reverse mode can be set for a multi-joke question. if true, all answers in the table will automatically be revealed. Bad idea!
 */
const populateMultiJokeTable = function (jokesArray, isReverseMode = false) {
    multiJokeContainer.innerText = '';
    const entry = document.createElement('div');
    entry.classList.add('multi-joke-entry');
    const jokeTime = document.createElement('div');
    jokeTime.classList.add('multi-joke-timestamp');
    const jokeAnswer = document.createElement('div');
    jokeAnswer.classList.add('multi-joke-joke');
    entry.appendChild(jokeTime);
    entry.appendChild(jokeAnswer);
    let curQuestionMultijokeEntries = [];
    // Split joke definitions with multiple timestamps separated by commas.
    for (const joke of jokesArray) {
        const instanceTimestamps = joke.time.split(',');
        for (const time of instanceTimestamps) {
            curQuestionMultijokeEntries.push({ 'time': time.trim(), 'joke': joke.joke });
        }
        if (!isReverseMode) {
            answerSet.add(hashAnswer(joke.joke, true));
        }
    }
    curQuestionMultijokeEntries = curQuestionMultijokeEntries.sort((a, b) => timestampToSeconds(a.time) - timestampToSeconds(b.time));
    for (const jokeEntry of curQuestionMultijokeEntries) {
        const entryElem = entry.cloneNode(entry);
        entryElem.children[0].innerText = jokeEntry.time;
        const seconds = timestampToSeconds(jokeEntry.time);;
        let id = 'jokeAt' + seconds;
        let num = 0;
        // Avoid duplicate IDs if two jokes share the same timestamp
        while (document.getElementById(id)) {
            num++;
            id = `jokeAt${seconds}-${num}`;
        }
        entryElem.children[0].id = id;
        entryElem.children[0].dataset.seconds = seconds;
        if (jokeEntry.time.indexOf('-') !== -1) {
            const startEndTime = jokeEntry.time.split('-');
            const startHighlightAt = timestampToSeconds(startEndTime[0]);
            const endHighlightAt = timestampToSeconds(startEndTime[1]);
            entryElem.children[0].dataset.startHighlightAt = startHighlightAt;
            entryElem.children[0].dataset.endHighlightAt = endHighlightAt;
            for (let i = startHighlightAt; i <= endHighlightAt; i++) {
                if (!highlightRanges.get(i)) {
                    highlightRanges.set(i, []);
                }
                highlightRanges.get(i).push(entryElem.children[0]);
            }
        }
        if (isReverseMode) {
            entryElem.children[1].innerText = jokeEntry.joke;
        } else {
            entryElem.children[1].classList.add(hashAnswer(jokeEntry.joke, true));
        }
        multiJokeContainer.appendChild(entryElem);
    }
    multiJokeContainer.querySelectorAll('.multi-joke-timestamp').forEach((e) => {
        if (e.dataset.seconds) {
            e.addEventListener('click', function () {
                ytPlayer.seekTo(parseInt(this.dataset.seconds));
                seekBar.value = this.dataset.seconds;
                updateTimeCode();
            });
        }
    });
};

document.getElementById('dailyBtn').addEventListener('click', function () {
    this.blur();
    loadedDailyDateString = todaysDailyDateString;
    let sickoMode = document.getElementById('dailySickoSwitch').checked;
    if (dailyResults[loadedDailyDateString] && !dailyResults[loadedDailyDateString].sickoMode) {
        sickoMode = false;
    }
    activeQuizQuestionIndex = -1;
    loadQuestion(simpleCircleCipher(daily.hash), sickoMode ? QuestionMode.SICKO : daily.mode, todaysDailyNumber);
});
document.getElementById('customQuizBtn').addEventListener('click', function () {
    this.blur();
    showView('customQuizView');
});
document.getElementById('helpBtn').addEventListener('click', function () {
    this.blur();
    show(['modalWrapper', 'helpModal']);
});
document.getElementById('dailiesOverBtn').addEventListener('click', function () {
    this.blur();
    show(['modalWrapper', 'dailiesOverModal']);
});
backBtn.addEventListener('click', function () {
    if (!hasUnsavedChanges || confirm('Your custom quiz has unsaved changes. Continue?')) {
        this.blur();
        setHasUnsavedChanges(false);
        if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
            ytPlayer.pauseVideo();
        }
        if (loadedDailyDateString && loadedDailyDateString !== todaysDailyDateString) {
            showView('dailyArchiveView');
            const backFromDaily = document.getElementById(DAILY_ARCHIVE_ID_PREFIX + loadedDailyDateString);
            document.scrollingElement.scrollTo({ top: backFromDaily.offsetTop - (document.scrollingElement.offsetHeight / 2), behavior: 'instant' });
        } else {
            showView('startView');
        }
        loadedDailyDateString = '';
    }
});

/**
 * Checks the specified string against the current question's answers.
 *
 * @param {string} guess the title being guessed
 * @param {boolean} replaying flag indicating if this guess is a part of a saved daily result reconstruction by virtually replaying the saved list of guesses
 */
const submitGuess = function (guess, replaying = false) {
    if (!songSet.has(guess)) {
        return;
    }
    hide(autofillOptionsElem);
    clearActiveAutofillOption();
    guessInput.value = '';
    if (guesses.has(guess)) {
        updateText(statusMsgElem, 'Already guessed!', 2000);
        return;
    }
    guesses.add(guess);
    const hash = hashAnswer(guess);
    const isMultiJoke = Array.isArray(activeQuestion.joke)
    if (answerSet.has(hash)) {
        let replaceText = guess;
        if (aliasedAnswers.has(hash) && guess !== aliasedAnswers.get(hash)) {
            updateText(statusMsgElem, "Close enough!", 2000);
            replaceText = aliasedAnswers.get(hash);
        }
        markCorrect(hash, replaceText);
        if (!replaying && answerSet.size === 0) {
            endQuestion();
        }
    } else {
        if (!replaying) {
            show('giveUpContainer');
            guessInput.classList.add('incorrect');
            setTimeout(() => {
                guessInput.classList.add('fade');
                guessInput.classList.remove('incorrect');
                setTimeout(() => {
                    guessInput.classList.remove('fade');
                }, 1100);
            }, 500);
        }
    }
}

/**
 * Marks all instances of the hash for a given answer as correct, and removes that hash from the answer set.
 * @param {string} hash the answer hash
 * @param {string} replaceText the readable string version of the answer, which will replace the text in the target elements
 */
const markCorrect = function (hash, replaceText) {
    answerSet.delete(hash);
    document.querySelectorAll('.' + hash).forEach((e) => {
        // If the source track has been guessed correctly, we can reveal the video player.
        if (e.id === 'stAns') {
            show(vidPlayer);
        }
        e.classList.add('correct');
        // Some song titles are too long to display in the multi-answer table.
        // If the answer text is long and we're putting the text in the table, add a class to shrink the text.
        if (replaceText.length > LONG_TITLE_THRESHOLD && !e.classList.contains('free-text-answer')) {
            e.classList.add('long-song-title');
        }
        e.innerText = replaceText;
        setTimeout(() => {
            e.classList.add('fade');
            e.classList.remove('correct');
            setTimeout(() => {
                e.classList.remove('fade');
            }, 1100);
        }, 250);
    });
}

/**
 * Ends the current question. If the player gave up, missed answers will be revealed.
 * @param {boolean} lost player gave up
 * @param {boolean} reloadingCompletedDaily if the player is reloading an already-finished daily question
 */
const endQuestion = function (lost = false, reloadingCompletedDaily = false) {
    hide(guessInput);
    hide('giveUpContainer');
    clearInterval(questionTimerInterval);
    const isMultiJoke = Array.isArray(activeQuestion.joke);
    const gotCount = activeQuestionTotalAnswers - answerSet.size;
    let percentCorrect = Math.floor((gotCount / activeQuestionTotalAnswers) * 100);

    // Display status message
    if (isMultiJoke) {
        multiCorrect.innerText = `You got ${percentCorrect}%${(percentCorrect > 50 ? '!' : '')}`;
        updateText(statusMsgElem, `(${gotCount} out of ${activeQuestionTotalAnswers})` + (isAfd ? '. Happy April Fool\'s Day! (Win streaks are unaffected)' : ''));
        if (!reloadingCompletedDaily && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (percentCorrect > 60) {
                confettea.burst({ origin: { x: 0.3, y: 0.3 } });
            }
            if (percentCorrect > 85) {
                setTimeout(() => {
                    confettea.burst({ x: 0.7, y: 0.3 });
                }, 1000);
            }
            if (percentCorrect === 100) {
                setTimeout(() => {
                    confettea.burst({ x: 0.5, y: 0.3 });
                }, 2000);
            }
        }
        show(multiCorrect);
    } else {
        if (lost) {
            updateText(statusMsgElem, 'Better luck next time.');
        } else {
            updateText(statusMsgElem, 'You got it!');
            if (!reloadingCompletedDaily && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
                confettea.burst();
            }
        }
    }
    if (activeQuizQuestionIndex > -1) {
        activeQuiz[activeQuizQuestionIndex].result = `${activeQuestionTotalAnswers - answerSet.size}/${activeQuestionTotalAnswers}`;
    }

    // Reveal any missed answers
    if (lost || reloadingCompletedDaily) {
        const tHash = hashAnswer(activeQuestion.title);
        if (answerSet.has(tHash)) {
            document.querySelectorAll('.' + tHash).forEach((e) => {
                e.classList.add('missed');
                e.innerText = activeQuestion.title;
            });
        }
        if (isMultiJoke) {
            for (const entry of activeQuestion.joke) {
                const jHash = hashAnswer(entry.joke);
                if (answerSet.has(jHash)) {
                    document.querySelectorAll('.' + jHash).forEach((e) => {
                        e.classList.add('missed');
                        if (entry.joke.length > LONG_TITLE_THRESHOLD && !e.classList.contains('free-text-answer')) {
                            e.classList.add('long-song-title');
                        }
                        e.innerText = entry.joke;
                    });
                    answerSet.delete(jHash);
                }
            }
        } else {
            const jHash = hashAnswer(activeQuestion.joke);
            if (answerSet.has(jHash)) {
                document.querySelectorAll('.' + jHash).forEach((e) => {
                    e.classList.add('missed');
                    e.innerText = activeQuestion.joke;
                });
            }
        }
    }

    // The Give Up button normally displays after 10 seconds.
    // If a player finishes a question, then loads another question, all in under 10 seconds, the Give Up button will appear too soon.
    // Clear its timeout to prevent this.
    if (giveUpContainer.dataset.timeout) {
        clearTimeout(giveUpContainer.dataset.timeout);
        delete giveUpContainer.dataset.timeout;
    }
    document.getElementById('wikiLink').href = activeQuestion.wiki;
    show([vidPlayer, 'ripCredits']);

    if (loadedDailyDateString) {
        show(backBtn);
        const shareBtn = document.getElementById('shareResultsBtn');
        const playingTodaysDaily = loadedDailyDateString === todaysDailyDateString;
        const w_streak_key = 'winStreak';
        if (playingTodaysDaily && !reloadingCompletedDaily) {
            // Update win streak
            if (!lost || isAfd) {
                if (!localStorage.getItem(w_streak_key)
                    || !localStorage.getItem(LAST_DAILY_KEY)
                    || parseInt(localStorage.getItem(LAST_DAILY_WIN_KEY)) < todaysDailyNumber - 2) {
                    localStorage.setItem(w_streak_key, '1');
                } else {
                    localStorage.setItem(w_streak_key, parseInt(localStorage.getItem(w_streak_key)) + 1);
                }
                localStorage.setItem(LAST_DAILY_WIN_KEY, todaysDailyNumber);
            } else if (localStorage.getItem(LAST_DAILY_KEY)
                && parseInt(localStorage.getItem(LAST_DAILY_WIN_KEY)) < todaysDailyNumber - 2) {
                localStorage.removeItem(w_streak_key);
            }
            localStorage.setItem(LAST_DAILY_KEY, todaysDailyNumber);
        }
        const winStreak = localStorage.getItem(w_streak_key) ? parseInt(localStorage.getItem(w_streak_key)) : 0;
        if (!reloadingCompletedDaily) {
            // Save the result of this daily.
            let resultIcon = '';
            if (lost) {
                resultIcon = '🏳️';
            } else {
                resultIcon = '✅';
            }
            const resultObj = {};
            resultObj.guesses = Array.from(guesses).join(DAILY_RESULT_GUESS_DELIMITER);
            resultObj.time = questionTime;
            resultObj.singleResultIcon = resultIcon;
            resultObj.sickoMode = shareBtn.dataset.sickoMode === 'true';
            resultObj.isMultiJoke = isMultiJoke;
            resultObj.multiResult = `${gotCount}/${activeQuestionTotalAnswers}`;
            resultObj.percentCorrect = `${percentCorrect}`;
            dailyResults[loadedDailyDateString] = resultObj;
            localStorage.setItem(DAILY_RESULTS_KEY, JSON.stringify(dailyResults));
            if (!playingTodaysDaily) {
                addOrUpdateDailyArchiveEntry(loadedDailyDateString);
            }
        }

        let statLine = '';
        if (isMultiJoke) {
            const statIcon = getStatIcon(percentCorrect)
            if (isAfd) {
                statLine = `${statIcon} Got ${percentCorrect}% correct. Try it! 🙂`
            } else {
                statLine = `${statIcon}${gotCount}/${activeQuestionTotalAnswers}${statIcon}`;
            }
        } else {
            if (!lost) {
                statLine = `✅ Got the answer in ⏱️ ${durationToTimeCode(questionTime)}!`;
                if (questionTime === 0) {
                    if (shareBtn.dataset.sickoMode === 'true') {
                        statLine += ' (0 seconds in Sicko Mode! Wow, that\'s really fast! I definitely didn\'t cheat. Don\'t make fun of me for sharing this without reading it first. 🙂)';
                    } else {
                        statLine += ' (Probably recognized this rip on sight. Try Sicko Mode for a real challenge!)'
                    }
                }
            } else {
                if (shareBtn.dataset.sickoMode === 'true' && gotCount > 0) {
                    statLine = `${gotCount}/${activeQuestionTotalAnswers}`;
                } else {
                    statLine = `🏳 in ⏱️ ${durationToTimeCode(questionTime)}`
                }
            }
        }

        shareBtn.dataset.shareData =
            `SiIvaGuessr #${shareBtn.dataset.dailyNumber}:${shareBtn.dataset.sickoMode === 'true' ? '\n 👺 Sicko Mode 👺' : ''}
${statLine}${!lost && playingTodaysDaily && winStreak > 1 ? '\nOn a win streak of ' + winStreak + '!' : ''}
https://siivaguessr.meme`;
        show('shareResultsContainer');
    } else {
        activeQuizQuestionIndex++;
        if (activeQuizQuestionIndex === activeQuiz.length) {
            show('quizResultsBtn');
        } else {
            show('nextQuestionBtn');
        }
    }
}

const getStatIcon = function (percentCorrect) {
    if (percentCorrect === 100) {
        return ' 🌟 ';
    } else if (percentCorrect > 60) {
        return ' ✅ ';
    } else if (percentCorrect > 25) {
        return ' 🆗 ';
    }
    return '❌';
}

document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    this.blur();
    loadQuestion(simpleCircleCipher(activeQuiz[activeQuizQuestionIndex].id), parseInt(activeQuiz[activeQuizQuestionIndex].mode));
});

document.getElementById('quizResultsBtn').addEventListener('click', function () {
    this.blur();
    if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
        ytPlayer.pauseVideo();
    }
    let totalGot = 0;
    let totalAnswers = 0;
    const quizResultsTbody = document.getElementById('quizResultsTableBody');
    quizResultsTbody.innerText = '';
    let quizStr = '';
    let questionIcons = '';
    for (let i = 0; i < activeQuiz.length; i++) {
        const question = activeQuiz[i];
        const tr = document.getElementById('resultsTableRowTemplate').cloneNode(true);
        tr.id = '';
        const questionDbEntry = db[simpleCircleCipher(question.id)];
        tr.children[0].innerText = i + 1;
        tr.children[1].innerText = questionDbEntry.title;
        tr.children[2].innerText = Array.isArray(questionDbEntry.joke) ? `Multi (${questionDbEntry.joke.length} answers)` : questionDbEntry.joke;
        tr.children[3].innerText = question.result;
        const resultParts = question.result.split('/');
        const gotCount = parseInt(resultParts[0]);
        const answersCount = parseInt(resultParts[1]);
        totalGot += gotCount;
        totalAnswers += answersCount;
        const percentCorrect = Math.floor((gotCount / answersCount) * 100);
        if (percentCorrect === 100) {
            questionIcons += '🌟';
        } else if (percentCorrect > 60) {
            questionIcons += '✅';
        } else if (percentCorrect > 30) {
            questionIcons += '🆗';
        } else {
            questionIcons += '❌';
        }
        quizResultsTbody.appendChild(tr);
        quizStr += question.id;
        quizStr += question.mode;
    }
    document.getElementById('finalScore').innerText = `${totalGot}/${totalAnswers}`;
    document.getElementById('shareResultsBtn').dataset.shareData =
        `SiIvaGuessr Custom Quiz - ${totalGot}/${totalAnswers}
${questionIcons}
https://siivaguessr.meme/?quiz=${quizStr}`;
    showView('quizEndView');
    show('shareResultsContainer');
    removeEventListener('beforeunload', beforeUnloadHandler);
});

/**
 * Updates the specified element with the specified string.
 * @param {string} elem reference to the text element to update
 * @param {string} msg the message to display 
 * @param {string} timeoutMs timeout in ms after which the previous message will be displayed
 */
const updateText = function (elem, msg, timeoutMs = 0) {
    if (!elem.dataset.resetTimeoutId) {
        elem.dataset.prevStatus = elem.innerText;
    } else {
        // Status msg changed while waiting to reset previous temp status.
        clearTimeout(elem.dataset.resetTimeoutId);
        elem.dataset.resetTimeoutId = '';
    }
    elem.innerText = msg;
    if (timeoutMs) {
        elem.dataset.resetTimeoutId = setTimeout(() => {
            elem.innerText = elem.dataset.prevStatus;
        }, timeoutMs);
    } else {
        elem.dataset.prevStatus = elem.innerText;
    }
}

let filteredSongs = songs;
let lastGuessInputLength = 0;
let activeAutofillOption = -1;

const clearActiveAutofillOption = function () {
    if (activeAutofillOption > -1) {
        document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
        activeAutofillOption = -1;
    }
}

const updateAutocomplete = function () {
    // Refresh list of songs if the user is deleting characters.
    if (this.value.length < lastGuessInputLength) {
        filteredSongs = songs;
    }
    lastGuessInputLength = this.value.length;
    // Only update if at least two characters.
    if (this.value.length < 2) {
        hide(autofillOptionsElem);
        clearActiveAutofillOption();
        return;
    }

    // Use regexes for each word, delimted by spaces. As a bonus, this means
    // the guess box technically supports regex for free.
    let regexes = [];
    let wordBoundRegexes = [];
    this.value.split(' ').filter((w) => w.trim().length > 0).forEach((w) => {
        try {
            regexes.push(new RegExp(w.trim(), 'i'));
            wordBoundRegexes.push(new RegExp('\\b' + w.trim() + '\\b', 'i'));
        } catch (error) {
            // Some bad character sequence. Skip this word.
        }
    });
    if (!regexes.length) {
        return;
    }
    // Filter the full list of songs.
    filteredSongs = filteredSongs.filter((s) => regexes.every((reg) => reg.test(s)));
    filteredSongs.sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(this.value.toLowerCase());
        const bStarts = b.toLowerCase().startsWith(this.value.toLowerCase());
        if (aStarts && !bStarts) {
            return -1;
        } else if (bStarts && !aStarts) {
            return 1;
        }
        return 0;
    });
    filteredSongs.sort((a, b) => {
        const allExactWordsA = wordBoundRegexes.every((reg) => reg.test(a));
        const allExactWordsB = wordBoundRegexes.every((reg) => reg.test(b));
        if (allExactWordsA && !allExactWordsB) {
            return -1;
        } else if (allExactWordsB && !allExactWordsA) {
            return 1;
        }
        return 0;
    });
    let lastVisibleMatchIndex = -1;
    // Only display the first 10 matches, for performance and to make brute-forcing harder.
    for (let i = 0; i < 10 && i < filteredSongs.length; i++) {
        const optionElem = document.getElementById('autofill-' + i);
        const optionTitle = optionElem.querySelector('.option-title');
        const optionSource = optionElem.querySelector('.option-source');
        const lastDividerIndex = filteredSongs[i].lastIndexOf(' - ');
        if (lastDividerIndex === -1) {
            optionTitle.innerText = filteredSongs[i];
            optionSource.innerText = '';
        } else {
            optionTitle.innerText = filteredSongs[i].substring(0, lastDividerIndex);
            optionSource.innerText = filteredSongs[i].substring(lastDividerIndex + 3);
        }
        optionElem.dataset.guessVal = filteredSongs[i];
        show(optionElem);
        lastVisibleMatchIndex++;
    }
    if (lastVisibleMatchIndex === -1) {
        hide(autofillOptionsElem);
        clearActiveAutofillOption();
        return;
    }
    for (let i = lastVisibleMatchIndex + 1; i < 10; i++) {
        hide('autofill-' + i);
    }
    activeAutofillOption = 0;
    document.getElementById('autofill-0').classList.add('active');
    show(autofillOptionsElem);
    autofillOptionsElem.scrollTop = 0;
}

guessInput.addEventListener('click', updateAutocomplete);
guessInput.addEventListener('input', updateAutocomplete);
guessInput.addEventListener('blur', function () {
    clearActiveAutofillOption();
});

// Keyboard controls for autofill
guessInput.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (autofillOptionsElem.querySelector('.autofill-option:hover')) {
                return;
            }
            if (activeAutofillOption > -1) {
                document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
                activeAutofillOption--;
                if (activeAutofillOption === -1) {
                    activeAutofillOption = Math.min(filteredSongs.length, 9);
                }
            } else {
                activeAutofillOption = Math.min(filteredSongs.length, 9)
            }
            document.getElementById('autofill-' + activeAutofillOption).classList.add('active');
            break;
        case 'ArrowDown':
            if (autofillOptionsElem.querySelector('.autofill-option:hover')) {
                return;
            }
            if (activeAutofillOption > -1) {
                document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
                activeAutofillOption++;
                const maxVal = Math.min(9, filteredSongs.length);
                if (activeAutofillOption > maxVal) {
                    activeAutofillOption = 0;
                }
            } else {
                activeAutofillOption = 0;
            }
            document.getElementById('autofill-' + activeAutofillOption).classList.add('active');
            break;
        case 'Enter':
            if (activeAutofillOption > -1) {
                submitGuess(document.getElementById('autofill-' + activeAutofillOption).dataset.guessVal);
            } else {
                const hoverElem = document.querySelector('.autofill-option:hover');
                if (hoverElem) {
                    submitGuess(hoverElem.dataset.guessVal);
                }
            }
            break;
        default:
            break;
    }
});

autofillOptionsElem.addEventListener('mousemove', function () {
    if (activeAutofillOption > -1) {
        clearActiveAutofillOption();
    }
});

autofillOptionsElem.querySelectorAll('.autofill-option').forEach((e) => {
    e.addEventListener('mousedown', function (e) {
        if (e.button === 0) {
            submitGuess(this.dataset.guessVal);
        }
    });
});

const swapIcon = function (btnElement) {
    btnElement.childNodes.forEach((e) => {
        if (!(e instanceof HTMLElement)) {
            return;
        }
        if (e.getAttribute('hidden') !== null) {
            show(e);
        } else {
            hide(e);
        }
    })
}

playPauseBtn.addEventListener('click', function () {
    if (ytPlayer) {
        if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
            ytPlayer.pauseVideo();
        } else {
            ytPlayer.playVideo();
        }
    }
});

const updateVolume = function () {
    if (volumeSlider.value === '0') {
        hide('volumeIcon');
        show('mutedIcon');
    } else {
        show('volumeIcon');
        hide('mutedIcon');
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    localStorage.setItem('lastVolume', volumeSlider.value);
}

volumeSlider.addEventListener('input', function () {
    this.dataset.lastVal = this.value;
    updateVolume();
});
volumeSlider.addEventListener('wheel', function (wheelEvent) {
    wheelEvent.preventDefault();
    if (wheelEvent.deltaY < 0) {
        this.value = parseInt(this.value) + 5;
    } else if (wheelEvent.deltaY > 0) {
        this.value = parseInt(this.value) - 5;
    }
    this.dataset.lastVal = this.value;
    updateVolume();
});

const durationToTimeCode = function (duration) {
    let hours = 0;
    let minutes = Math.floor(duration / 60);
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }
    const seconds = Math.floor((duration % 60)).toString().padStart(2, '0');

    if (hours) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds}`;
    } else {
        return `${minutes}:${seconds}`;
    }
}

let timeCodeUpdateInterval;
/**
 * Handles state changes in the embedded YouTube player.
 * @param {Event} event the state change event. The data property indicates the new state of the player.
 * 1 is playing, 0 is paused, -1 is "unstarted", for newly cued videos.
 */
function onVideoStateChange(event) {
    if (event.data === 1) {
        timeCodeUpdateInterval = setInterval(() => {
            seekBar.value = Math.floor(ytPlayer.getCurrentTime());
            updateTimeCode();
        }, 250);
        hide(playIcon);
        show(pauseIcon);
        // Ten seconds after first play, show Give Up button.
        if (giveUpContainer.hasAttribute('hidden')
            && !giveUpContainer.dataset.timeout) {
            giveUpContainer.dataset.timeout = setTimeout(() => {
                if (document.getElementById('ripCredits').hasAttribute('hidden')) {
                    show('giveUpContainer');
                }
            }, 10000);
            questionTimerInterval = setInterval(() => {
                questionTime++;
            }, 1000);
        }
    } else {
        clearInterval(timeCodeUpdateInterval);
        show(playIcon);
        hide(pauseIcon);
    }
    if (event.data === -1) {
        seekBar.value = '0';
        seekBar.max = ytPlayer.getDuration();
        durationTimeCode.innerText = durationToTimeCode(ytPlayer.getDuration());
        updateTimeCode();
        show(playbackControls);
        showView('ripView');
        // If a question has just been loaded and it has already been completed, replay all guesses from the last attempt to re-create the results.
        if (loadedDailyDateString && dailyResults[loadedDailyDateString]) {
            if (parseInt(localStorage.getItem('lDaily')) === todaysDailyNumber) {
                updateText(statusMsgElem, 'Come back tomorrow for a new question!');
            }
            const dailyResult = dailyResults[loadedDailyDateString];
            const dailyResultGuesses = dailyResult.guesses.split(DAILY_RESULT_GUESS_DELIMITER);
            for (const guess of dailyResultGuesses) {
                submitGuess(guess, true);
            }
            questionTime = dailyResult.time;
            endQuestion(answerSet.size > 0, true);
        }
    }
}

/**
 * On multi-joke rips, highlights and scrolls to the timecode of the current joke.
 * @param {number} seconds the number of seconds elapsed in the current song
 */
const updateMultiJokeHighlight = function (seconds) {
    let checkSeconds = seconds;
    let nextHighlight = document.getElementById('jokeAt' + checkSeconds);
    while (checkSeconds >= 0 && !nextHighlight) {
        checkSeconds--;
        nextHighlight = document.getElementById('jokeAt' + checkSeconds);
    }
    multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => {
        if (e.dataset.endHighlightAt
            && (seconds >= parseInt(e.dataset.endHighlightAt)
                || seconds < parseInt(e.dataset.startHighlightAt))) {
            e.classList.remove('highlight');
        }
    });
    if (nextHighlight && !nextHighlight.classList.contains('highlight')) {
        multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => {
            if (!e.dataset.endHighlightAt) {
                e.classList.remove('highlight');
            }
        });
        nextHighlight.classList.add('highlight');
        let suffix = 1;
        while (document.getElementById(`jokeAt${seconds}-${suffix}`)) {
            document.getElementById(`jokeAt${seconds}-${suffix}`).classList.add('highlight');
            suffix++;
        }
        const dispElem = document.getElementById('multiJokeDisplay');
        dispElem.scrollTo({ top: nextHighlight.offsetTop - (dispElem.offsetHeight / 2), behavior: 'smooth' });
    }
    if (highlightRanges.get(seconds)) {
        for (const elem of highlightRanges.get(seconds)) {
            elem.classList.add('highlight');
        }
    }
}

function onVideoPlayerReady() {
    if (localStorage.getItem('lastVolume')) {
        volumeSlider.value = localStorage.getItem('lastVolume');
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        loadQuiz(params.get('quiz'));
    } else {
        // Populate the dailies archive.
        let curDate = new Date('2025-09-14T00:00:00');
        let number = 1;
        while (dateToString(curDate) !== todaysDailyDateString) {
            addOrUpdateDailyArchiveEntry(dateToString(curDate), number);
            curDate.setDate(curDate.getDate() + 1);
            number++;
        }
        document.querySelectorAll('.past-daily-btn').forEach((e) => {
            e.addEventListener('click', function () {
                loadedDailyDateString = this.dataset.dailyDateString;
                activeQuizQuestionIndex = -1;
                let dailyToLoad = dailies[simpleCircleCipher(loadedDailyDateString).split('').reverse().join('')];
                if (!dailyToLoad) {
                    dailyToLoad = randomDailies[this.dataset.dailyNumber];
                }
                let sickoMode = document.getElementById('dailyArchiveSickoSwitch').checked
                    || (dailyResults[loadedDailyDateString] && dailyResults[loadedDailyDateString].sickoMode);
                if (dailyResults[loadedDailyDateString] && !dailyResults[loadedDailyDateString].sickoMode) {
                    sickoMode = false;
                }
                loadQuestion(simpleCircleCipher(dailyToLoad.hash), sickoMode ? QuestionMode.SICKO : dailyToLoad.mode, this.dataset.dailyNumber);
            });
        });
        showView('startView');
    }
}

let ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('vidPlayer', {
        events: {
            'onReady': onVideoPlayerReady,
            'onStateChange': onVideoStateChange
        }
    });
}
const apiScriptTag = document.createElement('script');
apiScriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.insertAdjacentElement('beforeend', apiScriptTag);

muteBtn.addEventListener('click', function () {
    swapIcon(muteBtn);
    if (volumeSlider.value !== '0') {
        volumeSlider.value = '0';
    } else if (volumeSlider.dataset.lastVal) {
        volumeSlider.value = volumeSlider.dataset.lastVal;
    }
    updateVolume();
});

// Seekbar logic - Pause the video (if playing) while seeking to avoid noise. Keep track of the
// player state to unpause automatically after seeking.
let preSeekState;
let seeking = false;
seekBar.addEventListener('mousedown', function () {
    seeking = true;
    preSeekState = ytPlayer.getPlayerState();
    ytPlayer.pauseVideo();
});

seekBar.addEventListener('input', function () {
    updateTimeCode();
    ytPlayer.seekTo(parseInt(this.value));
});

seekBar.addEventListener('mouseup', function () {
    if (seeking) {
        seeking = false;
        if ((preSeekState === 1 || preSeekState === 3)
            && parseInt(seekBar.value) < parseInt(seekBar.max)) {
            ytPlayer.playVideo();
        }
    }
});

document.getElementById('lightModeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('lightMode', true);
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.removeItem('lightMode');
    }
});

if (localStorage.getItem('lightMode') !== null) {
    document.getElementById('lightModeSwitch').checked = true;
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
}

document.getElementById('dailySickoSwitch').addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('dailySicko', this.checked);
        document.getElementById('dailyArchiveSickoSwitch').checked = true;
    } else {
        localStorage.removeItem('dailySicko');
        document.getElementById('dailyArchiveSickoSwitch').checked = false;
    }
});

if (localStorage.getItem('dailySicko') !== null) {
    document.getElementById('dailySickoSwitch').checked = true;
    document.getElementById('dailyArchiveSickoSwitch').checked = true;
}

document.getElementById('dailyArchiveBtn').addEventListener('click', function () {
    this.blur();
    showView('dailyArchiveView');
});

/**
 * Adds or updates entries in the daily archive. This is called on initial pageload once the YouTube player reports a successful initialization,
 * to add a row for each daily corresponding to dates in the past. The results of that daily are also displayed alongside the button.
 * When a previous daily is completed while playing in the archive, this function is called to update that existing row in the archive.
 *
 * @param {string} dateString the date string of the daily entry to add/update
 * @param {number} dailyNumber the number of the previous daily. only used on initial pageloads
 */
const addOrUpdateDailyArchiveEntry = function (dateString, dailyNumber = -1) {
    let dailyArchiveRow;
    const existingBtn = document.getElementById(DAILY_ARCHIVE_ID_PREFIX + dateString);
    if (existingBtn) {
        dailyArchiveRow = existingBtn;
    } else if (dailyNumber === -1) {
        // Should not happen... hopefully.
        return;
    } else {
        dailyArchiveRow = document.getElementById('dailyArchiveRowTemplate').cloneNode(true);
        dailyArchiveRow.removeAttribute('hidden');
        dailyArchiveRow.id = DAILY_ARCHIVE_ID_PREFIX + dateString;
        const pastDailyBtn = dailyArchiveRow.querySelector('.past-daily-btn');
        pastDailyBtn.dataset.dailyDateString = dateString;
        pastDailyBtn.dataset.dailyNumber = dailyNumber;
        dailyArchiveRow.querySelector('.daily-number').innerText = `#${dailyNumber}:`;
        dailyArchiveRow.querySelector('.daily-date').innerText = `${dateString.substring(0, 4)}/${dateString.substring(4, 6)}/${dateString.substring(6)}`;
        document.getElementById('dailyList').insertAdjacentElement('afterbegin', dailyArchiveRow);
    }
    if (dailyResults[dateString]) {
        const resultObj = dailyResults[dateString];
        let resultString = '';
        if (resultObj.isMultiJoke) {
            resultString += `${getStatIcon(parseInt(resultObj.percentCorrect))} ${resultObj.multiResult}`;
        } else {
            resultString += `${resultObj.singleResultIcon} in ⏱️ ${durationToTimeCode(resultObj.time)}`;
        }
        resultString += resultObj.sickoMode ? ' 👺' : '';
        dailyArchiveRow.querySelector('.daily-result').innerText = resultString;
    } else {
        dailyArchiveRow.querySelector('.daily-result').innerText = `❔`
    }
}

document.getElementById('giveUpBtn').addEventListener('click', function () {
    hide('giveUpBtn');
    show('giveUpConfirm');
});

document.getElementById('giveUpCancelBtn').addEventListener('click', function () {
    this.blur();
    hide('giveUpConfirm');
    show('giveUpBtn');
});

document.getElementById('giveUpConfirmBtn').addEventListener('click', function () {
    this.blur();
    endQuestion(true, false);
});

document.getElementById('shareResultsBtn').addEventListener('click', async function () {
    await navigator.clipboard.writeText(this.dataset.shareData);
    hide('shareResultsBtn');
    show('shareResultsMsg');
    setTimeout(() => {
        show('shareResultsBtn');
        hide('shareResultsMsg');
    }, 5000);
});

document.querySelectorAll('.dismiss-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        this.blur();
        hide(['modalWrapper', this.dataset.target]);
    });
})

const updateTimeCode = function () {
    curTimeCode.innerText = durationToTimeCode(parseInt(seekBar.value));
    updateMultiJokeHighlight(parseInt(seekBar.value));
}
