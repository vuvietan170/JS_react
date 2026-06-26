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
