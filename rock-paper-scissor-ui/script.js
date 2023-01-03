let playerScore=0;
let computerScore=0;
let round=0;

document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;
document.getElementById("round").textContent = round;


function getComputerChoice()
{
    const game=['rock','paper','scissor'];
    let randomPlay=Math.floor(Math.random()*game.length);
    let gameChoice= game[randomPlay];
    console.log(gameChoice)
    return gameChoice;
}

function playRound(playerSelection,computerSelection) {

    round++
    if(computerSelection=="rock" && playerSelection=="scissor")
    {
        computerScore++
        console.log("computer wins.... Rock beats over scissor")
    }
    else if(computerSelection=="scissor" && playerSelection=="rock")
    {
        playerScore++
        console.log("Player wins....Rock beats over scissor")
    }
    else if(computerSelection=="paper" && playerSelection=="scissor")
    {
        playerScore++
        console.log("Player wins.... scissor beats over paper")
    }
    else if(computerSelection=="scissor" && playerSelection=="paper")
    {
        computerScore++
        console.log("Computer wins.... scissor beats over paper")
    }
    else if(computerSelection=="rock" && playerSelection=="paper")
    {
        playerScore++
        console.log("Player wins.... rock beats over paper")
    }
    else if(computerSelection=="paper" && playerSelection=="rock")
    {
        computerScore++
        console.log("Computer wins.... rock beats over paper")
    }
    else if(computerSelection == playerSelection)
    {
        console.log("Turn ties")
    }
    else
    {
        console.log("Invalid input, Please enter valid input")
    }
}

function game(playerChoice){
    
    if(playerScore < 5 && computerScore < 5) {
        let computerResult=getComputerChoice();
        let playerResult=playerChoice;    
        playRound(playerResult,computerResult);
        console.log("Computer score : "+computerScore+"\nPlayer score : "+playerScore)    
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
            if(computerScore==5)
            {
                document.getElementById('game-result').textContent = 'Computer Won the game!!!';
                document.getElementById('game-result').setAttribute('style','background-color:red;');
            }     
            else if(playerScore==5)
            {
                document.getElementById('game-result').textContent = 'Congrats!!! You won the game.';
                document.getElementById('game-result').setAttribute('style','background-color: green;');
            }
    }
}


   
var rockButton = document.querySelector('#rock');
var paperButton = document.querySelector('#paper');
var scissorButton = document.querySelector('#scissor');

rockButton.addEventListener('click', ()=>  {
    game('rock');
});

paperButton.addEventListener('click', ()=>  {
    game('paper');
});

scissorButton.addEventListener('click', ()=>  {
    game('scissor');
});




