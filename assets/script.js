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
        choices: ["repeat", "for loop", "do while", "do loop"],
        answer: "for loop"
    },
    {
        asked: "Which scope is at the top level and applies to all code below?",
        choices: ["National", "Wordly", "Global", "Above All"],
        answer: "Global"
    },
    {
        asked: "Which method joins several arrays and returns a new one?",
        choices: ["filter", "replace", "push", "concat"],
        answer: "concat"
    },
    {
        asked: "Which method adds a new element at the end of an array?",
        choices: ["appendChild", "push", "map", "sort"],
        answer: "push"
    },
    {
        asked: "Which function open up 'OK/Cancel' within the browser window and returns a boolean?",
        choices: ["alert", "prompt", "confirm", "notify"],
        answer: "confirm"
    },
    {
        asked: "Name the function that will break up a string and return an integer.",
        choices: ["breakInt", "parseInt", "number", "sliceInt"],
        answer: "parseInt"
    },
    {
        asked: "What is DOM short for?",
        choices: ["Dungeon of Magicians", "Document of Methods", "Document Object Model", "Division of Methods"],
        answer: "Document Object Model"
    },
    {
        asked: "Which method adds list items to the end of existing lists that are under the same parent?",
        choices: ["appendChild", "addChild", "appendParent", "appendCousin"],
        answer: "appendChild"
    },
];

var numbOfQuestion = 0;
var maxTime = 60;
var timeRem = 0;
var timer;
var timerElement = document.getElementById("timer-count");
var userScore = 0;
var highScoresButton = document.querySelector(".viewHighScores");
// var listOfHighScores = [ ]



highScoresButton.addEventListener("click", function () {
    document.getElementById("viewHighScores");
    var viewHighScores = JSON.parse(localStorage.getItem("userScore"));
    if (viewHighScores !== null) {
        userScore = viewHighScores;
    }
});


// // The init function is called when the page loads 
// function init() {
//     var viewHighScores = JSON.parse(localStorage.getItem("userScore"));
//     if (viewHighScores !== null) {
//         userScore = viewHighScores;
//     }
// }

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


 
function restartQuiz() {
    clearInterval(timer);
    userScore = 0;
    timeRem = 0;
 
}

function submitScore() {

}


var startButton = document.querySelector("#startQuiz");
// var submitScoreButton = document.querySelector("#submitScore");
var restartButton = document.querySelector("#restartQuiz");


startButton.addEventListener("click", startQuiz);
// submitScoreButton.addEventListener("click", submitScore);
// highScoresButton.addEventListener("click", viewHighScores);
// restartButton.addEventListener("click", restartQuiz);

// init();