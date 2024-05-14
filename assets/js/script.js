const quizContainer = document.getElementById("quiz-container");
const userScore = document.getElementById("user-score");
const startScrn = document.querySelector(".start-scrn");
const timeLeft = document.querySelector(".time-left");
const nextButton = document.getElementById("next-question-button");
const displayContainer = document.getElementById(".display-container");
const restart = document.getElementById(".restart");
const numOfQue = document.querySelector("number-of-question");
const startBtn = document.getElementById(".start-btn");
const scoreContainer = document.getElementById("score-container");
let questionCount;
let scoreCount=0;
let count = 17;
let countdown;


// 16 questions with answers and option array//
const quizArray = [
    {
        "id" : "0",
        "question": "What is the first book in the bible?",
        "options" : [
            "Exodus",
            "Genesis",
            "Matthew",
            "Revelation"
        ],
        "correct" : "Genesis"
    
    },
    {
        
        "id" : "1",
        "question": "How many days did God take to create the world?",
        "options" : [
            "Seven",
            "Five",
            "Ten",
            "Six"
        ],
        "correct" : "Six"
    },
    {
        
        "id" : "2",
        "question": "Where did Adam and Eve live at the beginning of the world?",
        "options" : [
            "Garden of Eden",
            "Jerusalem",
            "Heaven",
            "Babylon"
        ],
        "correct" : "Garden of Eden"
    },
    {
        
        "id" : "3",
        "question": "How many days did it rain when Noah was in the ark?",
        "options" : [
            "32 days",
            "40 days",
            "30 days",
            "10 days"
        ],
        "correct" : "40 days"
    },
    {
        
        "id" : "4",
        "question": "What did Jacob give Joseph that sparked jealousy from his siblings?",
        "options" : [
            "A special sword",
            "An arrow",
            "A coat of many colors",
            "An helmet"
        ],
        "correct" : "A coat of many colors"
    },
    {
        
        "id" : "5",
        "question": "Through what means did God speak to Moses in the desert?",
        "options" : [
            "A burning bush",
            "A woman",
            "A river",
            "A child"
        ],
        "correct" : "A burning bush"
    },
    {
        
        "id" : "6",
        "question": "What did Moses say God commanded Pharaoh to do?",
        "options" : [
            "Let his people go",
            "Feed the Israelites",
            "Pray with the Israelites",
            "Kill the people"
        ],
        "correct" : "Let my people go"
    },
    {
        
        "id" : "7",
        "question": "What is the name of the city where Jesus was born?",
        "options" : [
            "Jerusalem",
            "Bethlehem",
            "Cannan",
            "Egypt"
        ],
        "correct" : "Bethlehem"
    },
    {
        
        "id" : "8",
        "question": "Who baptised Jesus?",
        "options" : [
            "God",
            "Simon Peter",
            "Andrew",
            "John the Baptist"
        ],
        "correct" : "John the Baptist"
    },
    {
        
        "id" : "9",
        "question": "How much bread and fish did Jesus use to feed more than 5,000 people?",
        "options" : [
            "5000 loaves of bread and 1000 fish",
            "Two loaves of bread and 10 fish",
            "Five loaves of bread and two fish",
            "Ten loaves of bread and 10 fish"
        ],
        "correct" : "Five loaves of bread and two fish"
    },
    {
        
        "id" : "10",
        "question": "What did Jesus do at the Last Supper to his disciples?",
        "options" : [
            "Washed their feet",
            "Gave them money",
            "Prayed for them",
            "Gist with them"
        ],
        "correct" : "Washed their feet"
    },
    {
        
        "id" : "11",
        "question": " What happened after Jesus was buried in the tomb?",
        "options" : [
            "He passed away",
            "He rose again",
            "He ran away",
            "He decayed"
        ],
        "correct" : "He rose again"
    },
    {
        
        "id" : "12",
        "question": "How did Jesus leave Earth and go to Heaven?",
        "options" : [
            "He went in an aeroplane",
            "He rose into the clouds",
            "He disappeared",
            "He sailed"
        ],
        "correct" : "He rose into the clouds"
    },
    {
        
        "id" : "13",
        "question": "What day of the week did Jesus rise back to life?",
        "options" : [
            "Thursday",
            "Wednesday",
            "Monday",
            "Sunday"
        ],
        "correct" : "Sunday"
    },
    {
        
        "id" : "14",
        "question": "What is the 1st commandment?",
        "options" : [
            "You shall not steal",
            "You shall not lie",
            "Yous shall have no other gods before me",
            "You shall not kill"
        ],
        "correct" : "You shall have no other gods before me"
    },
    {
        
        "id" : "15",
        "question": "What is the last book in the bible?",
        "options" : [
            "Revelation",
            "Act",
            "Malachi",
            "Matthew"
        ],
        "correct" : "Revelation"
    },
    {
        
        "id" : "16",
        "question": "How did the 12 brothers get rid of Joseph?",
        "options" : [
            "Threw him in the Lion's den",
            "Sold him to slave traders",
            "Killed him",
            "Left him in the wild"
        ],
        "correct" : "Sold him to slave traders"
    }
    ]


    restart.addEventListener ("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");

})