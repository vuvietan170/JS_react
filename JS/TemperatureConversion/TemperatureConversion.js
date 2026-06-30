
const textBox = document.getElementById("Textbox");
const toF = document.getElementById("ToF");
const toC = document.getElementById("ToC");
const result = document.getElementById("result");

let temp;


function convert(){
    if(toC.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) ;
    }
    else if(toF.checked){
        temp = Number(textBox.value);
        temp = (temp-32)* 5/9;
        result.textContent = temp.toFixed(1) ;
    }
    else{
        result.textContent = "Select a unit";
    }

}