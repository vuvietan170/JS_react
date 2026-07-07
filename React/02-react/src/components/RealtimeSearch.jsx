import React, {useState,useEffect,useMemo} from "react";

function Search(){
    const fruits = ["apple","banana", "orange", "mango"
        ,"watermelon", "dick","coconut",];
    const [search,setSearch] = useState("");
    const [searchDebounce,setSearchDebounce] = useState("");

    useEffect(()=> {
        const timer = setTimeout(()=>{
            setSearchDebounce(search);
        },500);
        return ()=> clearTimeout(timer);
    },[search]);
    
    // useMemo de ghi nho ket qua loc san pham
    const filterFruits = useMemo(()=>{
        console.log("Searching...");

        return fruits.filter(item => item.toLowerCase().includes(searchDebounce.toLowerCase()));
    },[searchDebounce]);

    return(
        <div>
            <h1>Search RealTime</h1>
            <input type="text" placeholder="Search..." value={search} 
            onChange={(event)=> setSearch(event.target.value)}></input>

            <h3>Result:</h3>
            <ul>
                {filterFruits.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Search;