const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const choices = document.getElementById("choices");
const result = document.getElementById("result");

const score = document.getElementById("score");
const reset = document.getElementById("reset");

const totalchoice = ["rock", "paper", "scissors"];

let wins = 0;
let losses = 0;
let draws = 0;

rock.addEventListener("click", function(){
  playRound("rock");
})

paper.addEventListener("click", function(){
  playRound("paper");
})

scissors.addEventListener("click", function(){
  playRound("scissors");
})
function playRound(playerChoice){
  console.log(playerChoice);
  const computerChoice = totalchoice[Math.floor(Math.random() * totalchoice.length)];
  console.log(playerChoice, computerChoice);

  choices.textContent = `You: ${playerChoice} | Computer: ${computerChoice}`;
  if(playerChoice == computerChoice){
    draws++;
    result.textContent = "It's a Draw !!";
  }else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ){
    wins++;
    result.textContent = "It's a Win";
  }else{
    losses++;
    result.textContent = "It's a Lose"
  }
  score.textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}
reset.addEventListener("click", function(){
  wins = 0;
  losses = 0;
  draws = 0;

  score.textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
  choices.textContent = "";
  result.textContent = "";
})
