import React, { use, useState } from "react";
function UseState(){ 
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);
    const [payment, setPayment] = useState("");

    const updateName = ()=>{
        setName("Tan");
    };
    const updateAge = () => {
        setAge(age + 1);
    }

    const checkIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <input value={name} onChange={handleNameChange}/>

            <p>Age:{age}</p>
            <button onClick={updateAge}>SetAge</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={checkIsEmployed}>SetEmployed</button>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option </option>
                <option value="Card" >Card</option>
                <option value="Visa"> Visa</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    );
}
export default UseState;