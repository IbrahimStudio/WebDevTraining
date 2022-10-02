const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);


const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score")); //take the value from the stored score

if(!score){
    score = 0;
}

const inputEL = document.getElementById("input");

const questionEl = document.getElementById("question");

questionEl.innerText = 'What is ' + num1 + ' multiplied by ' + num2 + '?';

const correctAns = num1 * num2;

// this function is used to monitor what is happening in the form "box"; 
// in detail here when submit is clicked the function is triggered ( ()=> means that a certain funciont triggers)
form.addEventListener("submit", ()=>{
    const userAns = JSON.parse(inputEL.ariaValueMax);  // + is used to convert to integer
    if(userAns == correctAns){
        score++;    //update the score
        updateLocalStorage();   //save again the updated score
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))     //browser doens't allow to store anything but strings, so we need to convert
}

const scoreEl = document.getElementById("score");

scoreEl.innerText = 'score: ' + score;