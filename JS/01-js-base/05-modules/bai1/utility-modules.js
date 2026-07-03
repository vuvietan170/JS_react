//Tạo utility modules với both CommonJS và ESM
//CommonJs
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
module.exports= {add, multiply};
//ESM