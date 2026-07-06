import React,{use, useState} from "react";
function ColorPicker(){
    const [color,setColor] = useState("#f00000");
    const [stundent,setStudent] = useState({name: "An", id:20,score:10});
    const [fruits,setFruits] = useState(["Apple", "Banana","WaterMelon"]);

    function hanldeChangeColor(event){
        setColor(event.target.value);
    }

    function handleChangeName(event){
        setStudent(stu => ({...stundent,name: event.target.value}));
    }
    function handleChangeId(event){
        setStudent(stu => ({...stundent,id: event.target.value}));
    }
    function handleChangeScore(event){
        setStudent(stu => ({...stundent,value: event.target.value}));
    }

    function handleAddFruit(event){
        const newFruit = document.getElementById("InputFruit").value;
        document.getElementById("InputFruit").value = "";
        setFruits(fruits => [...fruits,newFruit]);
    }
    function removeFruit(index){
        setFruits(fruits.filter((element,i) => i!== index));
    }
    return (
        <div>
            <h1>Color Picker</h1>
            <div className="color-display"style={{backgroundColor: color}}>
                <p>Color select : {color}</p>
            </div>
            <label>Select Color</label>
            <input type="color" value={color} onChange={hanldeChangeColor}/>

            <p>Infor Student {stundent.name}: id = {stundent.id} Score : {stundent.score}</p>
            <input type="text" value={stundent.name} onChange={handleChangeName}></input>
            <input type="number" value={stundent.id} onChange={handleChangeId}></input>
            <input type="number" value={stundent.score} onChange={handleChangeScore}></input>

            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit,index) => 
                <li key={index} onClick={() => removeFruit(index)}>
                    {fruit}</li>)} 
            </ul>
            <input type="text" id="InputFruit" placeholder="Add fruit" />
            <button onClick={handleAddFruit}>Add</button>
        </div>
    );
}
export default ColorPicker;