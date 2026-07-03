//Tạo shopping cart với add(), remove(), getTotal()
const createShopCart = () => {
    cart = [];
    return {
        add(name,price){
            cart.push({name,price});
        },
        remove(name){
            cart = cart.filter(item => item.name !== name) // function(item){return item.name !== name;} 
        },
        getTotal(){
            return cart.reduce((sum,item) => sum + item.price,0);
        },
        show(){
            console.log(cart);
        }
    }
}
const shopCart = createShopCart();
shopCart.add("Soy tex", 30);
shopCart.add("Snake", 20);
shopCart.add("Shit", 25);
shopCart.show();
console.log(shopCart.getTotal());
shopCart.remove("Snake");
shopCart.show();
console.log(shopCart.getTotal());