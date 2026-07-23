

    let humanScore = 0;
    let computerScore = 0;
    
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*100)+1;


    if(randomNumber <= 33){
        return 'rock';
    }else if(randomNumber<= 66){
         return 'paper';
    }else{
        return 'scissor';
    }

}

function getHumanChoice(){
   let humanChoice = prompt("Rock-Paper-Scissors?" );

   

   return humanChoice.toLowerCase();
  
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Draw Round");
    }else if(humanChoice === 'rock' && computerChoice ==='paper'){
       computerScore+=1;
       alert("Paper Beats Rock. You lose");
    }else if(humanChoice === 'rock' && computerChoice ==='scissor'){
       humanScore+=1;
      alert("Rock Beats Scissor. You Win");
    }else if(humanChoice === 'paper' && computerChoice ==='rock'){
       humanScore+=1;
       alert("Paper Beats Rock. You Win");
    }
    else if(humanChoice === 'paper' && computerChoice ==='scissor'){
      computerScore+=1;
       alert("Scissor Beats Paper. You Lose");
    }
    else if(humanChoice === 'scissor' && computerChoice ==='rock'){
      computerScore+=1;
       alert("Rock Beats Scissor. You Lose");
    }
    else if(humanChoice === 'scissor' && computerChoice ==='paper'){
      humanScore+=1;
       alert("Scissor Beats Paper. You Win");
    }

}

function playGame(){

    for(let i=1;i<=5;i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection)
        
        console.log(humanSelection)
        console.log(computerSelection)
       
        console.log(humanScore)
        console.log(computerScore)
    }

    if(humanScore<computerScore){
        alert("Computer Score:" + computerScore + " Your Score:" + humanScore +" You Lose!")
    }else if(humanScore>computerScore){
         alert("Your Score:" + humanScore + " Computer Score:" + computerScore +" You Win!")
    }else{
        alert("Tie Game");
    }
}


playGame()

