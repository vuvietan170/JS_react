import React from "react";
import { Link } from "react-router-dom";
import { authors } from "../src/Mockdata";

function Authors(){
    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {authors.map((a)=> (
                    <li key={a.id}> 
                        <Link to={`/authors/${authors.id}`}></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Authors;