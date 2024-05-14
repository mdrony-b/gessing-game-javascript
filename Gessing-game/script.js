



const card = document.querySelector(".card");
const wonLostText = document.createElement("h4")
card.appendChild(wonLostText);
const form = document.querySelector(".form");
const gessNumber = form.querySelector("#number");
const submit = form.querySelector(".submit-btn");
const resultText = document.querySelector(".result-text");
const remaininAttempts = document.querySelector(".remainin-attempts");

let totalAttempts = 5;
let attempt = 0;
let won = 0;
let losts = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    attempt++;
    if(attempt == 5){
        gessNumber.disabled = true;
        submit.disabled = true;
    }if(attempt < 6){
        const gessingNumber = Number(gessNumber.value);
        checkResult(gessingNumber);
        remaininAttempts.innerHTML = `Remaining atempts ${totalAttempts - attempt}`
    }
    gessNumber.value = " ";
})


const checkResult = (gessNumber) => {
    const randomNumber = getRandomNumber(5);
    if(gessNumber === randomNumber){
        const body = document.querySelector("body");
        body.classList.add("background");
        const heading = document.createElement("h2");
        body.appendChild(heading);
        heading.classList.add("heading")
        heading.innerHTML = "Ohhhh... I.m Won"
        resultText.innerHTML = `Your number ${gessNumber} You have won! `
        won++;
    }else{
        resultText.innerHTML =`You have lost! Your random number was ${randomNumber}`
        losts++
    }
    wonLostText.innerHTML = `won = ${won} lost = ${losts}`
}



const getRandomNumber = (limit) => {
    return Math.floor(Math.random()*limit)+1; 
}
