// bai1
let factorial = n => {
    let fac = 1;
    for (let i = 1; i <= n; i++){
        fac = fac*i;
    }
    return fac;
}
console.log(factorial(5));

//bai2
for (let i = 1; i<=9; i++){
    console.log(`Bang cuu chuong ${i}`)
        for(let j = 1; j<= 10;j++){
            console.log(`${i}*${j} = ${i*j}`)
        }
}
//bai3
let checkOE = n => {
    if  (n%2==0){
        console.log("so chan");
    } else {
        console.log("so le");
    }
}
console.log(checkOE(6))
//bai4
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("So1: ",(a) => {
    rl.question("Phep tinh: " , (op) => {
        rl.question("So2: ",(b) =>{

            const num1 = Number(a);
            const num2 = Number(b);

             switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (b==0){
                return null;
            }
            else{
                result = num1 / num2;
            }
            break;
        default:
            result = "Error";
    }
    console.log(result);
    rl.close();
        });
    });
});

   

