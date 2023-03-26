let restartButton = document.querySelector("#restart");
let homeButton = document.querySelector("#home")

let getScore = window.localStorage.getItem('Score');
document.getElementById('finalScore').textContent = `Your Score was ${getScore}/10`;


restartButton.addEventListener('click', function() {
    localStorage.clear('Score');
    location.href = "the-witcher-quiz.html"
})

homeButton.addEventListener('click', function() {
    location.href = "index.html"
})