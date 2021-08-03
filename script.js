/* eslint-disable indent */
const quizData = [
    {
        question: "Which is the smallest ocean in the world?",
        a: "Indian",
        b: "Pacific",
        c: "Atlantic",
        d: "Arctic",
        correct: "d"

    },
    {
        question: "Which country gifted statue of Liberty to USA in 1886?",
        a: "France",
        b: "Japan",
        c: "Italy",
        d: "Brazil",
        correct: "a"

    },

    {
    question: "Dead sea is located between which two countries?",
    a: "Jordan and Sudan",
    b: "Jordan and Israel",
    c: "Turkey and UAE",
    d: "UAE and Egypt",
    correct: "b"
    },

    {
        question: "Which country is known as playground of Europe?",
        a: "Austria",
        b: "Holland",
        c: "Switzerland", 
        d: "Italy",
        correct: "c"
    }


];

const questionElem=document.querySelector("#question"),
      a_text=document.querySelector("#a_text"),
      b_text=document.querySelector("#b_text"),
      c_text=document.querySelector("#c_text"),
      d_text=document.querySelector("#d_text");




      
let currentQuiz=0;
loadQuiz();

function loadQuiz(){
    const currentQuizData=quizData[currentQuiz];
    questionElem.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

    currentQuiz++;
}