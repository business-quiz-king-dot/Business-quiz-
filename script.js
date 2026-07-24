const questions = [
    {
        question: "GST નું Full Form શું છે?",
        options: [
            "Goods Service Tax",
            "Goods and Services Tax",
            "General Sales Tax",
            "Global Service Tax"
        ],
        answer: 1
    },

    {
        question: "Tata Group ના સ્થાપક કોણ હતા?",
        options: [
            "Ratan Tata",
            "Jamshedji Tata",
            "Mukesh Ambani",
            "Dhirubhai Ambani"
        ],
        answer: 1
    },

    {
        question: "Marketing ના 4P માં કયું નથી?",
        options: [
            "Product",
            "Price",
            "People",
            "Promotion"
        ],
        answer: 2
    },

    {
        question: "CA નું Full Form શું છે?",
        options: [
            "Company Analyst",
            "Chartered Accountant",
            "Cash Accountant",
            "Certified Agent"
        ],
        answer: 1
    }
];


let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 8;


function startQuiz(){

    document.getElementById("home").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");

    showQuestion();
}


function showQuestion(){

    clearInterval(timer);

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let options = document.getElementById("options");
    options.innerHTML = "";

    q.options.forEach((option,index)=>{

        let btn = document.createElement("div");

        btn.className = "option";
        btn.innerHTML = option;

        btn.onclick = function(){

            if(index === q.answer){
                score++;
            }

            nextQuestion();
        };

        options.appendChild(btn);

    });


    timeLeft = 8;
    document.getElementById("timer").innerHTML = timeLeft;


    timer = setInterval(()=>{

        timeLeft--;

        document.getElementById("timer").innerHTML = timeLeft;


        if(timeLeft <= 0){
            nextQuestion();
        }

    },1000);

}



function nextQuestion(){

    clearInterval(timer);

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }
    else{

        showResult();

    }

}



function showResult(){

    document.getElementById("quiz").classList.add("hide");

    document.getElementById("result").classList.remove("hide");

    document.getElementById("score").innerHTML =
    "Your Score: " + score + "/" + questions.length;

}
