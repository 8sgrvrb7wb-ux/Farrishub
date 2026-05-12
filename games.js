// Games Data
const gamesData = {
    math: {
        title: '🧮 Math Master',
        questions: [
            {
                question: 'What is 15 + 27?',
                options: ['32', '42', '52', '62'],
                correct: 1
            },
            {
                question: 'What is 100 ÷ 5?',
                options: ['15', '20', '25', '30'],
                correct: 1
            },
            {
                question: 'What is 12 × 8?',
                options: ['84', '92', '96', '102'],
                correct: 2
            },
            {
                question: 'What is 50 - 18?',
                options: ['22', '32', '42', '52'],
                correct: 1
            },
            {
                question: 'What is 7 × 9?',
                options: ['56', '63', '70', '77'],
                correct: 1
            }
        ]
    },
    vocabulary: {
        title: '📚 Vocabulary Quest',
        questions: [
            {
                question: 'What does "benevolent" mean?',
                options: ['Kind and generous', 'Angry and hostile', 'Confused and lost', 'Tired and lazy'],
                correct: 0
            },
            {
                question: 'What does "obsolete" mean?',
                options: ['Very new', 'No longer in use', 'Extremely expensive', 'Very popular'],
                correct: 1
            },
            {
                question: 'What does "ambiguous" mean?',
                options: ['Clear and obvious', 'Open to more than one interpretation', 'Completely wrong', 'Definitely true'],
                correct: 1
            },
            {
                question: 'What does "vigilant" mean?',
                options: ['Sleeping peacefully', 'Carefully watchful', 'Very angry', 'Extremely happy'],
                correct: 1
            },
            {
                question: 'What does "eloquent" mean?',
                options: ['Fluent and persuasive in speaking', 'Unable to speak', 'Very quiet', 'Rude and impolite'],
                correct: 0
            }
        ]
    },
    science: {
        title: '🔬 Science Trivia',
        questions: [
            {
                question: 'What is the chemical symbol for gold?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correct: 2
            },
            {
                question: 'What is the largest planet in our solar system?',
                options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
                correct: 1
            },
            {
                question: 'How many bones does an adult human have?',
                options: ['186', '206', '226', '246'],
                correct: 1
            },
            {
                question: 'What is the speed of light?',
                options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'],
                correct: 0
            },
            {
                question: 'What is the powerhouse of the cell?',
                options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
                correct: 2
            }
        ]
    },
    geography: {
        title: '🌍 Geography Genius',
        questions: [
            {
                question: 'What is the capital of France?',
                options: ['Lyon', 'Paris', 'Marseille', 'Nice'],
                correct: 1
            },
            {
                question: 'Which is the longest river in the world?',
                options: ['Amazon', 'Yangtze', 'Nile', 'Mississippi'],
                correct: 2
            },
            {
                question: 'What is the capital of Japan?',
                options: ['Kyoto', 'Osaka', 'Tokyo', 'Nagoya'],
                correct: 2
            },
            {
                question: 'How many continents are there?',
                options: ['5', '6', '7', '8'],
                correct: 2
            },
            {
                question: 'What is the capital of Brazil?',
                options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
                correct: 2
            }
        ]
    }
};

// Game State
let currentGame = null;
let currentQuestion = 0;
let score = 0;
let answered = false;

// Start Game
function startGame(gameType) {
    currentGame = gameType;
    currentQuestion = 0;
    score = 0;
    answered = false;

    const modal = document.getElementById('gameModal');
    modal.style.display = 'block';
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const game = gamesData[currentGame];
    const question = game.questions[currentQuestion];
    const gameContent = document.getElementById('gameContent');

    let html = `
        <h2>${game.title}</h2>
        <div class="question-counter">Question ${currentQuestion + 1} of ${game.questions.length}</div>
        <div class="game-question">
            <h3>${question.question}</h3>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const buttonClass = answered 
            ? (index === question.correct ? 'correct' : (index === selectedAnswer ? 'incorrect' : ''))
            : '';
        const disabled = answered ? 'disabled' : '';
        
        html += `
            <button class="option-btn ${buttonClass}" onclick="selectAnswer(${index})" ${disabled}>
                ${option}
            </button>
        `;
    });

    html += `
            </div>
    `;

    if (answered) {
        html += `
            <div style="margin-top: 2rem; text-align: center;">
                ${currentQuestion < game.questions.length - 1 
                    ? `<button class="btn btn-primary" onclick="nextQuestion()">Next Question</button>` 
                    : `<button class="btn btn-primary" onclick="endGame()">See Results</button>`
                }
            </div>
        `;
    }

    gameContent.innerHTML = html;
}

let selectedAnswer = null;

// Select Answer
function selectAnswer(index) {
    if (answered) return;

    selectedAnswer = index;
    const game = gamesData[currentGame];
    const question = game.questions[currentQuestion];

    if (index === question.correct) {
        score++;
    }

    answered = true;
    displayQuestion();
}

// Next Question
function nextQuestion() {
    const game = gamesData[currentGame];
    if (currentQuestion < game.questions.length - 1) {
        currentQuestion++;
        answered = false;
        selectedAnswer = null;
        displayQuestion();
    }
}

// End Game
function endGame() {
    const game = gamesData[currentGame];
    const gameContent = document.getElementById('gameContent');
    const percentage = Math.round((score / game.questions.length) * 100);

    let message = '';
    if (percentage === 100) {
        message = '🏆 Perfect Score! Outstanding!';
    } else if (percentage >= 80) {
        message = '⭐ Excellent work!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep practicing!';
    } else {
        message = '📚 Keep learning! Try again!';
    }

    gameContent.innerHTML = `
        <div class="game-score">
            <h2>Game Complete!</h2>
            <p style="font-size: 1.2rem; margin-bottom: 1rem;">${message}</p>
            <div class="score-display">${score} / ${game.questions.length}</div>
            <p style="font-size: 1.1rem; color: #667eea;">Score: ${percentage}%</p>
            <button class="btn btn-primary" onclick="closeGame()" style="margin-top: 2rem;">Back to Games</button>
        </div>
    `;
}

// Close Game
function closeGame() {
    const modal = document.getElementById('gameModal');
    modal.style.display = 'none';
    currentGame = null;
    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedAnswer = null;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGame();
    }
};