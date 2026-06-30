const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum) + 1 + minNum);

let attempts = 0;
let guess;
let running = true

while(running){
    guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Wrong! Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Wrong! Please enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Higher");
        }
        else if(guess > answer){
            window.alert("Lower");
        }
        else{
        window.alert(`Correct the number answer is ${answer}, you try: ${attempts}`);
        running = false;
        }
    }
}
