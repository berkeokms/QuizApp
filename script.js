const quizData = [
  {

question:"Türkiyenin Başkenti Neresidir ?",
a:"Ankara",
b:"İstanbul",
c:"Rize",
d:"Konya",
correct:"a"
}, {

    question:'Karabük Hangi Bölgededir ?',
    a:'Karadeniz',
    b:'Marmara',
    c:'Ege',
    d:'İç Anadolu',
    correct:'a'
    },{

        question:'5 + 2 kaçtır ?',
        a:'5',
        b:'6',
        c:'7',
        d:'8',
        correct:'c'
        },{

            question:'8*10 kaçtır',
            a:'78',
            b:'79',
            c:'80',
            d:'81',
            correct:"c"
            }
] 
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 

let score=0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();

const currentQuizData=quizData[currentQuiz];

questionE1.innerText=currentQuizData.
question;

a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;


}

function getSelected(){

  
    let answer=undefined;
    answerEls.forEach(answerE1 =>{
        if(answerE1.checked){
     answer=answerE1.id;
        }
    });

  return answer;
}
function deselectAnswers(){
answerEls.forEach((answerEl) =>{ 
    answerEl.checked = false;
});

}
submitBtn.addEventListener('click',()=>{
  
   const answer = getSelected();
   if(answer){
       if(answer===quizData[currentQuiz].
        correct){
            score++;
        }
   }
   currentQuiz++;
   
    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
  quiz.innerHTML = `<h2>  ${score}/${quizData.
    length} cevaplıyabildin helal lan </h2><button onclick="location.reload()">Tekrar</
    button>`;
    }
})