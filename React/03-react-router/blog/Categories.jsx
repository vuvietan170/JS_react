import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../src/Mockdata";

function Categories() {
    return (
        <div>
            <h1>Danh muc</h1>
            <ul>
                {categories.map((category) => (
                    <li key={categories.slug}>
                        <Link to={`/categories/${categories.slug}`}>
                            {categories.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;
