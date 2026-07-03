const { Certificate } = require("node:crypto");

// To function createMultiplier(n) tra ve ham nhan voi n
const createMultiplier = (n) => {
    return (x) => x*n;
}
const multiBy2 = createMultiplier(2);
console.log(multiBy2(10))