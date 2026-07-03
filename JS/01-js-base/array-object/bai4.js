// Implement function để deep clone object
function deepClone(obj){
    if(obj == null || typeof obj !== "object"){
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for(const key in obj){
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
const person1 = {
    name:"Nam",
    age: 21,
    adress: "Korean"
}
const copy = deepClone(person1);
copy.name = "Tan";
console.log(copy);
console.log(person1);