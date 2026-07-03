// Tạo object calculator với các method cơ bản
const caculator = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        if(b === 0){
            return "Can't devide by 0";
        }
        else{
            return a/b;
        }
    }
};
console.log(caculator.add(2,3));
console.log(caculator.divide(2,0));
console.log(caculator.multiply(2,3));