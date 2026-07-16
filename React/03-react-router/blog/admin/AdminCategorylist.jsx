import React from "react";
import { categories } from "../../src/Mockdata";

function AdminCategorylist() {
    return (
        <div>
            <h1>Manage Category</h1>
            <ul>
                {categories.map((cat) => (
                    <li key={cat.slug}>{cat.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default AdminCategorylist;