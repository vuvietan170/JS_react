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
# 20 CallBacks
callback = a function that is passed as an argument to another function.
used to handle asynchronous operations:
1. Reading a file
2. Network requests
3. Interacting with databases
```
function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
}
function goodbye(){
    console.log("cut");
}
greet("alice",goodbye); this is callbacks
//greet(goodbye()) this is callback function
```
# 21 forEach()
forEach() = method used to iterate over the element of an array and apply a specified function(callback) to each element
array.forEach(callback)
```
let numbers = [1,2,3,4,5];
function display(element){
    console.log(element)
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
numbers.forEach(display);
numbers.forEach(cube);
```
# 22 map()
.map() = accepts a callback and applies that function to each element of an array, then return a new array
```
const numbers = [1,2,3,4,5]
function square(element){
    return Math.pow(element, 2);
}
```
map() is similar forEach but after completion the map method returns a new array , we still have our original numbers whereas in forEach we will change them, that the different between map and forEach
# 23 filter()
.filter() = creates a new array by fitltering out elements
```
let nums = [1,2,3,4,5,6,7];
let evenNums = nums.filter(isEven); // filter callback the function
console.log(evenNums);
function isEven(element){
    return element % 2 === 0;
}
//result => [2,4,6]
```
# 24 reduce()
.reduce() = reduce the elements of an array to a single value
```
const prices = [5,30,10,25,20];
const sum = prices.reduce(previous,next) => {
    return previous + next;
}
```
# 25 function declaration
function declaration = define a reusable block of code that performs a specific task
``` 
function hello(){
    console.log("hello");
}
```
function expressions = a way to define functions as values or variables
```
const hello = function(){
    console.log("hello")
}
hello();
```
# 26 Arrow function
arrow functions = a concise way to write function expresssions good for simples functions that you use only once(parameters)=> some code
# 27 JavaScript Object
object = a collection of related properties and/or methods. Can represent real world object (people,products, places).

Object = {key:value,function()}
```
const person = {
    firstName: "tan",
    lastName: "vu",
    age: 20,
    isEmployed: true,
    sayHello: function(){console.log("Hello")},
}
const person2 = {
    firstName: "viet",
    lastName: "tan",
    age: 50,
    isEmployed: false,
}

console.log(person.firstName); //tan
person.sayHello(); //Hello
```
# 28 What is THIS
this = reference to the object where THIS is used (the object depends on the immediate context)
```
const person1={
    name:"sv Tan",
    favor: "qua lo",
    sayhello: function(){console.log(`Hello my name is: ${this.name}`)}
}
person1.sayhello();
```
**Attentions: the THIS keyword doesn't work with arrow function **
# 29 Constructors 
constructor = special method for defining the properties and methods of objects
```
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)    }
}
const car1 = new Car("Ford","Mustang", 2023, "red");
const car2 = new Car("Lambor","Electric", 2026, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

```
# 30 Class
class = (ES6 Feature) provide a more structured and cleaner way to work with object compared to traditional constructor functions 

ex: static keyword, encapsulation, inheritance
```
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    caculator(saleTax){
        return this.price + (this.price * saleTax);
    }
}

const saleTax = 0.05;

const product1 = new Product("Shoe", 22.5);
const product2 = new Product("Toy", 69);
product1.displayProduct();
product2.displayProduct();

const total = product1.caculator(saleTax);
console.log(`this price product 1 with saletax: $${total.toFixed(2)}`);
```
# 31 Stactic keyword
static = keyword that defines properties or methods that belong to a class itself rather than the object created form that class (class owns anything static, not the objects)
```
class Mathutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return radius * this.PI * 2;
    }
    static getArea(radius){
        return this.PI * Math.pow(radius,2);
    }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(4)); 
console.log(Mathutil.getCircumference(4));
console.log(Mathutil.getArea(4));

class User{
    static UserCount = 0;

    constructor(useName){
        this.useName = useName;
        User.UserCount++; // moi lan khoi tao userName , userCount them 1
    }

    static getUserCount(){
        console.log(`There are have ${User.UserCount} online`);
    }

    sayHello(){
        console.log(`hello my user name is ${this.useName}`);
    }
}

const user1 = new User("Tan");
const user2 = new User("Acn");
const user3 = new User("An");

console.log(user1.useName);
console.log(user2.useName);
console.log(user3.useName);
console.log(User.UserCount);
User.getUserCount();
```
**static belong to class**
# 32 Inheritance
Inheritance = allow a new class to inherit properties and methods from an existing class (parent -> child) help with code reusability
```
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
```
# 33 Super Keyword
super = keyword is used in classed to call the constructor or access the properties and methods of a parent(superclass)

this = this object

super = the parent
```
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}
class Fish extends Animal{
    constructor(name, age, Swimspeed){
        super(name,age);
        this.Swimspeed = Swimspeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, Flyspeed){
        super(name,age);
        this.Flyspeed = Flyspeed;
    }
}
```
# 34 Getters & Setters
getter = special method that makes a property readable
setter = special method that makes a property writeable

validate and modify a value when reading/writing a property
```
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
  
    set width(newwidth){
        if (newwidth > 0 ){
        this._width = newwidth; // private property
        }
        else{
            console.error("With must be positive number");
        }
    }
    set height(newheight){
        if (newheight > 0 ){
        this._height = newheight; // private property
        }
        else{
            console.error("With must be positive number");
        }
    }
} 
const rectangle = new Rectangle(10 , 20);

rectangle.width = 20 // call setter
rectangle.height= 10//call setter

console.log(rectangle.width); //call getter
console.log(rectangle.height); //call getter
```
# 35 Destructuring 
destructuring = extract values from arrays and objects, then assign them to variables in a convenient way

[] = to perform array destructuring 
{} = to perform object destructuring

swap element in array:
```
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);
```
Assign array element to variables:
```
const colors = ["red", "blue", "yellow", "white"];
const [firstColor, secondColor, ...ExtraColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(ExtraColor);
```
Destructure in function parameters:
```
function displayPerson({name, age, fav}){
    console.log(`My name is ${name}`);
    console.log(`I'm ${age} years old and my favourite is : ${fav}`);
}
const preson = {
    name: "tan vu",
    age: 20,
    fav: "lo",
}
displayPerson(preson);
```
# 36 Nested object
nested objects = objects inside of other Objects. Allow you to represent more complex data structures, Child Object is enclosed by Parent Object
Person{Adress{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

