//Acceptance Criteria
// Referenced study material https://www.youtube.com/watch?v=riDzcEQbX6k
//Click Start Button 


startBtn = document.getElementById("startBtn")
startPage = document.getElementById("startPage") 

//querySelector worked but not getElementbyClass
var quizBoxEl = document.querySelector(".quizBox")
var questionEl = document.getElementById ("question")
var answerEl = document.getElementById ("userAnswer")


// Click start then Timer Begins
var timerEl = document.getElementById("gameTimer")

startBtn.addEventListener('click', function(){
    seconds = 60;
    countdown = setInterval(function () { // since countdown needs to be re-used when user makes incorrect, putting countdown as global var. removing var
        seconds--;
    if (seconds >= 0) {
        timerEl.textContent = "Seconds remaining: " + seconds; 
        // console.log("seconds:" + seconds);  //keeping until gaveOver function is complete
    } else if (seconds === 0) 
        gameOver(); //game over - need to create function
    

    
}, 1000);
});

//Timer runs well

// addEventListener for the quiz
startBtn.addEventListener('click', startQuiz)
// Click start then present with a question


//function to start quiz
function startQuiz() {
    startBtn.classList.add('hide');
    startPage.style.display = 'none';
    quizBoxEl.classList.remove('hide');
    score = 0;
    nextQuestion();
  }
  


// When a question is answered, present another question
// function taken from youtube but minus the shuffled array
var questionIndex = 0;
function nextQuestion(question) {
    if (questionIndex < quizQuestions.length) {
    var currentQuestion = quizQuestions[questionIndex];
    questionIndex++;
    questionEl.innerText = currentQuestion.question;
    replaceAnswers();
    } else {
        gameOver();
    }

//replaces child element of div userAnswer with the text from the array
    currentQuestion.answers.forEach (answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correctAnswer) {
            button.dataset.correctAnswer = answer.correctAnswer
        }
        answerEl.appendChild(button);
        button.addEventListener("click", selectedAnswer);
    });
}  


//function to remove userAnswer div's child element
function replaceAnswers () {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

// function for user input; learned from https://www.youtube.com/watch?v=PBcqGxrr9g8
function selectedAnswer (e){
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correctAnswer === "true";
    if (isCorrect) {
        selectBtn.classList.add("Correct")
        score++;
        console.log("score is:" + score) // score added
    }else {
        selectBtn.classList.add("Incorrect")
        incorrectAnswer();
    }
    // learned from https://www.youtube.com/watch?v=PBcqGxrr9g8 at 27:00
    Array.from(answerEl.children).forEach (button => {
        if (button.dataset.correct === "true") {
            button.classList.add("Correct");
            
        }
        button.disabled = true;
    });
    nextQuestion();
}

// incorrect answers must result in time penalty of 5 seconds
function incorrectAnswer () {
    seconds -= 5;
}
// All questions must be answered or timer reaches 0 = game is over

// Game over? Save Initials and Score

//View highscores - button created in HTML

//Creating array of questions


const quizQuestions = [
    {
        question: "What is the correct syntax for declaring a variable in JavaScript?",
        answers: [
            {text: 'var myVariable', correctAnswer: true },
            {text: 'createvar myVariable', correctAnswer: false },
            {text:  'const myVariable', correctAnswer: false },
            {text:  'let myVariable', correctAnswer: false }
        ],
    },
    {
         question: "Which programming language is used for styling web pages?",
         answers: [
            {text: 'CSS', correctAnswer: true },
            {text: 'HTML', correctAnswer: false },
            {text:  'JavaScript', correctAnswer: false },
            {text:  'jQuery', correctAnswer: false }
        ],
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        answers: [
           {text: 'React', correctAnswer: false },
           {text: 'JAVA', correctAnswer: true },
           {text:  'Angular', correctAnswer: false },
           {text:  'Vue', correctAnswer: false }
       ],
   },
   {
    question: "What is the standard markup language for creating web pages?",
    answers: [
       {text: 'Angular', correctAnswer: false },
       {text: 'Python', correctAnswer: false },
       {text:  'CSS', correctAnswer: false },
       {text:  'HTML', correctAnswer: true }
        ],
    },
    {
    question: "How many values are in a boolean?",
    answers: [
       {text: '1 value', correctAnswer: false },
       {text: 'infinite values', correctAnswer: false },
       {text:  '2 values', correctAnswer: true},
       {text:  '0 values', correctAnswer: false }
   ],
},


]


