let restartButton = document.querySelector("#restart");
let homeButton = document.querySelector("#home")

/** Gets the score from local storage and places in html */

let getScore = window.localStorage.getItem('Score');
document.getElementById('finalScore').textContent = `Your Score was ${getScore}/10`;


/** Restart button function that clears the score in local storage and restarts the quiz  */

restartButton.addEventListener('click', function() {
    localStorage.clear('Score');
    location.href = "the-witcher-quiz.html"
})

/** Home button function that takes you to home page */
homeButton.addEventListener('click', function() {
    location.href = "index.html"
})