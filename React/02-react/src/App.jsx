import { useState } from "react";
import CreateShop from "./components/ShoppingCart";
import CreateForm from "./components/FormValidation";
import Search from "./components/RealtimeSearch";
import ThemeButton from "./ThemeContext/ThemeButton";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { useApi } from "./components/UseApi";

function App() {
    const { data, loading, error } = useApi(
        "https://jsonplaceholder.typicode.com/users",
    );

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>Error</h2>;
    return (
        <div>
            <h2>User List</h2>

            {data.map((user) => (
                <div key={user.id}>
                    {user.name}, {user.email}
                    <br />
                    <p>{user.address.zipcode}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
