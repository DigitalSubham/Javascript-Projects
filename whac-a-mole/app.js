const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

const button = document.querySelector('#btn')

let result  = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSqaure = squares[Math.floor(Math.random()*9)]
    randomSqaure.classList.add('mole')

    hitPosition = randomSqaure.id
}

squares.forEach(square => {
    square.addEventListener('click', () =>{
        if(square.id === hitPosition){
            result++
            console.log(result);
            score.textContent = result
            hitPosition = null

        }
    })
})


function moveMole()
{
    timerId = setInterval(randomSquare,500)
}

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over Your Final Score is ' + result)
    }
}

let countDownTimerId =  setInterval(countDown,1000)
moveMole()

// button.addEventListener('click',moveMole)
 