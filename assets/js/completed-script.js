let restartButton = document.querySelector("#restart");


let getScore = window.localStorage.getItem('Score');
document.getElementById('finalScore').textContent = `Your Score was ${getScore}/10`;


restartButton.addEventListener('click', function() {
    localStorage.clear('Score');
})