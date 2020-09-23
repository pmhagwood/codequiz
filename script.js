var quiz = {
    questions : [
        "Which output method is most effective for debugging code in the browser?",
        "What character is used to separate JavaScript statements?",
        "In order for a Javascript function to run, we must ________ the function",
        "Javascript variables are containers used for storing data values.",
        "A String contains characters surrounded by which of the following?",
        "What type of loop continues to run while a specified condition is true?"
    ],
    answers : [
        ["Source", "Call", "Carrier", "Console.log"],
        ["period", "exclamation", "semi-colon", "hash-tag"],
        ["Sound", "Point", "Invoke", "Move"],
        ["True", "False"],
        ["Numbers", "Quotes", "Brackets", "Hash-tags"],
        ["For Loop", "In Loop", "While Loop", "If Loop"]
    ],
    correctAnswers : [
        "Console.log",
        "semi-colon",
        "Invoke",
        "True",
        "Quotes",
        "While Loop"
    ]
};

// set the question on and answer on
var questionOn = 0;
var answerOn = 0;
var correctAnswer = quiz.correctAnswers[answerOn];


// Create IntroScreen and Button to start time and questions
var startbtn = document.createElement('BUTTON');
var currentTime;
//test
var currentTimebtn = document.createElement('BUTTON');

// Target the content div
var questionEl = document.getElementById('questions');
var answer1El = document.getElementById('answer1');
var answer2El = document.getElementById('answer2');
var answer3El = document.getElementById('answer3');
var answer4El = document.getElementById('answer4');
var buttonEl = document.getElementById('button');
var checktimeEl = document.getElementById('button');
var mainContentEl = document.querySelector('#maincontent');
var button1;
var button2;
var button3;
var button4;

// set content

startbtn.innerHTML = 'START QUIZ!';
currentTimebtn.innerHTML = 'Check Time';


// attach elements to screen
buttonEl.appendChild(startbtn);




//Event Listener to start the game
// startbtn.addEventListener('click', startGame);
//event listener to test removing time.
// currentTimebtn.addEventListener('click', removeTime);


// target timer text
var timeEl = document.querySelector(".entertimer");
// Set number of minutes in timer
var setMinutes = 60 * 2;



//start game 
function startGame() {
    setTime(setMinutes);
    questionEl.textContent = quiz.questions[questionOn];
    buttonEl.removeChild(startbtn);
    // checktimeEl.appendChild(currentTimebtn);
    for(var i = 0; i < quiz.answers[0].length; i++){
        var answer = quiz.answers[0][i];
        button1 = document.createElement('button');
        button2 = document.createElement('button');
        button3 = document.createElement('button');
        button4 = document.createElement('button');

        if(i === 0){
            answer1El.appendChild(button1);
            button1.textContent = answer;
        } else if(i === 1){
            answer2El.appendChild(button2);
            button2.textContent = answer;
        } else if(i === 2){
            answer3El.appendChild(button3);
            button3.textContent = answer;
        } else {
            answer4El.appendChild(button4);
            button4.textContent = answer;
        };
    
    };
};

// Move to next question 
function nextQuestion() {
    questionEl.textContent = quiz.questions[questionOn];
    correctAnswer = quiz.correctAnswers[answerOn];
    console.log('correct answer is: ', correctAnswer);
    for(var j = 0; j < quiz.answers[answerOn].length; j++){
        var answer = quiz.answers[answerOn][j];

        if(j === 0){
            button1.textContent = answer;
            console.log(button1.textContent);
        } else if(j === 1){
            button2.textContent = answer;
            console.log(button2.textContent);
        } else if(j === 2){
            button3.textContent = answer;
            console.log(button3.textContent);
        } else {
            button4.textContent = answer;
            console.log(button4.textContent);
        };
    };
    setTime(currentTime);
}

// When a button inside the maincontent is clicked
mainContentEl.addEventListener('click', function(event){
    var element = event.target;
    // If that element button is clicked...
    console.log('correct answer is: ', correctAnswer);
    if(element.textContent === startbtn.textContent){
        startGame();
    } else if(element.textContent === correctAnswer) {
        questionOn++;
        answerOn++;
        console.log('question on: ', questionOn);
        console.log('answer on: ', answerOn);
        nextQuestion();
    } else {
        console.log('wrong');
        currentTime = currentTime - 10;
        questionOn++;
        answerOn++;
        nextQuestion();
    }
});

// remove time
// function removeTime(){
//     currentTime = currentTime - 10;
//     setTime(currentTime);
// }

// create timer
function setTime(duration) {
    if(currentTime > 0 || currentTime <= 0){
        clearInterval(timerInterval);
    }
    var timer = duration, minutes, seconds;
    
    timerInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    currentTime = timer;
    timeEl.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(timerInterval);
            timeEl.textContent = 00 + ":" + 00;
        }
    }, 1000);
}
