# 1. Variable
- variable =  a container that stores a value. Behaves as if it were the value it constains.
```
// declaration let x;
// assignment x = 100;
```
---
# 2. Arithmetic operators
arithmetic operators = operands (values , variables, etc.)
                        operators (+ - * /)
# 3. Accept user input
1. window prompt (*let username = window.prompt("Some text")*)
2. HTML textbox
   ```
   //html
   <input id= "myText">
   <button id= "Mysubmit">submit</button>
   //js
   docunment.getElementById("Mysubmit").onclick = function(){
    let username = docunment.getElementById(myText).value;
    console.log(username);
   }
   ```
# 5. Type conversation
type conversation = change the datatype of a value to another(strings, numbers, booleans)
- typeof: datatype of a value
- Number(),String(), Boolean() (*let x = Number(x)*, console.log(x,typeof x); => result : x , 'number')
# 6. Constant
a Variable that can't be changed
# 7 Math-object 
Math = built-in object that provides a collection of properties and method
Math.[round(x),floor(x),ceil(x),pow(x,y),sqrt(x),log(x), sin(x), cos(x), max(),min(), abs(x),....]
# 8 If statement, switchs
if else have constructure basic same what i learn before 
specify: a shortcup to if{} and else{} statements (condition ? codeIfTrue : codeIfFalse)
switches: can be an efficient replacement to many else if statements
``` 
switch(x){
    case 1:
    break;
    case 2: 
    break;
}
```
# 9 String method
string method = allow you to manipulate and work with text(Strings)
value.[indexOf("char"), length, trim(), toLowerCase(), toUpperCase(),repeat("number"),startsWith(""),endsWith(""), includes(""), replaceAll("select","change")]
slice: string.slice(start,end)
# 10 Method chaining 
method chaining = calling one method after another in one continuos line of code
**Ex:**

```
//No Method Chaining
let username = viettan0;
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let lowerChar = username.slice(1);
lowerChar = lowerChar.toLowerCase();
username = letter + lowerChar;
console.log(username);

// Method Chaining 
username = username.trim().charAt(0).toUpperCasee() + username.trim().slice(1).toLowerCase();
```
# 11 Logic operators
logical operators = used to combine or manipulate boolean values(true or false)
1. AND = &&
2. OR = ||
3. NOT = !
# 12 Strict equality
1. = assignment operator
2. == comparison operator(compare if values are equal)
3. != inequality operator
4. === strict equality operator(compare if values & datatype are equal)
5. !== Strct inequality operator
# 13 While loop
while loop = repeat some code WHILE some condition is True
structure : while(){}
```
let loggedIn = false;//flag
let username;
let userpass;

while(!loggedIn){
    username = window.prompt("Enter username");
    userpass = window.prompt("Enter password:"):
    if(username == "caothang2206" && userpass == "vuatulen2005"){
        loggedIn = true;
        console.log("You are logged in!")
    } else {
        console.log("Retry again")
    }
}
```
# 14 For loop
for loop = repeat some code a LIMITED amount of times
Structure: for(let i = 0; i<= 2; i++){}

