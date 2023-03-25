let restartButton = document.querySelector("#restart");


let getScore = window.localStorage.getItem('Score');
document.getElementById('finalScore').textContent = getScore;


restartButton.addEventListener('click', function() {
    localStorage.clear();
})