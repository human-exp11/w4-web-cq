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










// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function beginTimer() {
    // Sets timer
    timer = setInterval(function() {
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
    win.textContent = winCounter;
  }