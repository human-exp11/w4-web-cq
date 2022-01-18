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



var numbOfQuestions = 8;
var maxTime = 60;
var userScore = [ ];



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

// The init function is called when the page loads 
function init() {
    var viewHighScores = JSON.parse(localStorage.getItem("userScore"));
    if (viewHighScores !== null) {
        userScore = viewHighScores;
    }
}

function startQuiz() {

}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function beginTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (answeredAll && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                gameOver();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            timesUp();
        }
    }, 1000);
}


 
function restartQuiz() {
 
}

function submitScore() {

}


var startButton = document.querySelector("#startQuiz");
var submitScoreButton = document.querySelector("#submitScore");
var restartButton = document.querySelector("#restartQuiz");
var highscoresButton = document.querySelector("#viewHighscores");

startButton.addEventListener("click", startQuiz);
submitScoreButton.addEventListener("click", submitScore);
highscoresButton.addEventListener("click", viewHighScores);
init();

restartButton.addEventListener("click", restartQuiz);

