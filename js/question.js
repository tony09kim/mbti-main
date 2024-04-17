//data.js 가져오기 배열로 가져온다
import{questions} from './data.js'
//question.html 에 있는 각 태그 위치를 정의(변수로)
const progressValueEl = document.querySelector('.progress .value')
const numberEl =document.querySelector('.number')
const questionE1 = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')
//MBTI 타입을 저장하는 변수
let mbti = ""

//선택 버튼에 EventListner를 달아놓는다.
choice1El.addEventListener('click' , function(){
nextQuestion(0)
})
choice2El.addEventListener('click' , function(){
nextQuestion(1)
})

let currentNumber = 0;

function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML=question.number
  questionE1.innerHTML=question.question
  choice1El.innerHTML=question.choices[0].text
  choice2El.innerHTML=question.choices[1].text
}

function nextQuestion(choiceNumber){
  const question = questions[currentNumber]
  if(currentNumber === questions.length -1){
    showResultPage()
    return
  }
  //해당 mbti의 타입을 읽어와야 함
  mbti= mbti + question.choices[choiceNumber].value
  console.log("mbti ="+ mbti)
  currentNumber=currentNumber+1
  progressValueEl.style.width = (currentNumber+1)*10 + '%'
  renderQuestion()
}

function showResultPage(){
  location.href= "./result.html?mbti=" + mbti
}
renderQuestion()