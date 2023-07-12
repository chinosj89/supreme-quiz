//Acceptance Criteria
// Referenced study materials https://www.youtube.com/watch?v=riDzcEQbX6k , https://www.youtube.com/watch?v=PBcqGxrr9g8


//Click Start Button 
startBtn = document.getElementById("startBtn");
startPage = document.getElementById("startPage");

var quizBoxEl = document.querySelector(".quizBox");
var questionEl = document.getElementById ("question");
var answerEl = document.getElementById ("userAnswer");
var scoreBtnEl = document.querySelector(".highScoreBtn");
var nameInput = document.querySelector('#userNameInput');
var submitButton = document.querySelector('#submitBtn');
var finalPage = document.getElementById('finalScorePage');
// var replayBtn = document.getElementById('replayBtn');
var clearBtn = document.getElementById('clearBtn');

// Notification for if answers are right or wrong
var correctNotification = document.getElementById('correct');
var wrongNotification = document.getElementById('wrong');

let score = 0;
// Click start then Timer Begins
var timerEl = document.getElementById("gameTimer")

/*
function playAgain(event) {
    event.preventDefault();
    startPage.style.display = 'block';
    finalPage.style.display = 'none'
    resetState();
    startQuiz();
    renderScore();
  }
  
replayBtn.addEventListener('click', function(event) {
    playAgain(event);
});
  */


//Buttons
function clearScores(event) {
  event.preventDefault();
  userInput = []; 
  localStorage.removeItem('userInput'); 
  renderScoring(); 
}

clearBtn.addEventListener('click', clearScores);

//Start Game: Runs timer and Runs quiz questions
startBtn.addEventListener('click', function(){
    seconds = 60;
    countdown = setInterval(function() {
      seconds--;
      timerEl.textContent = "Seconds remaining: " + seconds;
      if (seconds === 0) {
        clearInterval(countdown);
        renderScore();
      }
    }, 1000);
  });
  
// incorrect answer penalty
function incorrectAnswer () {
    seconds -= 5;
}


startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add('hide');
    startPage.style.display = 'none';
    quizBoxEl.classList.remove('hide');
    //document.querySelector('.highScores').style.display = 'none';
    nextQuestion();
    
  }
  
// When a question is answered, present another question
// function taken from youtube but minus the shuffled array
var questionIndex = 0;

function nextQuestion() {
  if (questionIndex < quizQuestions.length) {
    var currentQuestion = quizQuestions[questionIndex];
    questionEl.innerText = currentQuestion.question;
    replaceAnswers();
    questionIndex++;
  } else {
    renderScore();
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

//function to remove userAnswer div's child element also taken from youtube
function replaceAnswers () {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}


// function for user input; learned from https://www.youtube.com/watch?v=PBcqGxrr9g8
function selectedAnswer (e){
    resetNotifications();
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correctAnswer === "true";
    if (isCorrect) {
        score++;
        userScore = score;
        console.log("Current Score: " + score);
        correctNotification.style.display ='block';
    }else {
        incorrectAnswer();
        wrongNotification.style.display ='block';
        
    }
    nextQuestion();
}

//reset Correct or Wrong after selectedAnswer; 
function resetNotifications() {
    correctNotification.style.display = 'none';
    wrongNotification.style.display = 'none';
  }



// Game ended; tallies score and shows final page where user submits their name
function renderScore () {
    submitButton.classList.remove('hide');
    nameInput.style.display = 'block';
    quizBoxEl.classList.add('hide');
    timerEl.classList.add('hide');
    finalPage.classList.remove('hide');

    // finalScore var for span on the page so final score is shown on the page
    var finalScore = document.getElementById('finalScorePageMessage');
    finalScore.textContent = score;
    resetNotifications();
}

//lesson 26 Stu-Local-Storage-Todos // for storing data in the local storage 
var scoreListEl = document.getElementById('scoreList');
var userInput = [];
function renderScoring () {
    scoreListEl.innerHTML="";

    for (var i = 0; i < userInput.length; i++) {
        var user = userInput[i];
        
        var li = document.createElement("li");
        li.textContent=user + ": " + score;

        scoreListEl.appendChild(li);
    }
}
function init () {
    var storedInfo = JSON.parse(localStorage.getItem("userInput"));
    var storedScore = JSON.parse(localStorage.getItem("userScore"));
    if (storedInfo && storedScore!== null) {
        userInput = storedInfo;
        userScore = storedScore;
    }
    renderScoring();
}    

function storeScores() {
    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.setItem("userScore", JSON.stringify(userScore));
}
submitButton.addEventListener('click',function(event){
    event.preventDefault();
    var userName = nameInput.value.trim();
    if (userName === "") {
        return;
    }
    userInput.push(userName);
    nameInput.value = "";

    storeScores();
    renderScoring();

})
init();


// need to look into this more // not part of acceptance criteria; 
/*
scoreBtnEl.addEventListener('click', viewHighScore)

function viewHighScore (){
    startBtn.classList.add('hide');
    startPage.style.display = 'none';
    timerEl.classList.add('hide');
    finalPage.classList.remove('hide');
} 
*/
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
    {
        question: "What is the result of the following expression: 2 + 2 * 3?",
        answers: [
            {text: "4", correctAnswer: false},
            {text: "8", correctAnswer: true},
            {text: "10", correctAnswer: false},
            {text: "12", correctAnswer: false}
        ]
    },
    {
        question: "What is the CSS Property used to change the color of the text?",
        answers: [
            {text: "background-color", correctAnswer: false},
            {text: "text-color", correctAnswer: false},
            {text: "color", correctAnswer: true},
            {text: "font-color", correctAnswer: false}
        ]
    },
    {
        question: "What is the for loop function for?",
        answers: [
            {text: "to define a function", correctAnswer: false},
            {text: "to handle user input", correctAnswer: false},
            {text: "to specify who the gift is for", correctAnswer: false},
            {text: "to perform an action repeatedly", correctAnswer: true}
        ]
    },
    {
        question: "Why do you need to create a function ",
        answers: [
            {text: "to store data like 2+2", correctAnswer: false},
            {text: "to style your webpage", correctAnswer: false},
            {text: "to define a class or object", correctAnswer: false},
            {text: "to perform a specific task or calculation", correctAnswer: true}
        ]
    },
    {
        question: "Last Question: Did you like the quiz? ",
        answers: [
            {text: "Yes", correctAnswer: true},
            {text: "No", correctAnswer: true},
            {text: "Maybe", correctAnswer: true},
            {text: "No point in the quiz", correctAnswer: false}
        ]
    },
]


