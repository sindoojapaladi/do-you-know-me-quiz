var readlineSync = require("readline-sync")
function Greeting() {
  var Player = readlineSync.question("Enter Your Name : ")
  console.log("Hi " + Player + "!")
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (answer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log("Yes Right!")
    score += 1

  }
  else {
    console.log("Wrong")
  }
  console.log("Your current score : ", score)

}

var questions = [{
  question: "When is her birthday?\nEnter in this format DD:MM ",
  answer: "23:07"
}, {
  question: "Does she is a morning or a night person ?",
  answer: "Morning person"
}, {
  question: "What is her favorite icecream flavour?",
  answer: "Butter scotch"
}, {
  question: "What is her mobile brand name?",
  answer: "Redmi"
}, {
  question: "Who is her best friend?",
  answer: "Shravani"
}]
Greeting()
var score = 0
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log("Your Final score : ", score)
