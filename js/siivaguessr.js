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
const playbackControls = document.getElementById('playbackControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const seekBar = document.getElementById('seekBar');
const curTimeCode = document.getElementById('curTimeCode');
const durationTimeCode = document.getElementById('durationTimeCode');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const guessInput = document.getElementById('guessInput');
const autofillOptionsElem = document.getElementById('autofill-options');
const backBtn = document.getElementById('backBtn');
const backNavViews = ['customQuizView', 'createCustomQuizView', 'modeView', 'helpView'];
const vidPlayer = document.getElementById('vidPlayer');
let currentQuestionMode = QuestionMode.NORMAL;
let curView = 'loadingView';
let curQuestion;
let strikes = 0;
let curQuestionMultijokeEntries = [];
let curJokeSet = new Set();

/**
 * Loads a question and cues the corresponding video.
 * @param {string} hash the YT hash of the video to load and 
 * @param {QuestionMode} mode 
 */
const loadQuestion = function (hash, mode) {
    strikes = 0;
    vidPlayer.setAttribute('hidden', '');
    currentQuestionMode = mode;
    curQuestion = db[hash];
    curJokeSet.clear();
    document.getElementById('multiJokeDisplay').setAttribute('hidden', '');
    document.getElementById('singleJokeDisplay').setAttribute('hidden', '');
    if (Array.isArray(curQuestion.joke)) {
        populateMultiJokeTable(curQuestion.joke);
        document.getElementById('multiJokeDisplay').removeAttribute('hidden');
    } else {
        curJokeSet.add(curQuestion.joke);
        document.getElementById('singleJokeDisplay').removeAttribute('hidden');
    }
    ytPlayer.cueVideoById(hash);
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
    curQuestionMultijokeEntries = [];
    // Split joke definitions with multiple timestamps separated by commas.
    for (const joke of jokesArray) {
        const instanceTimestamps = joke.time.split(',');
        for (const time of instanceTimestamps) {
            curQuestionMultijokeEntries.push({ 'time': time.trim(), 'joke': joke.joke });
        }
        curJokeSet.add(joke.joke);
    }
    curQuestionMultijokeEntries = curQuestionMultijokeEntries.sort((a, b) => timestampToSeconds(a.time) - timestampToSeconds(b.time));
    for (const jokeEntry of curQuestionMultijokeEntries) {
        const entryElem = entry.cloneNode(entry);
        entryElem.children[0].innerText = jokeEntry.time;
        let id = 'jokeAt' + timestampToSeconds(jokeEntry.time);
        let num = 0;
        // Avoid duplicate IDs if two jokes share the same timestamp
        while (document.getElementById(id)) {
            num++;
            id = id + num;
        }
        entryElem.children[0].id = id;
        entryElem.children[1].classList.add(simpleHash(jokeEntry.joke, true));
        multiJokeContainer.appendChild(entryElem);
    }
};

/**
 * Hashes a single character in a longer string.
 * 
 * @param {string} char input character
 * @param {number} s length of the overall string being ciphered; used to prevent 
 * @returns 
 */
const hashChar = function (char, s) {
    if (char === ' ') {
        return '';
    }
    let code = (((char.charCodeAt(0) * 17) + s) % 62) + 48;
    // Keep chars in valid ASCII range.
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
 * Simple, non-secure string hash function
 * 
 * @param {string} str string to hash
 * @param {boolean} fixLength fix output length to 20, to further obscure input
 * @returns 
 */
const simpleHash = function (str, fixLength) {
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
        for (let i = filler.length % s; hash.length < 20; i++) {
            if (i === filler.length) {
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
    const parts = timestamp.trim().split(':');
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
    document.getElementById(curView).setAttribute('hidden', '');
    document.getElementById(id).removeAttribute('hidden');
    curView = id;
    if (backNavViews.includes(curView)) {
        backBtn.removeAttribute('hidden');
    } else {
        backBtn.setAttribute('hidden', '');
    }
}

document.querySelectorAll('#modeView button').forEach((e) => {
    e.addEventListener('mouseenter', function (e) {
        document.getElementById(this.dataset.mode + 'HelpText').removeAttribute('hidden');
    })
    e.addEventListener('mouseleave', function (e) {
        document.getElementById(this.dataset.mode + 'HelpText').setAttribute('hidden', '');
    });
})

document.getElementById('dailyBtn').addEventListener('click', () => {
    const sickoMode = document.getElementById('dailySickoSwitch').checked;
    loadQuestion(daily.hash, sickoMode ? QuestionMode.SICKO : daily.mode);
});
document.getElementById('randomBtn').addEventListener('click', () => {
    // Load random question
    showView('modeView');
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
// TODO - add/remove listener when unsaved changes
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
    autofillOptionsElem.setAttribute('hidden', '');
    clearActiveAutofillOption();
    guessInput.value = '';
    console.log(guess);
    // TODO
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
        autofillOptionsElem.setAttribute('hidden', '');
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
        optionElem.removeAttribute('hidden');
        lastVisibleMatchIndex++;
    }
    if (lastVisibleMatchIndex === -1) {
        autofillOptionsElem.setAttribute('hidden', '');
        clearActiveAutofillOption();
        return;
    }
    for (let i = lastVisibleMatchIndex + 1; i < 10; i++) {
        document.getElementById('autofill-' + i).setAttribute('hidden', '');
    }
    activeAutofillOption = 0;
    document.getElementById('autofill-0').classList.add('active');
    autofillOptionsElem.removeAttribute('hidden');
}

guessInput.addEventListener('click', updateAutocomplete);
guessInput.addEventListener('input', updateAutocomplete);
guessInput.addEventListener('blur', function () {
    autofillOptionsElem.setAttribute('hidden', '');
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
            e.removeAttribute('hidden');
        } else {
            e.setAttribute('hidden', '');
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
        document.getElementById('volumeIcon').setAttribute('hidden', '');
        document.getElementById('mutedIcon').removeAttribute('hidden');
    } else {
        document.getElementById('volumeIcon').removeAttribute('hidden');
        document.getElementById('mutedIcon').setAttribute('hidden', '');
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
function onVideoStateChange(event) {
    if (event.data === 1) {
        timeCodeUpdateInterval = setInterval(() => {
            seekBar.value = Math.floor(ytPlayer.getCurrentTime());
            updateTimeCode();
        }, 300);
        playIcon.setAttribute('hidden', '');
        pauseIcon.removeAttribute('hidden');
    } else {
        clearInterval(timeCodeUpdateInterval);
        playIcon.removeAttribute('hidden');
        pauseIcon.setAttribute('hidden', '');
    }
    if (event.data === -1) {
        seekBar.value = '0';
        seekBar.max = ytPlayer.getDuration();
        durationTimeCode.innerText = durationToTimeCode(ytPlayer.getDuration());
        updateTimeCode();
        if (currentQuestionMode === QuestionMode.NORMAL) {
            vidPlayer.removeAttribute('hidden');
        }
        playbackControls.removeAttribute('hidden');
        showView('ripView');
    }
}

const updateMultiJokeHighlight = function (seconds) {
    let nextHighlight = document.getElementById('jokeAt' + seconds);
    while (seconds > 0 && !nextHighlight) {
        seconds--;
        nextHighlight = document.getElementById('jokeAt' + seconds);
    }
    if (!nextHighlight || !nextHighlight.classList.contains('highlight')) {
        multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => e.classList.remove('highlight'));
    }
    if (nextHighlight && !nextHighlight.classList.contains('highlight')) {
        nextHighlight.classList.add('highlight');
        const dispElem = document.getElementById('multiJokeDisplay');
        dispElem.scrollTo({ top: nextHighlight.offsetTop - (dispElem.offsetHeight / 2), behavior: 'smooth' });
    }
}

function onVideoPlayerReady() {
    if (localStorage.getItem('lastVolume')) {
        volumeSlider.value = localStorage.getItem('lastVolume');
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    // TODO temp
    loadQuestion('8SwhEQj9qes', QuestionMode.NORMAL);
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

const a = document.getElementById('enail');
a.setAttribute('href', a.getAttribute('href')
    .replace('vee', 'il@ve')
    .replace('e', '')
    .replace('-', '')
    .replace('-', ':ma')
    .replace('gie/', 'egie.me'));

const updateTimeCode = function () {
    curTimeCode.innerText = durationToTimeCode(parseInt(seekBar.value));
    if (curJokeSet.size > 1) {
        updateMultiJokeHighlight(parseInt(seekBar.value));
    }
}

showView('startView');
