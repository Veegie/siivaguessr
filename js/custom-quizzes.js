// If hosting a fork, create a YouTube Data API v3 key and add it here to enable parsing of YouTube playlists in the custom quiz creator.
// This key will be visible to clients, so I would recommend using a highly-restricted key to prevent malicious use.
const ak = '<youtube API key>';

const SAVED_QUIZZES_KEY = 'savedQuizzes';
const customQuizHelpTextElem = document.getElementById('customQuizHelpText');

document.getElementById('quizCodeInput').addEventListener('input', function () {
    if (/^([-_A-z0-9]{11}[1-3])+$/.test(this.value)) {
        document.getElementById('loadQuizFromCodeBtn').removeAttribute('disabled');
    } else {
        document.getElementById('loadQuizFromCodeBtn').setAttribute('disabled', '');
    }
});

document.getElementById('loadQuizFromCodeBtn').addEventListener('click', function () {
    this.blur();
    loadQuiz(document.getElementById('quizCodeInput').value);
});

document.getElementById('startCustomQuizBtn').addEventListener('click', function () {
    this.blur();
    activeQuizQuestionIndex = 0;
    loadQuestion(simpleCircleCipher(activeQuiz[activeQuizQuestionIndex].id), parseInt(activeQuiz[activeQuizQuestionIndex].mode));
    addEventListener('beforeunload', beforeUnloadHandler);
});

const loadQuiz = function (quizStr) {
    activeQuiz = [];
    for (let i = 0; i < quizStr.length; i += 12) {
        if (!db[simpleCircleCipher(quizStr.substring(i, i + 11))]) {
            show('badQuizErrMsg');
            setTimeout(() => {
                hide('badQuizErrMsg');
            }, 5000);
            return;
        }
        activeQuiz.push({
            "id": quizStr.substring(i, i + 11),
            "mode": quizStr[i + 11]
        });
    }
    document.getElementById('quizIntroMsg').innerText = `Loaded custom quiz with ${activeQuiz.length} questions. Ready to begin.`;
    showView('quizIntroView');
}

document.getElementById('createCustomQuizBtn').addEventListener('click', function () {
    updateSavedQuizList();
    newCustomQuiz();
    this.blur();
    showView('createCustomQuizView');
});

const updateSavedQuizList = function () {
    const savedQuizList = localStorage.getItem(SAVED_QUIZZES_KEY);
    const savedQuizSelect = document.getElementById('savedQuizSelect');
    savedQuizSelect.innerText = '';
    if (savedQuizList && savedQuizList.length) {
        for (const quiz of savedQuizList.split(';')) {
            const quizName = quiz.split(':')[0];
            const option = document.createElement('option');
            option.value = quizName;
            option.innerText = quizName;
            savedQuizSelect.appendChild(option);
        }
        show('manageQuizzesPanel');
    } else {
        hide('manageQuizzesPanel');
    }
}

const newCustomQuiz = function () {
    document.getElementById('questionTableBody').innerText = '';
    hide(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel', 'shareQuizContainer']);
    updateText(customQuizHelpTextElem, 'Enter a video link and click Add to add your first question.');
}

const vidIdRegex = /^[A-Za-z0-9_-]{10}[AEIMQUYcgkosw048]$/;
const playlistRegex = /^PL[A-Za-z0-9_-]{10}[A-Za-z0-9_-]{22}$/;
document.getElementById('addQuestionBtn').addEventListener('click', function () {
    const addQInput = document.getElementById('addQuestionInput');
    const url = addQInput.value;
    addQInput.value = '';
    if (!url || !url.trim()) {
        return;
    }
    const vidPrefix = 'watch?v=';
    const plPrefix = 'playlist?list=';
    const plPrefixIndex = url.indexOf(plPrefix);
    const vidPrefixIndex = url.indexOf(vidPrefix);
    if (plPrefixIndex > -1) {
        const playlistCode = url.substring(plPrefixIndex + plPrefix.length, plPrefixIndex + plPrefix.length + 34);
        if (playlistRegex.test(playlistCode)) {
            updateText(customQuizHelpTextElem, 'Fetching playlist contents...');
            const xhr = new XMLHttpRequest();
            let url = `https://www.googleapis.com/youtube/v3/playlistItems?\
key=${simpleCircleCipher(ak)}\
&playlistId=${playlistCode}\
&part=${encodeURIComponent('snippet,contentDetails')}\
&maxResults=50\
&fields=${encodeURIComponent('items(id,snippet(title,position),contentDetails(videoId))')}`;
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    const respObj = JSON.parse(xhr.response);
                    const nonExistList = document.getElementById('nonExistSongsList');
                    nonExistList.innerText = '';
                    let added = 0;
                    for (const item of respObj.items) {
                        if (db[item.contentDetails.videoId]) {
                            addCustomQuizQuestion(item.contentDetails.videoId);
                            added++;
                        } else {
                            let li = document.createElement('li');
                            li.innerText = item.snippet.title;
                            nonExistList.appendChild(li);
                        }
                    }
                    if (nonExistList.children.length > 0) {
                        show('playlistNonExistSongs');
                    }
                    updateText(customQuizHelpTextElem, 'When you\'re finished adding questions, name and save your quiz below.');
                    updateText(customQuizHelpTextElem, `Added ${added} songs from playlist.`, 5000);
                } else {
                    updateText(customQuizHelpTextElem, '');
                    updateText(customQuizHelpTextElem, 'Failed to load playlist. Make sure the playlist is public.', 5000);
                }
            });
            xhr.open('GET', url);
            xhr.send();
        } else {
            updateText(customQuizHelpTextElem, 'Invalid YouTube playlist URL.', 5000);
        }
    } else {
        let videoHash;
        if (vidPrefixIndex > -1) {
            videoHash = url.substring(vidPrefixIndex + vidPrefix.length, vidPrefixIndex + vidPrefix.length + 11);
        } else if (vidIdRegex.test(url)) {
            videoHash = url;
        } else {
            updateText(customQuizHelpTextElem, 'Invalid video link/code.', 5000);
            return;
        }

        if (db[videoHash]) {
            addCustomQuizQuestion(videoHash);
        } else {
            updateText(customQuizHelpTextElem, 'Rip is not in the database, or the link is not a valid rip or playlist.', 5000);
        }
    }
});

const moveEntry = function (down, vidId, upBtn, downBtn, tbody) {
    const questionRow = document.getElementById(`question${vidId}`);
    if (down) {
        if (questionRow.nextElementSibling) {
            questionRow.nextElementSibling.querySelector('.move-down-btn').removeAttribute('disabled');
            tbody.insertBefore(questionRow.nextElementSibling, questionRow);
            upBtn.removeAttribute('disabled');
        }
    } else {
        if (questionRow.previousElementSibling) {
            questionRow.previousElementSibling.querySelector('.move-up-btn').removeAttribute('disabled');
            tbody.insertBefore(questionRow, questionRow.previousElementSibling);
            downBtn.removeAttribute('disabled');
        }
    }
    tbody.querySelector('tr:first-child .move-up-btn').setAttribute('disabled', '');
    tbody.querySelector('tr:last-child .move-down-btn').setAttribute('disabled', '');
    setHasUnsavedChanges(true);
}

const addCustomQuizQuestion = function (idToAdd, mode = '1') {
    if (document.getElementById(`question${idToAdd}`)) {
        // Duplicate question - ignore.
        return;
    }
    const jokeToAdd = db[idToAdd];
    const tbody = document.getElementById('questionTableBody');
    const tr = document.getElementById('questionTableRowTemplate').cloneNode(true);
    const isMultiJoke = Array.isArray(jokeToAdd.joke)
    tr.id = `question${idToAdd}`;
    tr.dataset.vidId = idToAdd;
    tr.classList.add('custom-quiz-question');
    const upBtn = tr.querySelector('.move-up-btn');
    const downBtn = tr.querySelector('.move-down-btn');
    upBtn.dataset.vidId = idToAdd;
    upBtn.addEventListener('click', () => {
        moveEntry(false, idToAdd, upBtn, downBtn, tbody);
    });
    downBtn.dataset.vidId = idToAdd;
    downBtn.addEventListener('click', () => {
        moveEntry(true, idToAdd, upBtn, downBtn, tbody);
    });
    downBtn.setAttribute('disabled', '');
    if (tbody.children.length === 0) {
        upBtn.setAttribute('disabled', '');
        show(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel']);
        updateText(customQuizHelpTextElem, 'When you\'re finished adding questions, name and save your quiz below.');
    } else {
        tbody.children[tbody.children.length - 1].querySelector('.move-down-btn').removeAttribute('disabled');
    }
    const modeSelect = tr.querySelector('.mode-select');
    modeSelect.name = `modeSelect${idToAdd}`;
    modeSelect.value = mode;
    if (jokeToAdd.exclude === 'title') {
        modeSelect.disabled = 'true';
    }
    modeSelect.addEventListener('change', function () {
        if (this.value === '2' && isMultiJoke) {
            show(tr.querySelector('.tooltip-container'));
        } else {
            hide(tr.querySelector('.tooltip-container'));
        }
    });
    tr.querySelector('.rip-title').innerText = jokeToAdd.title;
    tr.querySelector('.rip-joke').innerText = isMultiJoke ? `Multi (${jokeToAdd.joke.length} answers)` : jokeToAdd.joke;
    tr.querySelector('.remove-question-btn').dataset.vidId = idToAdd;
    tr.querySelector('.remove-question-btn').addEventListener('click', function () {
        document.getElementById(`question${this.dataset.vidId}`).remove();
        if (tbody.children.length === 0) {
            hide(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel', 'shareQuizContainer']);
            document.getElementById('customQuizNameInput').value = '';
            setHasUnsavedChanges(false);
        } else {
            tbody.querySelector('tr:first-child .move-up-btn').setAttribute('disabled', '');
            tbody.querySelector('tr:last-child .move-down-btn').setAttribute('disabled', '');
            setHasUnsavedChanges(true);
        }
    });
    tbody.appendChild(tr);
    if (isMultiJoke && mode === '2') {
        show(tr.querySelector('.tooltip-container'));
    }
    setHasUnsavedChanges(true);
};

const setHasUnsavedChanges = function (unsaved) {
    hasUnsavedChanges = unsaved;
    if (unsaved) {
        hide('shareQuizContainer');
        addEventListener('beforeunload', beforeUnloadHandler);
    } else {
        removeEventListener('beforeunload', beforeUnloadHandler);
    }
}

const serializeCurrentQuiz = function () {
    let res = '';
    document.getElementById('questionTableBody').querySelectorAll('tr').forEach((row) => {
        res += simpleCircleCipher(row.dataset.vidId);
        res += row.querySelector('.mode-select').value;
    })
    return res;
}

document.getElementById('saveQuizBtn').addEventListener('click', function () {
    const saveStatusElem = document.getElementById('saveStatusText');
    let name = document.getElementById('customQuizNameInput').value;
    name.replaceAll(/[:;]/g, '').trim();
    document.getElementById('customQuizNameInput').value = name;
    if (!name) {
        updateText(saveStatusElem, 'Please enter a valid name.', 5000);
        return;
    }
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY) ? localStorage.getItem(SAVED_QUIZZES_KEY).split(';') : [];
    const entry = `${name}:${serializeCurrentQuiz()}`;
    let updatedExisting = false;
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(name)) {
            quizList.splice(i, 1, entry);
            updatedExisting = true;
            updateText(saveStatusElem, `Updated existing quiz.`, 5000);
            break;
        }
    }
    if (!updatedExisting) {
        quizList.push(entry);
        updateText(saveStatusElem, `Quiz saved!`, 5000);
    }
    localStorage.setItem(SAVED_QUIZZES_KEY, quizList.join(';'));
    setHasUnsavedChanges(false);
    updateSavedQuizList();
});

document.getElementById('loadSavedQuizBtn').addEventListener('click', function () {
    if (hasUnsavedChanges && !confirm('The current quiz has unsaved changes. Continue loading?')) {
        return;
    }
    const nameToLoad = document.getElementById('savedQuizSelect').value;
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY).split(';');
    let quiz = undefined;
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(nameToLoad)) {
            quiz = quizList[i].split(':')[1];
            break;
        }
    }
    document.getElementById('questionTableBody').innerText = '';
    for (let i = 0; i < quiz.length; i += 12) {
        addCustomQuizQuestion(simpleCircleCipher(quiz.substring(i, i + 11)), quiz[i + 11]);
    }
    updateText(document.getElementById('manageStatusText'), `Loaded Quiz.`, 5000);
    setHasUnsavedChanges(false);
});

document.getElementById('deleteSavedQuizBtn').addEventListener('click', function () {
    const toDelete = document.getElementById('savedQuizSelect').value;
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY).split(';');
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(toDelete)) {
            quizList.splice(i, 1);
            updateText(document.getElementById('manageStatusText'), `Deleted Quiz.`, 5000);
            break;
        }
    }
    localStorage.setItem(SAVED_QUIZZES_KEY, quizList.join(';'));
    this.blur();
    updateSavedQuizList();
});

document.getElementById('shareSavedQuizBtn').addEventListener('click', function () {
    document.getElementById('shareSavedQuizCodeBtn').dataset.copyData = serializeCurrentQuiz();
    document.getElementById('shareSavedQuizLinkBtn').dataset.copyData = `https://siivaguessr.meme/?quiz=${serializeCurrentQuiz()}`;
    show('shareQuizContainer');
});

document.querySelectorAll('.share-quiz-btn').forEach((e) => {
    e.addEventListener('click', async function () {
        await navigator.clipboard.writeText(this.dataset.copyData);
        updateText(document.getElementById('shareStatusText'), 'Copied to clipboard!', 5000);
    })
})
