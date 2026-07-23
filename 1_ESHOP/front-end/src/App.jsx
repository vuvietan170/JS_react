import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Category/>
            <Category2/>
        </div>
    );
}

export default App;
