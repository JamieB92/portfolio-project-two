let startButton = document.querySelector("#start");


/** Gets users previous score and places in html   */
let getPreviousScore = window.localStorage.getItem('Score');
document.getElementById('previousScore').textContent = `Your previous score was ${getPreviousScore}/10`;

/** start button function that clears previous score and starts the quiz  */

startButton.addEventListener('click', function() {
    localStorage.removeItem('Score');
    location.href = "the-witcher-quiz.html"
})

