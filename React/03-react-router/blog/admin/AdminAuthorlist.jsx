import React from "react";
import { authors } from "../../src/Mockdata";

function AdminAuthorList() {
    return (
        <div>
            <h1>Manage Author</h1>

            <ul>
                {authors.map((au) => (
                    <li key={au.id}>{au.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default AdminAuthorList;
