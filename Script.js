// Source code
// Follow the url to play it or modify as you wish 
//url: https://replit.com/@HarishKumar63/Friend-Quiz?embed=1?output=1

var readlineSync = require('readline-sync');

var score = 0;

function quiz(userAnswer, correctAnswer)
{
  if(userAnswer.toLowerCase() == correctAnswer.toLowerCase())
  {
    score++;
    console.log("Correct answer!!\nCurrent score: " + score + "\n")
  }
  else
  {
    score--;
    console.log("Wrong answer!!\nCurrent score: " + score + "\n")
  }
}

var userName = readlineSync.question("What's your name? ");
console.log("\n\nWelcome " + userName + " !!\n\nIt's the quiz time!!\n\n");

var questions = [{
  question: "Where do I live? ",
  answer: "Jaipur"
},{
  question: "what's my age? ",
  answer: "20"
},{
  question: "Did I play GTA yes/no? ",
  answer: "Yes"
},{
  question: "What's the version of my windows? ",
  answer: "11"
},{
  question: "Who is my idol? ",
  answer: "Hemant sir" 
}];

for(var i = 0; i < questions.length; i++)
{
  var currentQuestion = questions[i];
  quiz(readlineSync.question(currentQuestion.question), currentQuestion.answer)
}

