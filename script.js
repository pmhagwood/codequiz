// Create IntroScreen and Button to start time and questions
var introEl = document.createElement('p');
var intro2El = document.createElement('p');
var intro3El = document.createElement('p');
var startbtn = document.createElement('BUTTON');

// Target the content div
var contentEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var buttonEl = document.getElementById('button');

// set content
introEl.textContent = 'This quiz will test your knowledge of CSS, HTML, and JS. You will answer a series of multiple choice questions and you have 3 minutes to complete the quiz. '; 
intro2El.textContent = 'If you get a question wrong, 10 seconds will be removed from the timer.';
intro3El.textContent = 'Ready, set, go!';
startbtn.innerHTML = 'START QUIZ!';


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


// Rollover Effect for button
startbtn.addEventListener('mouseover', changeBackground);
startbtn.addEventListener('mouseout', normalBg);
startbtn.addEventListener('click', startGame);


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
}


// create timer
function setTime(duration) {
    var timer = duration, minutes, seconds;
    var timerInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeEl.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
// setTime(setMinutes);
