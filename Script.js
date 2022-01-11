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

quiz(readlineSync.question("Where do I live? "), "Jaipur");
quiz(readlineSync.question("what's my age? "), "20");
quiz(readlineSync.question("Did I play GTA yes/no? "), "Yes");
quiz(readlineSync.question("What's the version of my windows? "), "11");
quiz(readlineSync.question("Who is my idol? "), "Hemant sir");

