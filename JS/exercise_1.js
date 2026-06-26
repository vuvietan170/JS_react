// bai1
let factorial = n => {
    let fac = 1;
    for (let i = 1; i <= n; i++){
        fac = fac*i;
    }
    return fac;
}
console.log(factorial(5));

