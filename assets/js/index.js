let startButton = document.querySelector("#start");

let getPreviousScore = window.localStorage.getItem('Score');
document.getElementById('previousScore').textContent = `Your previous score was ${getPreviousScore}/10`;

startButton.addEventListener('click', function() {
    localStorage.removeItem('Score');
})