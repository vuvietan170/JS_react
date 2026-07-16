import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../src/Mockdata";

function Categoryposts(){
    const { categorySlug } = useParams();
    const filered = posts.filter((post) => post.category === categorySlug); //boc loc bang category

    return (
        <div>
            <h1>Danh muc: {categorySlug}</h1>
            <ul>
                {filered.map((p)=>(
                    <li key={p.id}>
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}   
export default Categoryposts;