 var readlineSync = require('readline-sync');
 var score=0;
var userName = readlineSync.question('What is your name? ')
console.log("welcome "+ userName +" to the marvel quiz, all answers are in lower case")

var questions=[{
  question: "How many Infinity Stones are there? ",
  answer: "6"
  },{
  question: "Who is Tony Stark’s father? ",
  answer: "howard stark"
  },{
  question: "When was IronMan released? ",
  answer: "2008"
  },{
  question: "Captain America’s shield is made of ",
  answer: "vibranium"
  },{
  question: "Who was able to pick up Thor’s hammer in Endgame? ",
  answer: "captain america"
  }];



function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log('Right');
    score+=2
  }
  else{
    console.log('Wrong');
    score--;
  }
  console.log("-----------------------")
}





function game(){
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}




var start = readlineSync.question('Are you ready? ')
if(start==="yes")
{
  game();
}
else{
  console.log("see you soon")
}



  

console.log("Your total score is "+score)