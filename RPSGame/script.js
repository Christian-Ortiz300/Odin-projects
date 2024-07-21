
const rockButton = document.querySelector('.button-container-rock');
const paperButton = document.querySelector('.button-container-paper');
const scissorsButton = document.querySelector('.button-container-scissors'); 

let playerScore = 0; 
let computerScore = 0; 

const result = document.querySelector('.results')


function getComputerChoice(){ 

    let randomNum = Math.floor(Math.random() * 3); 

    if(randomNum >= 0 && randomNum < 1/3){ 
        return 'rock'; 
    }
    else if(randomNum >= 1/3 && randomNum < 2/3){ 
        return 'paper';
    }
    else{ 
        return 'scissors'; 
    }
}
function game(playerChoice, computerChoice){ 
    //const object 
    const outcomes = { 
        rock: {rock: 'draw', paper: 'loss', scissors: 'win'}, 
        paper: {rock: 'won', paper: 'draw', scissors: 'loss'}, 
        scissors: {rock: 'loss', paper: 'won', scissors: 'draw'}
    }; 
    return outcomes[playerChoice][computerChoice]; 
}
function checkForWinner(playerScore, computerScore){ 
    if(playerScore >= 5){ 
        result.textContent = 'You\xa0 Won the Game! ${playerScore} : ${computerScore}';
        return true; 
    }else if( computerScore >= 5){ 
        result.textContent = 'You\xa0 Lose the Game! ${playerScore} : ${computerScore}'; 
    }

}