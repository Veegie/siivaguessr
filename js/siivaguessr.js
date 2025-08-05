const hide = function (elem) {
    elem.setAttribute('hidden', '');
}
const show = function (elem) {
    elem.removeAttribute('hidden');
}

const hideElems = function (idArray) {
    for (const id of idArray) {
        hide(document.getElementById(id));
    }
}

const showElems = function (idArray) {
    for (const id of idArray) {
        show(document.getElementById(id));
    }
}

const songSet = new Set();
for (const hash in db) {
    songSet.add(db[hash].title);
    if (Array.isArray(db[hash].joke)) {
        for (const entry of db[hash].joke) {
            songSet.add(entry.joke);
        }
    } else {
        songSet.add(db[hash].joke);
    }
}
const songs = Array.from(songSet).sort();

/**
 * Converts a JS date to a consistent string format, for looking up dailies.
 * @param {Date} date date to convert
 * @returns a string of the date as YYYYMMDD
 */
const dateToString = function (date) {
    return date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0');
};

const today = dateToString(new Date());
const daily = dailies[today];
const backNavViews = ['customQuizView', 'createCustomQuizView', 'helpView'];
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
const guessInput = document.getElementById('guessInput');
const autofillOptionsElem = document.getElementById('autofill-options');
const highlightRanges = new Map();
let curView = 'loadingView';
let strikes = 0;
let question = undefined;
let answerSet = new Set();
let guesses = new Set();
let quiz = [];
let quizQuestion = -1;

/**
 * Loads a question and cues the corresponding video. When the video is cued,
 * it fires a statechange event, handled by {@link onVideoStateChange}.
 * 
 * @param {string} videoHash the YT hash of the video to load and 
 * @param {QuestionMode} mode 
 */
const loadQuestion = function (videoHash, mode) {
    showView('loadingView');
    strikes = 0;
    hide(vidPlayer);
    hideElems(['strike1', 'strike2', 'strike3', 'ripCredits', 'giveUpConfirm']);
    showElems(['giveUpContainer', 'giveUpBtn']);
    question = db[videoHash];
    const sourceTrackHash = simpleHash(question.title);
    highlightRanges.clear();
    answerSet.clear();
    guesses.clear();
    const sourceTrackAnswerElem = document.getElementById('stAns');
    sourceTrackAnswerElem.innerText = '____________';
    sourceTrackAnswerElem.className = 'free-text-answer ' + sourceTrackHash;
    const jokeAnwserElem = document.getElementById('jAns');
    jokeAnwserElem.innerText = '____________';
    switch (mode) {
        case QuestionMode.NORMAL:
            show(vidPlayer);
            sourceTrackAnswerElem.innerText = question.title;
            updateStatusMsg('Guess the joke!')
            break;
        case QuestionMode.REVERSE:
            jokeAnwserElem.innerText = question.joke;
            answerSet.add(sourceTrackHash);
            break;
        case QuestionMode.SICKO:
            answerSet.add(sourceTrackHash);
            break;
    }
    const isMultiJoke = Array.isArray(question.joke);
    if (isMultiJoke) {
        populateMultiJokeTable(question.joke);
        hide(jokeAnwserElem);
        hide(document.getElementById('singleJokeDisplay'));
        show(document.getElementById('multiJokeDisplay'));
    } else {
        const jokeAnswerHash = simpleHash(question.joke);
        answerSet.add(jokeAnswerHash);
        jokeAnwserElem.className = 'free-text-answer ' + jokeAnswerHash;
        hide(document.getElementById('multiJokeDisplay'));
        show(jokeAnwserElem);
        show(document.getElementById('singleJokeDisplay'));
    }
    if (question.artist === 'Unknown Ripper') {
        show(document.getElementById('creditUnknown'));
        hide(document.getElementById('credit'));
    } else {
        document.getElementById('ripArtist').innerText = question.artist;
        show(document.getElementById('credit'));
        hide(document.getElementById('creditUnknown'));
    }
    document.getElementById('wikiLink').href = '/';
    ytPlayer.cueVideoById(videoHash);
};

/**
 * Populates the HTML for a multi-joke question.
 * 
 * @param {Array} jokesArray array of joke definitions. 
 */
const populateMultiJokeTable = function (jokesArray) {
    const multiJokeContainer = document.getElementById('multiJokeContainer');
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
        answerSet.add(simpleHash(joke.joke));
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
            id = 'jokeAt' + seconds + '-' + num;
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
        entryElem.children[1].classList.add(simpleHash(jokeEntry.joke));
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
    })
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
    hide(document.getElementById(curView));
    show(document.getElementById(id));
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

document.getElementById('dailyBtn').addEventListener('click', () => {
    const sickoMode = document.getElementById('dailySickoSwitch').checked;
    loadQuestion(daily.hash, sickoMode ? QuestionMode.SICKO : daily.mode);
});
document.getElementById('customQuizBtn').addEventListener('click', () => {
    showView('customQuizView');
});
document.getElementById('helpBtn').addEventListener('click', () => {
    showView('helpView');
});
document.getElementById('backBtn').addEventListener('click', function () {
    if (!unsavedChanges || confirm('Unsaved changes will be lost. Continue?')) {

    }
});

const beforeUnloadHandler = (event) => { event.preventDefault(); };
// TODO - add/remove listener when unsaved changes or in question
// addEventListener('beforeunload', beforeUnloadHandler);

backBtn.addEventListener('click', function () {
    showView('startView');
})

/**
 * Checks the specified string against the current question's answers.
 *
 * @param {string} guess the title being guessed
 */
const submitGuess = function (guess) {
    hide(autofillOptionsElem);
    clearActiveAutofillOption();
    guessInput.value = '';
    const hash = simpleHash(guess);
    if (guesses.has(hash)) {
        updateStatusMsg('Already guessed!', 2000);
        return;
    }
    guesses.add(hash);
    if (answerSet.has(hash)) {
        answerSet.delete(hash);
        document.querySelectorAll('.' + hash).forEach((e) => {
            e.classList.add('correct');
            e.innerText = guess;
            setTimeout(() => {
                e.classList.add('fade');
                e.classList.remove('correct');
                setTimeout(() => {
                    e.classList.remove('fade');
                }, 1100);
            }, 250);
        });
        if (answerSet.size === 0) {
            endQuestion();
        }
    } else {
        strikes++;
        show(document.getElementById('strike' + strikes));
        if (strikes === 3) {
            endQuestion();
        }
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

/**
 * Ends the current question. If the player has three strikes or gave up, missed answers will be revealed.
 * @param {boolean} gaveUp player gave up
 */
const endQuestion = function (gaveUp = false) {
    hide(guessInput);
    hide(document.getElementById('giveUpContainer'));
    if (gaveUp || strikes === 3) {
        updateStatusMsg('Better luck next time.');
        // Reveal missed answers
        const tHash = simpleHash(question.title);
        if (answerSet.has(tHash)) {
            document.querySelectorAll('.' + tHash).forEach((e) => {
                e.classList.add('missed');
                e.innerText = question.title;
            });
        }
        if (Array.isArray(question.joke)) {
            for (const entry of question.joke) {
                const jHash = simpleHash(entry.joke);
                if (answerSet.has(jHash)) {
                    document.querySelectorAll('.' + jHash).forEach((e) => {
                        e.classList.add('missed');
                        e.innerText = entry.joke;
                    });
                    answerSet.delete(jHash);
                }
            }
        } else {
            const jHash = simpleHash(question.joke);
            if (answerSet.has(jHash)) {
                document.querySelectorAll('.' + jHash).forEach((e) => {
                    e.classList.add('missed');
                    e.innerText = question.joke;
                });
            }
        }
    } else {
        updateStatusMsg('You got it!');
    }

    show(vidPlayer);
    document.getElementById('wikiLink').href = question.wiki;
    show(document.getElementById('ripCredits'));
}

let statusResetTimeout;
let prevStatus;
/**
 * Updates the status message with the specified string.
 * @param {string} msg the message to display 
 * @param {string} timeout timeout in ms after which the previous message will be displayed
 */
const updateStatusMsg = function (msg, timeout = 0) {
    if (!statusResetTimeout) {
        prevStatus = statusMsgElem.innerText;
    } else {
        // Status msg changed while waiting to reset previous temp status.
        clearTimeout(statusResetTimeout);
        statusResetTimeout = 0;
    }
    if (timeout) {
        statusResetTimeout = setTimeout(() => {
            statusMsgElem.innerText = prevStatus;
        }, timeout);
    }
    statusMsgElem.innerText = msg;
}

//    document.getElementById('goBtn').addEventListener('click', function () {
//        if (guessInput.value) {
//            ytPlayer.cueVideoById(guessInput.value);
//        } else {
//            vidPlayer.src = '';
//        }
//    });

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
    this.value.split(' ').filter((w) => w.trim().length > 0).forEach((w) => {
        regexes.push(new RegExp(w.trim(), 'i'));
    });
    if (!regexes.length) {
        return;
    }
    // Filter the full list of songs.
    filteredSongs = filteredSongs.filter((s) => regexes.every((reg) => reg.test(s)));
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
        hide(document.getElementById('autofill-' + i));
    }
    activeAutofillOption = 0;
    document.getElementById('autofill-0').classList.add('active');
    show(autofillOptionsElem);
}

guessInput.addEventListener('click', updateAutocomplete);
guessInput.addEventListener('input', updateAutocomplete);
guessInput.addEventListener('blur', function () {
    hide(autofillOptionsElem);
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
    swapIcon(playPauseBtn);
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
        hide(document.getElementById('volumeIcon'));
        show(document.getElementById('mutedIcon'));
    } else {
        show(document.getElementById('volumeIcon'));
        hide(document.getElementById('mutedIcon'));
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    localStorage.setItem('lastVolume', volumeSlider.value);
}

volumeSlider.addEventListener('input', function () {
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
        return hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds;
    } else {
        return minutes + ':' + seconds;
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
        }, 300);
        hide(playIcon);
        show(pauseIcon);
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
    if (!nextHighlight || !nextHighlight.classList.contains('highlight')) {
        multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => {
            if (!e.dataset.endHighlightAt
                || parseInt(e.dataset.endHighlightAt) < seconds
                || parseInt(e.dataset.startHighlightAt) > seconds) {
                e.classList.remove('highlight');
            }
        });
    }
    if (nextHighlight && !nextHighlight.classList.contains('highlight')) {
        nextHighlight.classList.add('highlight');
        let suffix = 1;
        while (document.getElementById('jokeAt' + seconds + '-' + suffix)) {
            document.getElementById('jokeAt' + seconds + '-' + suffix).classList.add('highlight');
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
    showView('startView');
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

document.getElementById('dailySickoSwitch').addEventListener('change', function () {
    localStorage.setItem('dailySicko', this.checked);
})

if (localStorage.getItem('dailySicko') !== null) {
    if (localStorage.getItem('dailySicko') === 'false') {
        document.getElementById('dailySickoSwitch').checked = false;
    } else {
        document.getElementById('dailySickoSwitch').checked = true;
    }
}

document.getElementById('giveUpBtn').addEventListener('click', function () {
    hide(document.getElementById('giveUpBtn'))
    show(document.getElementById('giveUpConfirm'));
});

document.getElementById('giveUpCancelBtn').addEventListener('click', function () {
    hide(document.getElementById('giveUpConfirm'))
    show(document.getElementById('giveUpBtn'));
});

document.getElementById('giveUpConfirmBtn').addEventListener('click', function () {
    endQuestion(true);
});

document.getElementById('shareResultsBtn').addEventListener('click', function () {
    // TODO - copy results
    hide(document.getElementById('shareResultsBtn'));
    show(document.getElementById('shareResultsMsg'));
    setTimeout(() => {
        show(document.getElementById('shareResultsBtn'));
        hide(document.getElementById('shareResultsMsg'));
    }, 3000);
});

// Basic email obfuscation. Apparently, surprisingly effective despite its simplicity.
const a = document.getElementById('enail');
a.setAttribute('href', a.getAttribute('href')
    .replace('vee', 'il@ve')
    .replace('e', '')
    .replace('-', '')
    .replace('-', ':ma')
    .replace('gie/', 'egie.me'));

const updateTimeCode = function () {
    curTimeCode.innerText = durationToTimeCode(parseInt(seekBar.value));
    updateMultiJokeHighlight(parseInt(seekBar.value));
}

//TODO - add block around script to prevent basic console sniffing
