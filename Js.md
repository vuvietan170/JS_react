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

# 15 Function
function = A section of reusable code. Declare code once, use it whenever you want. Call the function to execute that code
Structure = function nameFunction(variable){}
**Arrow Function**: 
# 16 Variable Scope 
variable scope = where a variable is recognized and accessible (local vs global)
```
//global
let x = 3;
fun1();
function fun1(){
    console.log(x);
}
function fun2(){
    console.log(x);
}
fun1(),fun2() => 3
//local
let x= 2;
function fun1(){
    let x = 1;
    console.log(x);
}
function fun2(){
    let x = 3;
    console.log(x);
}
fun2(); => 3
fun1(); => 1
```
# 17 Array
array = a variable like structure that can hold more than 1 value
```
let fruits = ["apple", "orange", "banana"];
fruits.push("elemnt");
fruits.pop();
fruits.length;
fruits.indexOf("orange"); => 1
```
# 18 Spread operator
Spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
```
let nums = [1,2,3,4,5,7,6];
let maxNum = Math.max(...nums);
console.log(maxNum);

let name = "viet Tan";
let letters = [...name,"cut"];
console.log(letters); 
['v','t','e','t',' ','T','a','n','cut'] (9)
```
# 19 Rest parameters
rest parameters = (...rest) allow a function work with a variable number of arguments by bunding them into an array
spread = expands an array into seperate elements
rest = bundles separate elements into an array
```
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza"
const food2 = "dai"
const food3 = "puss."
const food4 = "cut"

//openFridge(food1, food2 ,food3 ,food4)
const foods = getFood(food1, food2 ,food3 ,food4)
console.log(foods)
```