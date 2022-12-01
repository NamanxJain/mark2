const readlineSync = require('readline-sync');

var point = 0;

function welcome() {
    var name = readlineSync.question("What is you Name");

    console.log(`welcome ${name} Let's play a Game "Do you know about harry potter"`);
}


var questions = [
    {
        question: "What is the names of Harry’s mother  ",
        answer:"Lily Potter"
    },
    {
        question:" What house is Harry Potter sorted into  ",
        answer:"Gryffindor"
    },
    {
        question:"What animal can Harry speak to  ",
        answer:"Snake"
    },
]

function play(question,answer)
{
    var userAnswer=readlineSync.question(question)

    if(userAnswer.toLowerCase() === answer.toLowerCase())
    {

        console.log("right!");
        point=point+1;
    }
    else
    {
        console.log("wrong!");
    }
}

function game()
{
    for(var i=0;i<questions.length;i++)
    {
        play(questions[i].question,questions[i].answer)
    }

    console.log("your Final score is "+point);
    console.log("Correct answer are below =>");
    for(var i=0;i<questions.length;i++)
    {
        console.log(`${questions[i].question} :  ${questions[i].answer}`)
    }
    
}

welcome();
game();