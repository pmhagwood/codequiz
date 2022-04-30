
// get the spot in html of where to place the list
var hsListEl = document.getElementById('hslist');
var clearBtn = document.getElementById('clearhs');


// array to store scores
var scores = [];
console.log("the scores from js2 are ", scores)
// initialize the scores array
init();
// function to initialize the scores array
function init() {
    // get the score list from storage
    var storedScores = JSON.parse(window.localStorage.getItem("scoresList"));
    console.log('Scores list ', storedScores);
    // If scores were found, update scores array with it. 
    if(storedScores !== null){
        
        scores = scores.concat(storedScores);
    }
    renderHighscores();
}

// render out the high scores
function renderHighscores() {
// set html to nothing
    hsListEl.innerHTML = "";
    console.log("scores array is : ", scores)
    // render the content into paragraphs
    for(var i = 0; i < scores.length; i++) {
        var score = scores[i];
        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        hsListEl.appendChild(li);

    }
}

clearBtn.addEventListener('click', function(event){
    var element = event.target;

    if(element.matches("button") === true){
        localStorage.clear();
        location.reload();
    }
})
