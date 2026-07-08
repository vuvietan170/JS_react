 import React , {useState,useEffect} from "react";

 function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(()=> {
        document.title = `Counter: ${count} ${color}`;
    },[count,color]);
    function AddCount(){
        setCount(c=> c+1);
    }
    function SubtractCount(){
        setCount(c=> c-1);
    }
    function ChangeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={AddCount}>Add</button>
        <button onClick={SubtractCount}>Subtract</button> <br></br>
        <button onClick={ChangeColor}>Change Color</button>
        </>
    );
 }
 export default MyComponent;