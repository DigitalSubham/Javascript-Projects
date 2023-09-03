const computerChoice = document.getElementById("computerChoice")
const userChoice = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userClick
let computerClick
var result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=> {
    userClick = e.target.id
    userChoice.innerHTML = userClick
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random()*3) +1
    if(randomNumber === 1){
        computerClick = "rock"
    }
    if(randomNumber === 2){
        computerClick = "paper"
    }
    if(randomNumber === 3){
        computerClick = "scissor"
    }
     
    computerChoice.innerHTML = computerClick
}

function getResult() {
  // let result;  // define result within the scope of the function
  if (computerChoice.innerHTML === userChoice.innerHTML) {
    result = 'its a draw!'
  }
  if (computerChoice.innerHTML === 'rock' && userChoice.innerHTML === "paper") {
    result = 'you win!'
  }
  if (computerChoice.innerHTML === 'rock' && userChoice.innerHTML === "scissor") {
    result = 'you lost!'
  }
  if (computerChoice.innerHTML === 'paper' && userChoice.innerHTML === "scissor") {
    result = 'you win!'
  }
  if (computerChoice.innerHTML === 'paper' && userChoice.innerHTML === "rock") {
    result = 'you lose!'
  }
  if (computerChoice.innerHTML === 'scissor' && userChoice.innerHTML === "rock") {
    result = 'you win!'
  }
  if (computerChoice.innerHTML === 'scissor' && userChoice.innerHTML === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
