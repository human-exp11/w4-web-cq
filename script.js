const questions = [
    {
        question: "Which structure of code allows you to repeat the same action or actions a specified number of times?",
        answers: [
            { text: "repeat", correct: false },
            { text: "for loop", correct: true },
            { text: "do while", correct: false },
            { text: "do loop", correct: false },
        ]
    },
    {
        question: "Which scope is at the top level and applies to all code below?",
        answers: [
            { text: "National", correct: false },
            { text: "Worldly", correct: false },
            { text: "Global", correct: true },
            { text: "Above All", correct: false },
        ]
    },
    {
        question: "Which method joins several arrays and returns a new one?",
        answers: [
            { text: "filter", correct: false },
            { text: "replace", correct: false },
            { text: "push", correct: false },
            { text: "concat", correct: true },
        ]
    },
    {
        question: "Which method adds a new element at the end of an array?",
        answers: [
            { text: "appendChild", correct: false },
            { text: "push", correct: true },
            { text: "map", correct: false },
            { text: "sort", correct: false },
        ]
    },
    {
        question: "Which function open up 'OK/Cancel' within the browser window and returns a boolean?",
        answers: [
            { text: "alert", correct: false },
            { text: "prompt", correct: false },
            { text: "confirm", correct: true },
            { text: "notify", correct: false },
        ]
    },
    {
        question: "Name the function that will break up a string and return an integer",
        answers: [
            { text: "breakInt", correct: false },
            { text: "parseInt", correct: true },
            { text: "number", correct: false },
            { text: "sliceInt", correct: false },
        ]
    },
    {
        question: "What is DOM short for?",
        answers: [
            { text: "Dungeons of Magicians", correct: false },
            { text: "Document of Methods", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Division of Methods", correct: false },
        ]
    },
    {
        question: "Which method adds list items to the end of existing lists that are under the same parent?",
        answers: [
            { text: "appendChild", correct: true },
            { text: "addChild", correct: false },
            { text: "appendParent", correct: false },
            { text: "appendCousin", correct: false },
        ]
     }
]
var timer
var timeRem = 60;
const beginButton = document.getElementById('begin-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
var timerElement= document.getElementById('timer-count');
var isWin = false;


let shuffledQuestions, currentQuestionIndex;

// quiz to begin once button clicked
beginButton.addEventListener('click', beginQuiz);


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timeRem--;
      timerElement.textContent = timeRem;
      if (timeRem >= 0) {
        // Tests if win condition is met
        if (isWin && timeRem > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          quizComplete();
        }
      }
      // Tests if time has run out
      if (timeRem<= 0) {
        // Clears interval
        clearInterval(timer);
        timesUp();
      }
    }, 1000);
}


function beginQuiz  () {
    beginButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion ();
    startTimer();
}


nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    console.log("buttonClick");
    setNextQuestion();
})

function setNextQuestion () {
    resetState();
    console.log(currentQuestionIndex);
    showQuestion(shuffledQuestions[currentQuestionIndex]);   
}

function showQuestion(question) {
    console.log(question);
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

// function timesUp();
// function quizComplete();

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild);
    }
}

function selectAnswer (e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    // Array.from(answerButtonsElement.children) .forEach(button => {
    setStatusClass(selectedButton, correct);
    // })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        beginButton.innerText = 'Try Again';
        beginButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(document.body);
    if (correct){
        document.body.classList.add('correct');
    }
    else {
        document.body.classList.add('wrong');
        timeRem  = timeRem -5;
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
