//Acceptance Criteria
//Click Start Button - done in CSS/HTML - still need to connect to JS -- startBtn now works with timer; 
var startBtn = document.getElementById("startBtn") 
// Click start then Timer Begins
var timerEl = document.getElementById("gameTimer")

startBtn.addEventListener('click', function(){
    var seconds = 60;
    var countdown = setInterval(function () {
        seconds--;
    if (seconds >= 0) {
        timerEl.textContent = "Seconds remaining: " + seconds; 
        console.log("seconds:" + seconds);
    } else if (seconds === 0) 
        gameOver(); //game over - need to create function
    

    
}, 1000);
})
// Click start then present with a question

// When a question is answered, present another question

// incorrect answers must result in time penalty of 5 seconds

// All questions must be answered or timer reaches 0 = game is over

// Game over? Save Initials and Score

//Creating array of questions

var quizQuestions = [
    {
        question: "What is the correct syntax for declaring a variable in JavaScript?",
        answers: {
        a: 'var myVariable',
        b: 'createvar myVariable',
        c: 'const myVariable',
        d: 'let myVariable'
    },
    correctAnswer: 'a'
    },

    {
        question: "Which of the following is not a JavaScript data type?",
        answers: {
        a: 'String',
        b: 'Booleaen',
        c: 'Numbers',
        d: 'Arrays'
    },
    correctAnswer: 'd'
    },

    {
        question: "What does the console.log() function do?",
        answers: {
        a: 'Style your website',
        b: 'Create a new webpage',
        c: 'Your personal calculator',
        d: 'Print output to the console'
    },
    correctAnswer: 'a'
    },
    {
        question: "Which JavaScript data type has only 2 values?",
        answers: {
        a: 'Strings',
        b: 'Boolean',
        c: 'Numbers',
        d: 'Integers'
    },
    correctAnswer: 'b'
    },
    {
        question: "What operator in JavaScript is used for strict equality comparisons?",
        answers: {
        a: '==',
        b: '===',
        c: '!==',
        d: '!='
    },
    correctAnswer: 'b'
    }
]

let question = 0;
let score = 0;
