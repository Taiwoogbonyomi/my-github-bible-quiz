const quizContainer = document.getElementById("quiz-container");
const userScore = document.getElementById("user-score");
const startScrn = document.querySelector(".start-scrn");
const timeLeft = document.querySelector(".time-left");
const nextQuestionButton = document.getElementById("next-question-button");
const displayContainer = document.getElementById("display-container");
const restart = document.getElementById("restart");
const numOfQue = document.querySelector(".number-of-question");
const startBtn = document.getElementById("start-btn");
const scoreContainer = document.getElementById("score-container");
let questionCount;
let scoreCount = 0;
let count = 16;
let countdown;

// 16 questions with answers and option array//
const quizArray = [
    {
        "id": "0",
        "question": "What is the first book in the bible?",
        "options": [
            "Exodus",
            "Genesis",
            "Matthew",
            "Revelation"
        ],
        "correct": "Genesis"

    },
    {
        "id": "1",
        "question": "How many days did God take to create the world?",
        "options": [
            "Seven",
            "Five",
            "Ten",
            "Six"
        ],
        "correct": "Six"
    },
    {
        "id": "2",
        "question": "Where did Adam and Eve live at the beginning of the world?",
        "options": [
            "Garden of Eden",
            "Jerusalem",
            "Heaven",
            "Babylon"
        ],
        "correct": "Garden of Eden"
    },
    {
        "id": "3",
        "question": "How many days did it rain when Noah was in the ark?",
        "options": [
            "32 days",
            "40 days",
            "30 days",
            "10 days"
        ],
        "correct": "40 days"
    },
    {
        "id": "4",
        "question": "What did Jacob give Joseph that sparked jealousy from his siblings?",
        "options": [
            "A special sword",
            "An arrow",
            "A coat of many colors",
            "An helmet"
        ],
        "correct": "A coat of many colors"
    },
    {
        "id": "5",
        "question": "Through what means did God speak to Moses in the desert?",
        "options": [
            "A burning bush",
            "A woman",
            "A river",
            "A child"
        ],
        "correct": "A burning bush"
    },
    {
        "id": "6",
        "question": "What did Moses say God commanded Pharaoh to do?",
        "options": [
            "Let his people go",
            "Feed the Israelites",
            "Pray with the Israelites",
            "Kill the people"
        ],
        "correct": "Let my people go"
    },
    {
        "id": "7",
        "question": "What is the name of the city where Jesus was born?",
        "options": [
            "Jerusalem",
            "Bethlehem",
            "Cannan",
            "Egypt"
        ],
        "correct": "Bethlehem"
    },
    {
        "id": "8",
        "question": "Who baptised Jesus?",
        "options": [
            "God",
            "Simon Peter",
            "Andrew",
            "John the Baptist"
        ],
        "correct": "John the Baptist"
    },
    {
        "id": "9",
        "question": "How much bread and fish did Jesus use to feed more than 5,000 people?",
        "options": [
            "5000 loaves of bread and 1000 fish",
            "Two loaves of bread and 10 fish",
            "Five loaves of bread and two fish",
            "Ten loaves of bread and 10 fish"
        ],
        "correct": "Five loaves of bread and two fish"
    },
    {
        "id": "10",
        "question": "What did Jesus do at the Last Supper to his disciples?",
        "options": [
            "Washed their feet",
            "Gave them money",
            "Prayed for them",
            "Gist with them"
        ],
        "correct": "Washed their feet"
    },
    {
        "id": "11",
        "question": " What happened after Jesus was buried in the tomb?",
        "options": [
            "He passed away",
            "He rose again",
            "He ran away",
            "He decayed"
        ],
        "correct": "He rose again"
    },
    {
        "id": "12",
        "question": "How did Jesus leave Earth and go to Heaven?",
        "options": [
            "He went in an aeroplane",
            "He rose into the clouds",
            "He disappeared",
            "He sailed"
        ],
        "correct": "He rose into the clouds"
    },
    {
        "id": "13",
        "question": "What day of the week did Jesus rise back to life?",
        "options": [
            "Thursday",
            "Wednesday",
            "Monday",
            "Sunday"
        ],
        "correct": "Sunday"
    },
    {
        "id": "14",
        "question": "What is the 1st commandment?",
        "options": [
            "You shall not steal",
            "You shall not lie",
            "Yous shall have no other gods before me",
            "You shall not kill"
        ],
        "correct": "You shall have no other gods before me"
    },
    {
        "id": "15",
        "question": "What is the last book in the bible?",
        "options": [
            "Revelation",
            "Act",
            "Malachi",
            "Matthew"
        ],
        "correct": "Revelation"
    },
    {
        "id": "16",
        "question": "How did the 12 brothers get rid of Joseph?",
        "options": [
            "Threw him in the Lion's den",
            "Sold him to slave traders",
            "Killed him",
            "Left him in the wild"
        ],
        "correct": "Sold him to slave traders"
    }
];


/**
 * Restarts the game, hiding the score container and show the quiz container again
 */
restart.addEventListener("click", function () {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

/**
 * Displays the next question, increase the questionCount by 1 and if there are no more questions it will show your score.
 */
function displayNext() {
    questionCount += 1;

    if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is " +
            scoreCount + " out of " + quizArray.length;
    } else {
        numOfQue.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";

        quizDisplay(questionCount);
        count = 16;
        clearInterval(countdown);
        timerDisplay();
    }
}

nextQuestionButton.addEventListener("click", displayNext);


/**
 * Shows a timer that counts down from 15.
 */
function timerDisplay() {
    countdown = setInterval(function () {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count === 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
}


function quizDisplay(questionCount) {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach(function (card) {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
}

/**
 * Creates the quiz with random questions selected from the questionsArray
 */
function quizCreator() {
    quizArray.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i of quizArray) {
        i.options.sort(function () {
            return 0.5 - Math.random();
        });
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        numOfQue.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="assertAnswer(this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick="assertAnswer(this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick="assertAnswer(this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick="assertAnswer(this)">
        ${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}


/**
 * Checks the right answer and if correct add to scoreCount.
 */
function assertAnswer(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach(function (element) {
            if (element.innerText === quizArray[questionCount].correct) {
                element.classList.add("correct");
            } else {
                element.disabled = true; 
            }
        });
    }

    clearInterval(countdown);
    options.forEach(function (element) {
        element.disabled = true; 
    });
}

/**
 * Initial function to clear the quiz and start from zero.
 */
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 16;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

/**
 * Button that starts the quiz and shows the "quizContainer".
 */
startBtn.addEventListener("click", function () {
    startScrn.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

/**
 * when the window is loaded, the start screen shows with the start button.
 */
window.onload = function () {
    startScrn.classList.remove("hide");
    displayContainer.classList.add("hide");
};
