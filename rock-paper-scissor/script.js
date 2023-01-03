let playerScore=0;
let computerScore=0;

function getPlayerChoice()
{
    let player = prompt("Please enter your choice (rock, paper or scissor): ");
    let playerChoice=player.toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

function getComputerChoice()
{
    const game=['rock','paper','scissor'];
    let randomPlay=Math.floor(Math.random()*game.length);
    let gameChoice= game[randomPlay];
    console.log(gameChoice)
    return gameChoice;
}

function playRound(playerSelection,computerSelection) {

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
function game(){
    for (let i = 1; i <=5; i++) {
        console.log("Round - "+i);     
        let computerResult=getComputerChoice();
        let playerResult=getPlayerChoice();    
        playRound(playerResult,computerResult);
        console.log("Computer score : "+computerScore+"\nPlayer score : "+playerScore)    
        if(computerScore>playerScore)
        {
            console.log("Computer won the game!!!!")
        }
        else if(playerScore>computerScore)
        {
            console.log("Player won the game!!!!")
        }
        else
        {
            console.log("Game draws!!!")
        }   
     }
}
   
game()