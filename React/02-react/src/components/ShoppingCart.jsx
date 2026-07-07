import React,{useReducer, useState} from "react";

function CreateShop(){
    const products = [
        {id: 1,name:"Laptop",price: 1000},
        {id: 2,name:"SoiTech",price: 1500},
        {id: 3,name:"KeyBoard",price: 200}
    ];
    const initialState = [];

    //Feature include : Add, Subtract ,Update,remove,clear
    function reducer(state,action){
        switch(action.type){
            case "ADD":
                const haved = state.find((i)=>
                     i.id === action.payload.id);
                if(haved){
                    return state.map((i)=>
                    i.id === action.payload.id ? {...i,qty: i.qty +1 }: i);
                }
                return [
                    ...state,{...action.payload,qty: 1}
                ];
            case "SUBTRACT":
                return state.map((i) => 
                i.id === action.payload.id ? {...i,qty: i.qty -1} : i)
                .filter((i)=> i.qty >0);

            case "REMOVE":
                return state.filter((i)=> i.id !== action.payload);
            case "UPDATE":
                return state.map((i)=> 
                    i.id === action.payload.id ? {...i,qty: action.payload} : i
            );
            case "CLEAR":
                return [];

            default:
                return state;
        }
    }


    const [cart, dispatch] = useReducer(reducer, initialState);

    const totalItems = cart.reduce(
        (sum,item) => sum + item.qty,0
    );
    const totalPrice = cart.reduce(
        (sum,item)=> sum + item.price* item.qty,0
    );
    return (
        <div>
            <h1>Shopping Cart</h1>

            <h2>Products</h2>
            {products.map((product)=> (
                <div key={product.id}>
                    <span>
                        {product.name} - ${product.price}
                    </span>
                    <button onClick={()=> dispatch({
                        type: "ADD",
                        payload: product,
                    })}>+</button>
                    <button onClick={() => dispacth({
                        type: "SUBTRACT",
                        payload:product,
                    })}>-</button>
                </div>
            ))}

            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <input type="number" value={item.qty} min="1" 
                    onChange={(event)=> dispatch({
                        type:"UPDATE",
                        payload: {
                            id: item.id,
                            qty: Number(event.target.value),
                        },
                    })}/>
                    <button onClick={() => dispacth({
                        type:"REMOVE",
                        payload: item.id,
                    })}>Remove</button>
                </div>
            ))}
            <hr></hr>
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: {totalPrice}$</h3>

            <button onClick={()=> dispacth({
                type: "CLEAR",
            })}>Clear</button>


        </div>
    );
}
export default CreateShop;