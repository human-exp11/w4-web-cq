var questions = [
    {
        title: "Which structure of code allows you to repeat the same action or actions a specified number of times?",
        choices: [ {choice: "repeat"}, {choice: "for loop"}, {choice: "do while"}, {choice:"do loop"} ],
        answer: "for loop"
    },
    {
        title: "Which scope is at the top level and applies to all code below?",
        choices: [ {choice: "National"}, {choice: "Worldly"}, {choice:"Global"}, {choice: "Above All"} ],
        answer: "Global"
    },
    {
        title: "Which method joins several arrays and returns a new one?",
        choicess: [{ choice: "filter"}, {choice:  "replace"}  ,  {choice: "push"}, {choice: "concat"}],
        answer: "concat"
    },
    {
        title: "Which method adds a new element at the end of an array?",
        choicess: [{choice: "appendChild"}, {choice: "push"},  {choice: "map"},  {choice: "sort"} ],
        answer: "push"
    },
    {
        title: "Which function open up 'OK/Cancel' within the browser window and returns a boolean?",
        choices: [{choice: "alert"}, {choice: "prompt"}, {choice: "confirm"},  {choice:"notify"} ],
        answer:  "prompt"
    },
    {
        title: "Name the function that will break up a string and return an integer",
        choices: [ {choice: "breakInt"}, {choice:"parseInt"}, {choice:"number"}, {choice: "sliceInt"} ],
        answer: "parseInt"
    },
    {
        title: "What is DOM short for?",
        choices: [ {choice: "Dungeons of Magicians"}, {choice: "Document of Methods"}, {choice: "Document Object Model"}, {choice: "Division of Methods"} ],
        answer: "Document Object Model"
    },
    {
        title: "Which method adds list items to the end of existing lists that are under the same parent?",
        choices: [{choice: "appendChild"}, {choice:"addChild"}, {choice: "appendParent"},  {choice: "appendCousin"} ],
        answer: "appendChild"
     }
]
var timeRem ;
var endGame;
var score = 0;
var resetState;
var showQuestion;
var setNextQuestion;
var quizCompleteElement= document.getElementById("complete-container");
var containerHighScoresElement = document.getElementById("high-scores-container");
var scoresButton = document.getElementById("scores-btn");
var listOfHighScoresElement = document.getElementById("high-scores-list");
var initialsForm = document.getElementById("submit-initials");
var beginButton = document.getElementById('begin-btn');
var nextButton = document.getElementById('next-btn');
var startContainerElement = document.getElementById("start-container")
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var correctElement = document.getElementById("correct");
var wrongElement = document.getElementById("wrong");
var timerElement= document.getElementById('timer-count');
var currentQuestionIndex = 0;
var highScores = [];
let shuffledQuestions;
var ulCreate = document.createElement("ul");


initialsForm.addEventListener("submit", createUserScore);
getHighScores;

scoresButton.addEventListener("click", getHighScores);


// quiz to begin once button clicked
beginButton.addEventListener('click', beginQuiz);

var startTimer = function () {
    timeRem = 90;
    // sets timer
    var timer = setInterval(function() {
        timerElement.innerText = timeRem;
        timeRem--

        if (endGame) {
            clearInterval (timer);
        }

        if (timeRem <= 0) {
            displayScore()
            timerElement.innerText = 0
            clearInterval (timer);
        }

        }, 1000);
}

function beginQuiz() {
    startContainerElement.classList.add("hide");
    startContainerElement.classList.remove("show");
    questionContainerElement.classList.remove("hide");
    questionContainerElement.classList.add("show");
    // shuffle questions to be randomizes
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    startTimer();
    render(currentQuestionIndex);
    setNextQuestion();
}

// Renders questions and choices to page: 
function render(currentQuestionIndex) {
    // Clears existing data 
    questionElement.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[currentQuestionIndex].title;
        var userChoices = questions[currentQuestionIndex].choices;
        questionContainerElement.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionContainerElement.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compareAnswer));
    })
}

// nextButton.addEventListener("click", (setNextQuestion) {
//     currentQuestionIndex++;
//     console.log("buttonClick");
//     setNextQuestion();
// })

function setNextQuestion () {
    resetState ()
    console.log(currentQuestionIndex);
    showQuestion(shuffledQuestions[currentQuestionIndex]);   
}


function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function showQuestion(title) {
    console.log(title);
    questionElement.innerText = questions.title;
    for (var i = 0; i < choices.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.innerText = index.choices[i].choice
        answerButton.classList.add("btn")
        answerButton.classList.add("answerBtn")
        answerButton.addEventListener("click", compareAnswer)
        answerButtonsElement.appendChild(answerButton)
    }
}

function ansCorrect() {
    if (correctElement.className = "hide") {
        correctElement.classList.remove("hide");
        wrongElement.classList.add("hide");
        alert("Well Done!");
    }
}  

var ansWrong = function() {
    if (wrongElement.className = "hide") {
        wrongElement.classList.remove("hide")
        correctElement.classList.add("hide")
        alert("Incorrect :(")
    }
}
// function timesUp();
// function quizComplete();

function compareAnswer (e) {
    const selectedAnswer = e.target;
    if (shuffledQuestions[currentQuestionIndex].answer === selectedAnswer.innerText) {
        ansCorrect()
        score = score + 5
    }

    else {
      ansWrong()
      score = score - 5;
      timeRem = timeRem - 3;
};

//go to next question, check if there is more questions
currentQuestionIndex++
    if  (shuffledQuestions.length > currentQuestionIndex + 1) {
        resetState ()
    }   
    else {
       endGame = "true";
       showScore();
    }
}

 
//Display total score screen at end of game
function showScore() {
    questionContainerElement.classList.add("hide");
    quizCompleteElement.classList.remove("hide");
    quizCompleteElement.classList.add("show");

    var displayScore = document.createElement("p");
    displayScore.innerText = ("Your final score is " + score + "!");
}       



 
//create high score values
var createUserScore = function(event) { 
    event.preventDefault() 
    var initials = document.querySelector("#initials").value;
    if (!initials) {
      alert("Enter your intials.");
      return;
    }
}

initialsForm.reset();

var highScore = {
  initials: initials,
  score: score
} 

  
highScores.push(highScore);
highScores.sort((a, b) => {return b.score-a.score});

//clear visibile list to resort
 while (listOfHighScoresElement.firstChild) {
     listOfHighScoresElement.removeChild(listOfHighScoresElement.firstChild)
 }
//create elements in order of high scores
for (var i = 0; i < highScores.length; i++) {
  var highScoresElement = document.createElement("li");
  highScoresElement.ClassName = "high-score";
  highScoresElement.innerHTML = highScores[i].initials + " - " + highScores[i].score;
listOfHighScoresElement.appendChild(highScoresElement);
}

saveHighScore;

//save high score
var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(highScores))    
}



//load values/ called on page load
var getHighScores = function () {
    var storedHighScores = localStorage.getItem("HighScores")
        if (!storedHighScores) {
        return false;
    }

    storedHighScores = JSON.parse(storedHighScores);
    storedHighScores.sort((a, b) => {return b.score-a.score})


    for (var i = 0; i < storedHighScores.length; i++) {
        var highScoresElement = document.createElement("li");
        highScoresElement.ClassName = "high-score";
        highScoresElement.innerText = storedHighScores[i].initials + " - " + storedHighScores[i].score;
        listOfHighScoresElement.appendChild(highScoresElement);
        highScores.push(storedHighScores[i]);  
    }


    getHighScores()
}

    //display high score screen from link or when intiials entered
var displayHighScores = function() {

        containerHighScoresElemnt.classList.remove("hide");
        containerHighScoresElement.classList.add("show");
        endGame = "true"

        if (containerEndElement.className = "show") {
            containerEndElement.classList.remove("show");
            containerEndElement.classList.add("hide");
            }
        if (containerStartElement.className = "show") {
            containerStartElement.classList.remove("show");
            containerStartElement.classList.add("hide");
            }
            
        if (containerQuestionElement.className = "show") {
            containerQuestionElement.classList.remove("show");
            containerQuestionElement.classList.add("hide");
            }

        if (correctElement.className = "show") {
            correctElement.classList.remove("show");
            correctElement.classList.add("hide");
        }

        if (wrongElement.className = "show") {
            wrongElement.classList.remove("show");
            wrongElement.classList.add("hide");
            }
        
}