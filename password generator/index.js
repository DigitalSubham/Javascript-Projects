const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = '0123456789'
const symbol = "!@#$%^&*()+_-=?"
let arr = [];

// selectors
const passBox  = document.getElementById('pass-box');
const totalChar = document.getElementById('total-char');
const upperset = document.getElementById('upper-case')
const lowerset = document.getElementById('lower-case')
const numset = document.getElementById('numbers')
const symbolset = document.getElementById('symbols')

const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword = (password = "") =>{
    if(upperset.checked){
        password += getRandomData(upperCase)
    }
    if(lowerset.checked){
        password += getRandomData(lowerCase)
    }
     if(numset.checked){
        password += getRandomData(number)
    }
     if(symbolset.checked){
        password += getRandomData(symbol)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password,totalChar.value);
    arr.push(passBox);
}

 

document.getElementById('btn').addEventListener("click", function(){
    generatePassword()
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
 
 