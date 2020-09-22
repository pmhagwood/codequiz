var quiz = {
    questions : [
        "In CSS the box model is used for layout. Which of the following is NOT included in the box model?",
        "Semantic HTML is used to clearly describe elements meaning to both the browser and developer. What elements are part of semantic HTML?",
        "Pseudo-classes in CSS describe which of the following?",
        "Javascript variables are containers used for storing data values.",
        "Which of the following values would NOT be used to position an element using CSS?",
        "What type of loop continues to run while a specified condition is true?"
    ],
    answers : [
        ["Margin", "Padding", "Border", "Edge"],
        ["Section", "Footer", "Aside", "All of the Above"],
        ["Store data on a server", "Set the font-face of type", "Set the background color of the body tag", "Style an element when a user mouses over it"],
        ["True", "False"],
        ["Fixed", "Relative", "Near", "Absolute"],
        ["For Loop", "In Loop", "While Loop", "If Loop"]
    ]
};



// Create IntroScreen and Button to start time and questions
var introEl = document.createElement('p');
var intro2El = document.createElement('p');
var intro3El = document.createElement('p');
var startbtn = document.createElement('BUTTON');
var currentTime;
//test
var currentTimebtn = document.createElement('BUTTON');

// Target the content div
var contentEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var buttonEl = document.getElementById('button');
var checktimeEl = document.getElementById('button');

// set content
introEl.textContent = 'This quiz will test your knowledge of CSS, HTML, and JS. You will answer a series of multiple choice questions and you have 3 minutes to complete the quiz. '; 
intro2El.textContent = 'If you get a question wrong, 10 seconds will be removed from the timer.';
intro3El.textContent = 'Ready, set, go!';
startbtn.innerHTML = 'START QUIZ!';
currentTimebtn.innerHTML = 'Check Time';


// attach elements to screen
contentEl.appendChild(introEl);
contentEl.appendChild(intro2El);
contentEl.appendChild(intro3El);
buttonEl.appendChild(startbtn);
//Style elements
introEl.setAttribute('style', 'font-size: 24px; padding-top: 20px; line-height: 2em');
intro2El.setAttribute('style', 'font-size: 24px; line-height: 2em');
intro3El.setAttribute('style', 'font-size: 28px; padding-bottom:40px; line-height: 2em; text-align:center; font-weight:bold');
normalBg();

// Change background function
function changeBackground () {
    startbtn.setAttribute('style', 'background-color: #4661e7; border:1px black; color: white; padding:5px 20px; border-radius: 8px; font-weight: bold;')
}
function normalBg () {
    startbtn.setAttribute('style', 'background-color: #304fe5; border:1px black; color: white; padding:5px 20px; border-radius: 8px; font-weight: bold;')
}


// Rollover Effect for start button
startbtn.addEventListener('mouseover', changeBackground);
startbtn.addEventListener('mouseout', normalBg);
startbtn.addEventListener('click', startGame);
// Rollover Effect for checktime button
currentTimebtn.addEventListener('mouseover', changeBackground);
currentTimebtn.addEventListener('mouseout', normalBg);
currentTimebtn.addEventListener('click', removeTime);


// target timer text
var timeEl = document.querySelector(".entertimer");
// Set number of minutes in timer
var setMinutes = 60 * 3;


//start game 
function startGame() {
    setTime(setMinutes);
    contentEl.removeChild(introEl);
    contentEl.removeChild(intro2El);
    contentEl.removeChild(intro3El);
    buttonEl.removeChild(startbtn);
    checktimeEl.appendChild(currentTimebtn);
}

// remove time
function removeTime(){
    console.log('current time ', currentTime);
    currentTime = currentTime - 10;
    console.log('current time -10 is: ', currentTime);
    setTime(currentTime);
}

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
