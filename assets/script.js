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


var startButton = document.querySelector("#startQuiz");
var count = 0;
var maxTime = 60;
var points = 0;
var nextButton =   ;


var questions = [ 
    {
        asked: "Which structure of code allows you to repeat the same action or actions a specified number of times?",
        choices: ["repeat", "for loop", "do while", "do loop"],
        answer: "alert"
    },
    {
        asked: "Which scope is at the top level and applies to all code below?",
        choices: ["National", "Wordly", "Global", "Above All"],
        answer: "alert"
    },
];

 
// Method that joins several arrays and returns a new array? A= concat

// Method that adds a new element at the end of an array? A = push

// Function that opens up "OK/Cancel" within browser window & returns T/F? A= Confirm ()

// Which funtion will break up a string and return an integer? A= parseInt

// What is "DOM" short for?  A=Document Object Model

// Which method adds list items to the end of existing items under the same parent? A= appendChild
// 


// The init function is called when the page loads 
function init() {
    highScores();
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


  // These functions are used by init
function highScores() {
    // Get stored value from client storage, if it exists
    var storedResults = localStorage.getItem("userScores");
    // If stored value doesn't exist, set counter to 0
    if (storedResults === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedResults;
    }
    //Render win count to page
    score.textContent = winCounter;
  }

  init();


