// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question: "How do can you convert a string to an int?",
        choiceA : "Declare it into an int",
        choiceB : "Parse it",
        choiceC : "Add a number to the string",
        choiceD : "Write int.(string name)",
        correct : "B"
    },
    {
        question: "What does CSS stand for?",
        choiceA : "Colorful style sheets",
        choiceB : "Cesear Stlying sheet",
        choiceC : "Cascading stlye sheet",
        choiceD : "None of the above",
        correct : "C",
    },
    {
        question: "What is the first line to a HTML document?",
        choiceA : "Heading tag",
        choiceB : "Title tag",
        choiceC : "Doctype tag",
        choiceD : "Charset tag",
        correct : "C",
    },
    {
        question: "Where are script tags usually placed?",
        choiceA : "Top of the page",
        choiceB : "Bottom of the page",
        choiceC : "Under where code is needed",
        choiceD : "Depends on when you want it to load",
        correct : "D",
    },
    {
        question: "If Ron has 8 apples and gives Gilbert 3, how many jupiters can fit in the sun?",
        choiceA : "5 apples",
        choiceB : "1,000 Jupiters",
        choiceC : "3 apples",
        choiceD : "1.3 million Jupiters",
        correct : "B",
    },
]
    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    const questionTime = 10; // 10s
    const gaugeWidth = 150; // 150px
    const gaugeUnit = gaugeWidth / questionTime;
    let TIMER;
    let score = 0;


 function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    //qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

