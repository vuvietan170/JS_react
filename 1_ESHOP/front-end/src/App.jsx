import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Category/>
        </div>
    );
}

export default App;
