const questions = [
    {
        question: "Who is known as the Father of Economics?",
        answers: ["Adam Smith", "Bill Gates", "Elon Musk", "Henry Ford"],
        correct: 0
    },
    {
        question: "Which company owns Google?",
        answers: ["Microsoft", "Apple", "Alphabet", "Amazon"],
        correct: 2
    },
    {
        question: "What does CEO stand for?",
        answers: [
            "Chief Executive Officer",
            "Central Economic Office",
            "Company Expert Officer",
            "Chief Education Officer"
        ],
        correct: 0
    },
    {
        question: "Which is the largest e-commerce company?",
        answers: ["Amazon", "Tesla", "Nike", "Samsung"],
        correct: 0
    },
    {
        question: "Who founded Microsoft?",
        answers: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"],
        correct: 1
    },
    {
        question: "What is GDP?",
        answers: [
            "Gross Domestic Product",
            "Global Development Plan",
            "General Data Process",
            "Growth Data Price"
        ],
        correct: 0
    },
    {
        question: "Which company makes iPhone?",
        answers: ["Google", "Apple", "Sony", "Dell"],
        correct: 1
    },
    {
        question: "Who founded Tesla?",
        answers: ["Elon Musk", "Bill Gates", "Larry Page", "Jack Ma"],
        correct: 0
    },
    {
        question: "Full form of MBA?",
        answers: [
            "Master of Business Administration",
            "Modern Business Account",
            "Management Basic Award",
            "Market Business Analysis"
        ],
        correct: 0
    },
    {
        question: "Which country has the largest economy?",
        answers: ["India", "USA", "Japan", "Germany"],
        correct: 1
    }
];


let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const answerBox = document.getElementById("answers");
const nextBtn = document.getElementById("next");

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){

    let q = questions[currentQuestion];

    questionBox.innerHTML = 
    `${currentQuestion + 1}. ${q.question}`;

    answerBox.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        let button = document.createElement("button");

        button.innerHTML = answer;

        button.onclick = function(){

            if(index === q.correct){
                score++;
                button.style.background="green";
            }
            else{
                button.style.background="red";
            }

            Array.from(answerBox.children).forEach(btn=>{
                btn.disabled=true;
            });
        };

        answerBox.appendChild(button);

    });
}


nextBtn.onclick=function(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{
        questionBox.innerHTML =
        `Quiz Completed 🎉<br>Your Score: ${score}/${questions.length}`;

        answerBox.innerHTML="";
        nextBtn.style.display="none";
    }

};


startQuiz();
