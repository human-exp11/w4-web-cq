// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score



var quizQuestionsEl = document.querySelector("#quizQuestions");


var questions = [ 
    {
        asked: "Which structure of code allows you to repeat the same action or actions a specified number of times?",
        choices: [ "repeat" , "for loop",   "do while", "do loop"],
        answerIndex: 1,
    },
    {
        asked: "Which scope is at the top level and applies to all code below?",
        choices: ["National", "Worldly",  "Global", "Above All"],
        answerIndex: 2,
    },
    {
        asked: "Which method joins several arrays and returns a new one?",
        choices: ["filter", "replace", "push", "concat"],
        answerIndex: 3,
    },
    {
        asked: "Which method adds a new element at the end of an array?",
        choices: ["appendChild", "push", "map", "sort"],
        answerIndex: 1,
    },
    {
        asked: "Which function open up 'OK/Cancel' within the browser window and returns a boolean?",
        choices: ["alert", "prompt", "confirm", "notify"],
        answerIndex: 2,
    },
    {
        asked: "Name the function that will break up a string and return an integer.",
        choices: ["breakInt", "parseInt", "number", "sliceInt"],
        answerIndex: 1,
    },
    {
        asked: "What is DOM short for?",
        choices: ["Dungeon of Magicians", "Document of Methods", "Document Object Model", "Division of Methods"],
        answerIndex: 2,
    },
    {
        asked: "Which method adds list items to the end of existing lists that are under the same parent?",
        choices: ["appendChild", "addChild", "appendParent", "appendCousin"],
        answerIndex: 0,
    },
];
var userAnswer;
var choicesEl = document.querySelector("#choices");
var numbOfQuestion = 0;
var userScore = 0;
var enterInititalsEl = document.querySelector("#initials")
var highScoresButton = document.querySelector(".viewHighScores");

var finalQIndex = questions.length;
var currentQIndex = 0;
var userScore = [ ];
var highScores = [ ];
var numbOfQuestion = 0;
var timeRem = 60;
var timer;
var correct;
var timerElement = document.getElementById("timer-count");
var endGame;
var highScoresButton = document.querySelector("viewHighScores");
var startQuizButton = document.querySelector("startButton");
// var listOfHighScores = [ ]



function init( ) {}
highScoresButton.addEventListener("click", function () {
    document.getElementById("#viewHighScores");
    var viewHighScores = JSON.parse(localStorage.getItem("userScore"));
    if (viewHighScores !== null) {
        userScore = viewHighScores;
    }
});


startQuizButton.addEventListener("click", function( ) {
    document.getElementById("#startQuiz");
    startQuiz();
})


function startQuiz() {
    beginTimer ();
    var containerEl = document.querySelector(".container");
    containerEl.classList.add("hide");
    
    quizQuestionsEl.classList.remove("hide");
    displayQuestions();
}

function displayQuestions() {
    var questionDiv = document.createElement("div");
    questionDiv.textContent = questions [numbOfQuestion].asked;
    quizQuestionsEl.append(questionDiv);

    // create buttons and append them here
    let choiceBtns = document.createElement("button");
    button.innerHTML= choicesEl;
    document.body.appendChild(choiceBtns);

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function beginTimer() {
    timeRem = 60;
    timer = setInterval(function () {
        timeRem--;
        timerElement.textContent = timeRem;

        // Tests if time has run out
        if (timeRem=== 0) {
            // Clears interval
            clearInterval(timer);
            timesUp();
        }
    }, 1000);
}

function questions() {
    for (i = 0; i < questions.length; i++) {
        if (choiceBtns = asked.answerIndex) {
            alert = ("Excellent!");
        } else {
            alert = ("Incorrect.");
            timeRem = -5;
        }
        return;
    };
}

    

function endOfGame ( ) {
    clearInterval(timer);
    userScore = timeRem;
    var initialsContainerEl = document.querySelector("initialsContainer");
    initialsContainerEl.classList.remove("hide");
}





 
function restartQuiz() {
    clearInterval(timer);
    userScore = 0;
    timeRem = 0;
 
}

function submitScore() {

}


// // var startButton = document.querySelector("#startQuiz");
var submitScoreButton = document.querySelector("#submitScore");
// // var restartButton = document.querySelector("#restartQuiz");


startButton.addEventListener("click", startQuiz);
// // // submitScoreButton.addEventListener("click", submitScore);
// // // highScoresButton.addEventListener("click", viewHighScores);
// // // restartButton.addEventListener("click", restartQuiz);

 init();