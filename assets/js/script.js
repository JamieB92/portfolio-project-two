let question = document.getElementById('question');
let selector = Array.from(document.getElementsByClassName('selectText'));
let nextButton = document.querySelector("#next");
let score = document.getElementById("score");


let currentQuestion = {};
let availibleQuestions = [];
let acceptAnswer = true;
let questions = [
    {
        question: 'What animal is on Geralts medallion?',
        select1: 'A Dog',
        select2: 'A Crow',
        select3: 'A Wolf',
        select4: 'A Lion',
        answer: 3,
    },

    {
        question: 'Which character is Geralts love intrest?',
        select1: 'Renfri',
        select2: 'Triss',
        select3: 'Keira',
        select4: 'Yennifer',
        answer: 4,
    },
    
    {
        question: 'Who is the author of the Witcher?',
        select1: 'Frank Herbert',
        select2: 'Andrzej Sapkowski',
        select3: 'George R.R. Martin',
        select4: 'J.R.R. Tolkien',
        answer: 2,
    },
    {
        question: 'How many games are in the video game series?',
        select1: '3',
        select2: '4',
        select3: '6',
        select4: '2',
        answer: 1,
    },
    {
        question: 'What was the name of the magic teaching institution?',
        select1: 'Arendel',
        select2: 'Aretuza',
        select3: 'Aeriala',
        select4: 'Azamae',
        answer: 2,
    },
    {
        question: 'Which country invaded and destroyed the kingdom of Cintra?',
        select1: 'Nilfguard',
        select2: 'Rivia',
        select3: 'Blaviken',
        select4: 'Temeria',
        answer: 1,
    },
    {
        question: 'How many books are in the Witcher set?',
        select1: '10',
        select2: '5',
        select3: '8',
        select4: '7',
        answer: 3,
    },
    {
        question: 'Who was the Queen of Cintra?',
        select1: 'Queen Eithne',
        select2: 'Queen Triss Merigold',
        select3: 'Queen Yennefer',
        select4: 'Queen Calanthe',
        answer: 4,
    },
    {
        question: 'What is the name of the Witcher keep?',
        select1: 'Kaer Morhen',
        select2: 'Vizima',
        select3: 'Velen',
        select4: 'Lurthen',
        answer: 1,
    },
    {
        question: 'Which song did Jaskier write which made him famous?',
        select1: 'Oh mighty Witcher',
        select2: 'Witcher the dragon slayer',
        select3: 'Witcher is the butcher of Blaviken',
        select4: 'Toss a coin to your Witcher',
        answer: '4',
    }
];



function beginGame() {
    availibleQuestions = [...questions];
    getNewQuestion();
}


function getNewQuestion() {

    if(availibleQuestions.length === 0) {
            window.location.href = "completed.html";
    }
    
    const questionsIndex = i=0; i<questions.length; i++;
    currentQuestion = availibleQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    

    selector.forEach(select => {
        let number = select.dataset['number'];
        select.innerText = currentQuestion['select' + number];
    });

    availibleQuestions.splice(questionsIndex, 1);
    
    acceptAnswer = true;
}



    selector.forEach(select => {
    select.addEventListener('click', e => {
            let userAnswer = e.target;
            let answer = userAnswer.dataset['number']; 
            let isCorrect = answer == currentQuestion.answer;

        if (isCorrect) {  
        alert("Well done you have answered correctly");
        incrementScore();
         } else { 
        alert("You answered incorrectly");
    }
    
});

function incrementScore() {
    let addScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++addScore;

    
    let currentScore = parseInt(localStorage.getItem('Score') ?? '0');
    localStorage.setItem('Score', (currentScore + 1).toString());
}
});

nextButton.addEventListener("click", () => this.getNewQuestion(this.currentQuestionIndex++)) ;
    
beginGame();

