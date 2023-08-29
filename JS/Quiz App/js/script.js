

const questions = [
    {
        question: "Who is the Developer of this quiz?",
        choices: ["Ahmed", "Ali", "Farhan", "Affan"],
        correctAnswer: 2
    },
    {
        question: "What is 2+2?",
        choices: [4, 6, 8, 10],
        correctAnswer: 0
    },
    {
        question: "What is 3*9?",
        choices: [20, 30, 27, 10],
        correctAnswer: 2
    },
    {
        question: "What Course are you in?",
        choices: ["Web Development", "Graphic Designing", "Python Programing", "App Development"],
        correctAnswer: 2
    },
    {
        question: "What is 25/5?",
        choices: [10, 5, 15, 25],
        correctAnswer: 1
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices-container');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;

        
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.style.padding = "10px 20px";
        button.style.margin = "5px";
        button.style.border = "1px solid #121244";
        button.style.borderRadius = "10px";
        button.style.cursor = "pointer";
        button.style.fontFamily = "georgia";
    

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = "#121244";
            button.style.boxShadow = "1px 1px 6px black";
            button.style.color = "white";
            button.style.textShadow = "2px 2px 10px black";
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = "white";
            button.style.color = "black";
            button.style.boxShadow = "none";
            button.style.border = "1px solid #121244";
            button.style.textShadow = "none";
        });

        button.addEventListener('click', () => checkAnswer(index));

        choicesElement.appendChild(button);

        
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {

        endQuiz();
    }
}

function endQuiz() {

    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = '';
    scoreElement.textContent = `Your Score: ${score}`;
}



displayQuestion();


const restartButton = document.getElementById('restart-button');

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

restartButton.style.backgroundColor = "#121244";
restartButton.style.color = "white";
restartButton.style.padding = "10px 20px";
restartButton.style.margin = "5px";
restartButton.style.border = "1px solid #121244";
restartButton.style.borderRadius = "10px";
restartButton.style.cursor = "pointer";
restartButton.style.fontFamily = "georgia";
restartButton.style.boxShadow = "2px 2px 10px black";
restartButton.style.textShadow = "2px 2px 10px black";



restartButton.addEventListener('mouseover', () => {
    restartButton.style.backgroundColor = "white";
    restartButton.style.boxShadow = "1px 1px 6px black";
    restartButton.style.color = "black";
    restartButton.style.textShadow = "none";
});

restartButton.addEventListener('mouseout', () => {
    restartButton.style.backgroundColor = "#121244";
    restartButton.style.color = "white";
    restartButton.style.boxShadow = "none";
    restartButton.style.border = "1px solid #121244";
    restartButton.style.boxShadow = "1px 1px 6px black";
    restartButton.style.textShadow = "2px 2px 10px black";
});

restartButton.addEventListener('click', restartQuiz);

