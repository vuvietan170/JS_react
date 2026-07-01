function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghiklmnpqrstuwxyz";
    const uppercaseChars = "ABCDEFGHIKLMNPQRSTUWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    let allowChars = "";
    let password ="";
    
    allowChars += includeLowerCase ? lowercaseChars : "";
    allowChars += includeUpperCase ? uppercaseChars : "";
    allowChars += includeNumbers ? numbers : "";
    allowChars += includeSymbols ?  symbols : "";

    
    if(length <=0){
        return "Password length must be at least 1";
    }
    if(allowChars.length === 0){
        return "At least 1 set of character needs to be selected";
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* allowChars.length);
        password += allowChars[randomIndex];
    }
    return password;

}
const lengthPass = 18;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(lengthPass, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generate password: ${password}`)