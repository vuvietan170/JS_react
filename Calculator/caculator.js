
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function removeDisplay(){
    display.value = "";
}

function removeOneElementDisplay(){
    display.value = display.value.slice(0,-1);
}
// tinh ra ket qua, nhung do may luu so thap phan theo he nhi phan nen phai co them toFixed() de lam tron
function result() { 
    try{
        let value = eval(display.value);
        if (typeof value == 'number'){
            value = Number(value.toFixed(5));
        }
        display.value = value;
    }
    catch(error)
    {
        display.value = "ERROR";
    }
}
