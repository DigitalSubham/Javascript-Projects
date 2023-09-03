const quizdb = [
{Question : "1: The five elements of blockchain are distribution, encryption, immutability, tokenization and?",
a:"Transparency",
b:"Authorization",
c:'Efficiency',
d:"Decentralization",
ans:"opt4"},

{Question : "2: What can an IT leader use enterprise blockchain for?",
a:"Streamline supply chains",
b:"Improve financial transactions",
c:"Provide identity management",
d:"All of the above",
ans:"opt4"},

{Question: "3: What are some of the advantages of implementing enterprise blockchain?",
a:"Reduce IT costs",
b:"Expand business-to-business and business-to-consumer networks",
c:"Enable new products",
d:"All of the above",
ans:"opt4"},

 

{Question : "4: What feature about enterprise blockchain is accurate?",
a:"Lowers transactional settlement times",
b: "Has trust problems",
c:"Requires no change management",
d: "Is energy efficient",
ans:"opt2"}]

const question = document.querySelector(".questions")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")
const options = document.querySelectorAll(".option")
const showScore = document.querySelector("#showScore")

let score = 0
let questionCount = 0
const loadquestion = () =>{
   const questionlist = quizdb[questionCount]
   question.innerText =  questionlist.Question;
   option1.innerText= questionlist.a;
   option2.innerText = questionlist.b;
   option3.innerText = questionlist.c;
   option4.innerText = questionlist.d;
}
loadquestion()

const getOption = () =>{
    let option

    options.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            option = curAnsElem.id
        }
         
    })
    return option
}

const deSelect = () =>{
    options.forEach(curAnsElem => curAnsElem.checked = false)
}

submit.addEventListener("click",()=>{
    const checkOption = getOption()
    console.log(checkOption)

    if(checkOption === quizdb[questionCount].ans){
        score++
    }

    questionCount++;
    deSelect();

    if(questionCount < quizdb.length){
        loadquestion();
    }else{
        showScore.innerHTML = `<h3> Your score is ${score}/${quizdb.length} </h3>
        <button class = "btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove("scoreArea")
    }

});