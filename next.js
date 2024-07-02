const data = [
  {
    id: 1,
    question: "What does the 'I' in Iphone stand for?",
    answers: [
      { answer: "Interactive", isCorrect: true },
      { answer: "Intelligent", isCorrect: false },
      { answer: "Irreplaceable", isCorrect: false },
      { answer: "Integral", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is the capital of canada?",
    answers: [
      { answer: "Montreal", isCorrect: false },
      { answer: "Ontario", isCorrect: true },
      { answer: "Vancouver", isCorrect: false },
      { answer: "Toronto", isCorrect: false },
    ],
  },
];

const quizScreen = document.querySelector(".quiz");
const questionsScreen = document.querySelector(".questions");
const answersScreen = document.querySelector(".answers");
const submitButton = document.querySelector(".submit");
const resultScreen = document.querySelector(".result");
const playAgain = document.querySelector(".play");
const chatButton = document.querySelector(".chat");
const quizButton = document.querySelector(".quiz-b");

let questionIndex = 0;
let selectedAnswer;
let correctCount = 0;
let wrongCount = 0;

const showQuestion = (qNumber) => {
  if (questionIndex === data.length) return showResult();
  questionsScreen.textContent = data[qNumber].question;
  answersScreen.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `<div class=answers>
        <input type="radio" id=${index} value=${item.isCorrect} name="quiz">
        <label for=${index}>${item.answer}</label>
        </div>`
    )
    .join("");
  selectAnswerInput();
};

const selectAnswerInput = () => {
  answersScreen.querySelectorAll("input").forEach((item) =>
    item.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    })
  );
};

const submitAnswer = () => {
  submitButton.addEventListener("click", () => {
    if (selectedAnswer !== undefined) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else {
      alert("please select an answer");
    }
  });
};

const showResult = () => {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  resultScreen.querySelector(
    ".correct"
  ).textContent = `correct answer : ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `wrong answers : ${wrongCount}`;
};

const reset = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  showQuestion(questionIndex);
};

const playAgainButton = () => {
  playAgain.addEventListener("click", () => {
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";
    reset();
  });
};

const chatButtonClick = () => {
  chatButton.addEventListener("click", () => {
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";
  });
};

const quizButtonClick = () => {
  quizButton.addEventListener("click", () => {
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";
    reset();
  });
};

showQuestion(questionIndex);
submitAnswer();
chatButtonClick();
quizButtonClick();
playAgainButton();
