const questions =[
    {
        question: "what is apple colour ?",
        answer:[
            { text: "shark", correct: false },
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "blue whale", correct: true }
        ]
    },
    {
        question: " what is apple colour ?",
        answer:[
            { text: "yellow", correct: false },
            { text: "red", correct: true },
            { text: "green", correct: false },
            { text: "white", correct: false }
        ]
    },
    {
        question: "which is largest animal in the world ?",
        answer:[
            { text: "shark", correct: false },
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "blue whale", correct: true }
        ]
    },
    {
        question: "which is largest animal in the world ?",
        answer:[
            { text: "shark", correct: false },
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "blue whale", correct: true }
        ]
    },
    {
        question: "which is largest animal in the world ?",
        answer:[
            { text: "shark", correct: false },
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "blue whale", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion()
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;


    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })

   

   
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


function showScore(){
    resetState();
    questionElement.innerText = `Your scored ${score} out of ${questions.length}!`;
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})





startQuiz();