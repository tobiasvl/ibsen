let words = [];
// Fetch the word list
fetch('assets/data/words.txt')
    .then(response => response.text())
    .then(text => {
        words = text.split(/\r?\n/);

        generatePassphrase(); // Generate a passphrase on load
    })
    .catch(err => {
        console.error('Failed to load word list: ', err);
        outputDiv.textContent = 'Failed to load word list.';
    });

const wordCountInput = document.getElementById('wordCount');
const wordCountDisplay = document.getElementById('wordCountDisplay');
const capitalizeCheckbox = document.getElementById('capitalize');
const useSpacesCheckbox = document.getElementById('useSpaces');
const generateButton = document.getElementById('generate');
const outputDiv = document.getElementById('output');
let currentPassphrase = [];

wordCountInput.addEventListener('input', () => {
    // Update display when slider moves
    wordCountDisplay.textContent = wordCountInput.value;
});

capitalizeCheckbox.addEventListener('change', () => {
    renderPassphrase();
});

useSpacesCheckbox.addEventListener('change', () => {
    renderPassphrase();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generatePassphrase() {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const count = parseInt(wordCountInput.value, 10);
    if (words.length === 0) {
        outputDiv.textContent = 'Word list loading…';
        return;
    }

    shuffle(words);
    currentPassphrase = words.slice(0, count);
    renderPassphrase();
}

function renderPassphrase() {
    const capitalize = capitalizeCheckbox.checked;
    const useSpaces = useSpacesCheckbox.checked;

    const phraseWords = currentPassphrase.map(w => {
        return capitalize ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    });

    const separator = useSpaces ? ' ' : '';
    const passphrase = phraseWords.join(separator);
    outputDiv.textContent = passphrase;
}

generateButton.addEventListener('click', generatePassphrase);