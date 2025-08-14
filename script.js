// DOM Elements
const scoreDisplay = document.getElementById('score');
const wordDisplay = document.getElementById('word-display');
const choicesContainer = document.getElementById('choices-container');
const timerBar = document.getElementById('timer-bar');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreDisplay = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');

// Game variables
let score = 0;
let timer;
let timerInterval;
let currentCorrectColorName;

const INITIAL_TIME = 3000; // 3 seconds
let timeRemaining = INITIAL_TIME;
let timePerCorrectAnswer = INITIAL_TIME;

const colors = [
    { name: 'red', hex: '#e74c3c' },
    { name: 'blue', hex: '#3498db' },
    { name: 'green', hex: '#2ecc71' },
    { name: 'yellow', hex: '#f1c40f' },
    { name: 'purple', hex: '#9b59b6' },
    { name: 'orange', hex: '#e67e22' }
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function nextRound() {
    // 1. Pick a word and a color
    const wordColorObject = getRandomItem(colors); // The color the text will be
    const wordTextObject = getRandomItem(colors);  // The text of the word

    currentCorrectColorName = wordColorObject.name;

    // 2. Update the display
    wordDisplay.textContent = wordTextObject.name;
    wordDisplay.style.color = wordColorObject.hex;

    // 3. Create shuffled choices
    const choices = [wordColorObject];
    while (choices.length < 4) {
        const randomColor = getRandomItem(colors);
        if (!choices.includes(randomColor)) {
            choices.push(randomColor);
        }
    }
    shuffleArray(choices); // Shuffle to randomize button positions

    // 4. Populate buttons
    choicesContainer.innerHTML = '';
    choices.forEach(color => {
        const button = document.createElement('button');
        button.classList.add('choice-btn');
        button.textContent = color.name;
        button.style.backgroundColor = color.hex;
        button.onclick = () => checkAnswer(color.name);
        choicesContainer.appendChild(button);
    });

    // 5. Start the timer for this round
    startTimer();
}

function checkAnswer(chosenColorName) {
    if (chosenColorName === currentCorrectColorName) {
        // Correct Answer
        score++;
        scoreDisplay.textContent = score;

        // Make the timer slightly faster for the next round
        timePerCorrectAnswer *= 0.98;

        // Visual feedback for correct answer
        wordDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => wordDisplay.style.transform = 'scale(1)', 100);

        nextRound();
    } else {
        // Wrong Answer
        endGame();
    }
}

function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timeRemaining = timePerCorrectAnswer;

    timerInterval = setInterval(() => {
        timeRemaining -= 10;
        const widthPercentage = (timeRemaining / timePerCorrectAnswer) * 100;
        timerBar.style.width = `${widthPercentage}%`;

        // Change timer bar color based on time left
        if (widthPercentage < 25) {
            timerBar.style.backgroundColor = '#e74c3c'; // Red
        } else if (widthPercentage < 50) {
            timerBar.style.backgroundColor = '#f1c40f'; // Yellow
        } else {
            timerBar.style.backgroundColor = '#2ecc71'; // Green
        }

        if (timeRemaining <= 0) {
            endGame();
        }
    }, 10);
}


function endGame() {
    clearInterval(timerInterval);
    finalScoreDisplay.textContent = score;
    gameOverScreen.classList.remove('hidden');
}

function startGame() {
    // Reset game state
    score = 0;
    timePerCorrectAnswer = INITIAL_TIME;
    scoreDisplay.textContent = '0';
    gameOverScreen.classList.add('hidden');

    nextRound();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event Listeners
playAgainBtn.addEventListener('click', startGame);

// Initial call to set up the first screen (before the first click)
wordDisplay.addEventListener('click', startGame, { once: true });