// Define quiz questions and answers
const quiz = [
    {
        question: "What house at Hogwarts School does Harry belong to?",
        options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        answer: "Gryffindor"
    },
    {
        question: "Who is the headmaster of Hogwarts during Harry's time there?",
        options: ["Professor Snape", "Professor McGonagall", "Professor Dumbledore", "Professor Flitwick"],
        answer: "Professor Dumbledore"
    },
    {
        question: "What magical artifact does Harry seek to destroy in 'Harry Potter and the Deathly Hallows'?",
        options: ["The Elder Wand", "The Resurrection Stone", "The Philosopher's Stone", "The Horcruxes"],
        answer: "The Horcruxes"
    }
];

let currentQuestion = 0;
let score = 0;

// Function to initialize quiz
function initializeQuiz() {
    showQuestion();
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
}

// Function to display current question and options
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuiz = quiz[currentQuestion];

    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";

    currentQuiz.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", function() {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionButton);
    });
}

// Function to check user's answer
function checkAnswer(userAnswer) {
    const correctAnswer = quiz[currentQuestion].answer;
    const responseElement = document.getElementById("response");

    if (userAnswer === correctAnswer) {
        responseElement.textContent = "Correct!";
        score++;
    } else {
        responseElement.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }

    disableOptions();
    document.getElementById("nextButton").disabled = false;
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        resetQuiz();
        showQuestion();
    } else {
        endQuiz();
    }
}

// Function to disable option buttons after user answers
function disableOptions() {
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => {
        button.disabled = true;
    });
}

// Function to reset quiz state for next question
function resetQuiz() {
    document.getElementById("response").textContent = "";
    document.getElementById("nextButton").disabled = true;
}

// Function to end quiz and show final score
function endQuiz() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("response").textContent = "You scored " + score + " out of " + quiz.length + "!";
    document.getElementById("nextButton").style.display = "none";
}

// Initialize quiz when the page loads
document.addEventListener("DOMContentLoaded", initializeQuiz);
