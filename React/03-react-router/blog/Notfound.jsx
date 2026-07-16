import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div>
            <h2>Not Found Eroor 404</h2>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
export default NotFound;