
// get the spot in html of where to place the list
var hsListEl = document.getElementById('hslist');
var clearBtn = document.getElementById('clearhs');

console.log('hsListEl', hsListEl);


var scores = [];


init();

function init() {
    // get the score list from storage
    var storedScores = JSON.parse(localStorage.getItem("scoresList"));
    console.log('Scores list ', storedScores);
    // If scores were found, update scores array with it. 
    if(storedScores !== null){
        scores = storedScores;
    }
    renderHighscores();
}


function renderHighscores() {
// set html to nothing
    hsListEl.innerHTML = "";

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
    }
})
