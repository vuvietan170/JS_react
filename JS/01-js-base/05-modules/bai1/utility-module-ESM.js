export function subtract(a,b){
    return a-b;
}
export function divide(a,b){
    if(b === 0){
        return "Can't devide by 0";
    }
    else{
        return a/b;
    }
}