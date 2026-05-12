// Game Data
const gamesData = {
    math: {
        title: '🧮 Math Master',
        description: 'Test your arithmetic and math skills',
        questions: [
            {
                question: 'What is 15 + 27?',
                options: ['42', '40', '45', '38'],
                correct: 0
            },
            {
                question: 'What is 144 ÷ 12?',
                options: ['10', '11', '12', '13'],
                correct: 2
            },
            {
                question: 'What is 9 × 8?',
                options: ['70', '72', '74', '76'],
                correct: 1
            },
            {
                question: 'What is 100 - 33?',
                options: ['67', '68', '69', '66'],
                correct: 0
            },
            {
                question: 'What is 25% of 200?',
                options: ['40', '50', '60', '70'],
                correct: 1
            }
        ]
    },
    vocabulary: {
        title: '📚 Vocabulary Quest',
        description: 'Expand your vocabulary and learn new words',
        questions: [
            {
                question: 'What does "serendipity" mean?',
                options: ['Finding something good by chance', 'Bad luck', 'A type of bird', 'Ancient city'],
                correct: 0
            },
            {
                question: 'What does "persevere" mean?',
                options: ['To give up', 'To continue despite difficulty', 'To mislead', 'To celebrate'],
                correct: 1
            },
            {
                question: 'What does "obfuscate" mean?',
                options: ['To clarify', 'To make unclear', 'To organize', 'To teach'],
                correct: 1
            },
            {
                question: 'What does "benevolent" mean?',
                options: ['Unkind', 'Harmful', 'Kind and generous', 'Angry'],
                correct: 2
            },
            {
                question: 'What does "ephemeral" mean?',
                options: ['Lasting forever', 'Lasting a short time', 'Very expensive', 'Hidden'],
                correct: 1
            }
        ]
    },
    science: {
        title: '🔬 Science Trivia',
        description: 'Discover fascinating science facts',
        questions: [
            {
                question: 'What is the chemical symbol for Gold?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correct: 2
            },
            {
                question: 'How many bones does an adult human have?',
                options: ['186', '206', '226', '246'],
                correct: 1
            },
            {
                question: 'What is the speed of light?',
                options: ['299,792 km/s', '199,792 km/s', '399,792 km/s', '99,792 km/s'],
                correct: 0
            },
            {
                question: 'What is the largest planet in our solar system?',
                options: ['Saturn', 'Neptune', 'Jupiter', 'Uranus'],
                correct: 2
            },
            {
                question: 'What do plants use to make food from sunlight?',
                options: ['Respiration', 'Fermentation', 'Photosynthesis', 'Decomposition'],
                correct: 2
            }
        ]
    },
    geography: {
        title: '🌍 Geography Genius',
        description: 'Explore the world and master geography',
        questions: [
            {
                question: 'What is the capital of France?',
                options: ['Lyon', 'Paris', 'Marseille', 'Nice'],
                correct: 1
            },
            {
                question: 'Which is the largest country by area?',
                options: ['Canada', 'United States', 'Russia', 'China'],
                correct: 2
            },
            {
                question: 'What is the capital of Japan?',
                options: ['Kyoto', 'Tokyo', 'Osaka', 'Yokohama'],
                correct: 1
            },
            {
                question: 'Which river is the longest in the world?',
                options: ['Amazon', 'Yangtze', 'Nile', 'Mississippi'],
                correct: 2
            },
            {
                question: 'How many continents are there?',
                options: ['5', '6', '7', '8'],
                correct: 2
            }
        ]
    }
};

let currentGame = null;
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

// Start Game
function startGame(gameType) {
    currentGame = gameType;
    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];
    document.getElementById('gameModal').style.display = 'block';
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const gameData = gamesData[currentGame];
    const question = gameData.questions[currentQuestion];
    
    let html = `
        <div class="game-header">
            <h2>${gameData.title}</h2>
            <p>Question ${currentQuestion + 1} of ${gameData.questions.length}</p>
        </div>
        
        <div class="question">
            <div class="question-text">${question.question}</div>
            <div class="question-counter">Progress: ${currentQuestion + 1}/${gameData.questions.length}</div>
        </div>
        
        <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        html += `<button class="option-btn" onclick="selectAnswer(${index})">${option}</button>`;
    });
    
    html += `
        </div>
        
        <div class="game-buttons">
            <button class="btn btn-primary" onclick="nextQuestion()" style="margin-top: 1rem; width: 100%;">Next Question</button>
        </div>
    `;
    
    document.getElementById('gameContainer').innerHTML = html;
}

// Select Answer
function selectAnswer(index) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (idx === index) {
            btn.classList.add('selected');
        }
    });
    
    selectedAnswers[currentQuestion] = index;
}

// Next Question
function nextQuestion() {
    const gameData = gamesData[currentGame];
    const question = gameData.questions[currentQuestion];
    
    if (selectedAnswers[currentQuestion] === undefined) {
        alert('Please select an answer!');
        return;
    }
    
    // Check if answer is correct
    if (selectedAnswers[currentQuestion] === question.correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < gameData.questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    const gameData = gamesData[currentGame];
    const percentage = Math.round((score / gameData.questions.length) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Perfect Score! You are a master! 🌟';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Excellent! Great job! 👏';
        emoji = '⭐';
    } else if (percentage >= 60) {
        message = 'Good effort! Keep practicing! 📚';
        emoji = '✅';
    } else {
        message = 'Nice try! Keep learning! 💪';
        emoji = '🎯';
    }
    
    let html = `
        <div class="game-header">
            <h2>${gameData.title}</h2>
            <p>Game Complete!</p>
        </div>
        
        <div class="game-score">
            <h3>Your Score</h3>
            <div class="score-value">${emoji} ${score}/${gameData.questions.length}</div>
            <p style="margin-top: 1rem; font-size: 1.2rem;">${percentage}%</p>
            <p style="margin-top: 1rem; font-size: 1.1rem;">${message}</p>
        </div>
        
        <div class="game-buttons">
            <button class="btn btn-primary" onclick="startGame('${currentGame}')">Play Again</button>
            <button class="btn btn-secondary" onclick="closeGame()">Exit</button>
        </div>
    `;
    
    document.getElementById('gameContainer').innerHTML = html;
}

console.log('Games Module Loaded Successfully!');