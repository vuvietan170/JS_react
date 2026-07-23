import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Service from "./components/Service/Service";

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Category/>
            <Category2/>
            <Service/>
        </div>
    );
}

export default App;
