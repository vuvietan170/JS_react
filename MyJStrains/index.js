const index = document.getElementById("myRollbtn");
const num = document.getElementById("MyRoll");
const num1 = document.getElementById("MyRoll2");
const num2 = document.getElementById("MyRoll3");
const result = document.getElementById("result");
const checkbox = document.getElementById("subcheckbox");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");

const max = 7;
const min = 1;

let numRoll;
let numRoll2;
let numRoll3;
index.onclick = function(){
    numRoll = Math.floor(Math.random()*(max-min) + min );
    numRoll2 = Math.floor(Math.random()*(max-min) + min );
    numRoll3 = Math.floor(Math.random()*(max-min) + min );
    num.textContent = numRoll;
    num1.textContent = numRoll2;
    num2.textContent = numRoll3;
    let sum = numRoll + numRoll2 + numRoll3;
    if(sum <= 9){
            result.textContent = "Tai";
        }else{
            result.textContent = "Xiu";
    }
}
mySubmit.onclick = function(){
    if(checkbox.checked){
        subResult.textContent = "You have been subcribe!";
    } else {
        subResult.textContent = "Please subcribe!";
    }
}
