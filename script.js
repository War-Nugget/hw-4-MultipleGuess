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
    let count = 0;
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

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80);
              (scorePerCent >= 60);
              (scorePerCent >= 40);
              (scorePerCent >= 20);
    
  
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}























