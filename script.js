var quiz = {
    questions : [
        "Which output method is most effective for debugging code in the browser?",
        "What character is used to separate JavaScript statements?",
        "In order for a Javascript function to run, we must ________ the function",
        "Javascript variables are often referred to as...?",
        "A String contains characters surrounded by which of the following?",
        "What type of loop continues to run while a specified condition is true?"
    ],
    answers : [
        ["Source", "Call", "Carrier", "Console.log"],
        ["period", "exclamation", "semi-colon", "hash-tag"],
        ["Sound", "Point", "Invoke", "Move"],
        ["Containers", "Rooms", "Rainbows", "Unicorns"],
        ["Numbers", "Quotes", "Brackets", "Hash-tags"],
        ["For Loop", "In Loop", "While Loop", "If Loop"]
    ],
    correctAnswers : [
        "Console.log",
        "semi-colon",
        "Invoke",
        "Containers",
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
var minutes;
var seconds;
var timerInterval;
var score;

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
var setMinutes = 60 * 1;



//start game 
function startGame() {
    console.log('start getting called.');
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
        button1.setAttribute('id', 'button1');
        button2.setAttribute('id', 'button2');
        button3.setAttribute('id', 'button3');
        button4.setAttribute('id', 'button4');

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
    console.log('questiongs length is', quiz.questions.length);
    console.log('question on is ', questionOn);
    if(questionOn <= (quiz.questions.length - 1)){
        questionEl.textContent = quiz.questions[questionOn];
        correctAnswer = quiz.correctAnswers[answerOn];
        console.log('correct answer is: ', correctAnswer);
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        var button3 = document.getElementById('button3');
        var button4 = document.getElementById('button4');
        for(var j = 0; j < quiz.answers[answerOn].length; j++){
            var answer = quiz.answers[answerOn][j];

            if(j === 0){
                button1.textContent = answer;
                console.log("button 1 is: ", button1.textContent);
            } else if(j === 1){
                button2.textContent = answer;
                console.log("button 2 is: ", button2.textContent);
            } else if(j === 2){
                button3.textContent = answer;
                console.log("button 3 is: ", button3.textContent);
            } else if(j === 3){
                button4.textContent = answer;
                console.log("button 4 is: ", button4.textContent);
            } else {
                console.log('test');
            };
        };
        setTime(currentTime);
    } else {
        endGame();
    }
}

//End Game
function endGame(){
    clearInterval(timerInterval);
    score = currentTime;
    button1 = document.getElementById('button1');
    button1.remove();
    button2 = document.getElementById('button2');
    button2.remove();
    button3 = document.getElementById('button3');
    button3.remove();
    button4 = document.getElementById('button4');
    button4.remove();
    console.log('score is: ', score);
    questionEl.textContent = "Game Over"
    questionEl.setAttribute('style', 'font-size:45px; text-align:center;');
    answer1El.textContent = ('Your Score is ' + score + '!');
    answer1El.setAttribute('style', 'font-size:24px; text-align:center; margin-left:-1%;')
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
            endGame();
        }
    }, 1000);
}
