import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Service from "./components/Service/Service";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/products/headphone.png";
const BannerData = {
    discount: "30% Off",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "This headphone have a great bass, bring you into the music world  ",
    bgColor: "bg-red-500",
};

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Category />
            <Category2 />
            <Service />
            <Banner data={BannerData} />
        </div>
    );
}

export default App;
