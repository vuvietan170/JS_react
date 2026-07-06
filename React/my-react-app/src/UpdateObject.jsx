import React, {use, useState} from "react";
function UpdateObject(){
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carModel,setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear,model:carModel};
        setCars(car => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel("");   
    }
    function removeCar(index){
        setCars(c => c.filter((element,i)=> i!== index));
    }
    function handleCarYearChange(event){
        setCarYear(event.target.value);
    }
    function handleCarModelChange(event){
        setCarModel(event.target.value);
    }



    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,index) => 
                <li key={index} onClick={()=> removeCar(index)}>
                    {car.year} , {car.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleCarYearChange} placeholder="Enter year"/>
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Enter model"/>
            <button onClick={handleAddCar}>Add</button>
        </div>
    );
}
export default UpdateObject;