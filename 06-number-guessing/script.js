const number = document.getElementById("guess")
const submit = document.getElementById("submit")
const restart = document.getElementById("restart")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
let attempts = 0;

let secret = Math.floor(Math.random() * 100) + 1;

console.log(secret)

submit.addEventListener("click", function(){
  const guess = Number(number.value);
  console.log(guess);


  if(!guess || guess < 1 || guess > 100){
  message.textContent = "Enter a number between 1 and 100";
  return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;

  if (guess > secret) {
    message.textContent = "Too High!!";
  }else if(guess < secret) {
    message.textContent = "Too Low!!";
  }else {
    message.textContent = `You Got It Correct in ${attempts} Congrats`;
  }
});

restart.addEventListener("click", function(){
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0
  message.textContent = "";
  number.value = "";
  attemptsText.textContent = "Attempts: 0";
  console.log(secret);
})