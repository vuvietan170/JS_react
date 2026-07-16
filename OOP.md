Khai bao 1 doi duong 
```
const object= {
    name : string,
    age : value
}
```
nhu ban da thay thi no se khai bao duoi 1 dang key: value
```
function constructor(name, price){
    this.name = name; // this.name de gan gia tri cho thuoc tinh name cua chung
    this.price = price; // this.pricr de gan gia tri cho thuoc tinh price cua chung
}
// khi ban tao object moi bang new, constructor se tu dong chay
const procduct1 = new constructor("Ten", gia);
```
Noi don gian thay vi phai viet object thu cong (product2 = {name:"Tao",price:25}) , ban chi can goi new constructor("Tao",25), constructor se tu dong gan 2 gia tri do lan luot vao object moi
# class
noi ngan gon la no se gop ca constructor va cac function vao 1 class 
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
# static
dung de khai bao thuoc tinh hoac phuong thuc thuoc ve class chu khong thuoc ve cac object duoc tao tu class do
```
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(2, 3)); // 5
MathUtil.add(2,3); // GOI TRUC TIEP BANG TEN CLASS

//khong the goi bang object 
const math = new MathUtil();
math.add(2,3)
```
noi chung la cai nao khai bao bang static thi luc goi lai thi phai la: class.Tenhamstatic();
# super
ko phai goi lai may cai this.name, this.age cua class cha nua, thay vao do chi can super(name,age) cac thuoc tinh da co o lop cha roi thi chi can vay thoi
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