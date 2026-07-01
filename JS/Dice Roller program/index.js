function rollDice(){
    const numDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("DiceResult");
    const diceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numDice;i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">` );
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
} 