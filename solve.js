const questions = [
    {
        question: "which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}, 
        ]

        },
        
            {
                question: "Which planet is known as the Red Planet?",
                answers: [
                    {text: "Earth", correct: false},
                    {text: "Mars", correct: true},
                    {text: "Jupiter", correct: false},
                    {text: "Venus", correct: false},
                ]
            },
            {
                question: "What is the capital of France?",
                answers: [
                    {text: "Rome", correct: false},
                    {text: "Madrid", correct: false},
                    {text: "Paris", correct: true},
                    {text: "Berlin", correct: false},
                ]
            },
            {
                question: "Which is the largest ocean on Earth?",
                answers: [
                    {text: "Atlantic Ocean", correct: false},
                    {text: "Indian Ocean", correct: false},
                    {text: "Pacific Ocean", correct: true},
                    {text: "Arctic Ocean", correct: false},
                ]
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answers: [
                    {text: "William Shakespeare", correct: true},
                    {text: "Charles Dickens", correct: false},
                    {text: "Mark Twain", correct: false},
                    {text: "Jane Austen", correct: false},
                ]
            },
            {
                question: "Which gas do plants primarily use for photosynthesis?",
                answers: [
                    {text: "Oxygen", correct: false},
                    {text: "Carbon dioxide", correct: true},
                    {text: "Nitrogen", correct: false},
                    {text: "Hydrogen", correct: false},
                ]
            },
            {
                question: "What is the square root of 144?",
                answers: [
                    {text: "10", correct: false},
                    {text: "11", correct: false},
                    {text: "12", correct: true},
                    {text: "13", correct: false},
                ]
            },
        
            {
                question: "What is the hardest natural substance on Earth?",
                answers: [
                    {text: "Gold", correct: false},
                    {text: "Iron", correct: false},
                    {text: "Diamond", correct: true},
                    {text: "Platinum", correct: false},
                ]
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: [
                    {text: "Vincent van Gogh", correct: false},
                    {text: "Leonardo da Vinci", correct: true},
                    {text: "Pablo Picasso", correct: false},
                    {text: "Claude Monet", correct: false},
                ]
            },
            {
                question: "Which is the fastest land animal?",
                answers: [
                    {text: "Cheetah", correct: true},
                    {text: "Lion", correct: false},
                    {text: "Tiger", correct: false},
                    {text: "Horse", correct: false},
                ]
            }
        ]
        
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz() {
     currentQuestionIndex= 0;
     score=0;
     nextButton.innerHTML = "Next";
     showQuestion();
    }

    function showQuestion () {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct =answer.correct;
            }
            button.addEventListener("click",selectAnswer);
            
        });

    }
    function resetState() {
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    } 
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect =selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach (button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
}
button.disabled = true;
        });
        nextButton.style.display = "block";                                   
    } 

    function showScore() {
        resetState();
        questionElement.innerHTML=`You score ${score} out of ${questions.length}`;
        nextButton.innerHTML =  "Play Again";
        nextButton.style.display = "block";

    }
    function handleNextButton (){
        currentQuestionIndex++;
        if (currentQuestionIndex< questions.length){
            showQuestion();
        } else {
            showScore();

        }
    };

 nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton ();
}
 else {
    startQuiz();
 }
 });

 startQuiz();