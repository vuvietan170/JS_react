import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Service from "./components/Service/Service";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/products/headphone.png";
import speaker from "./assets/category/speaker.png";

import Products from "./components/Products/Products";

const BannerData = {
    discount: "30% Off",
    title: "Fine Smile",
    date: "10 Jul to 28 Jul",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Summer Sale",
    title4: "This headphone have a great bass, bring you into the music world  ",
    bgColor: "bg-red-500",
};
const BannerData2 = {
    discount: "20% Off",
    title: "BT Speaker",
    date: "20 Jul to 4 Aug ",
    image: speaker,
    title2: "Air Solo Bass",
    title3: "Summer Sale",
    title4: "This speaker have a great bass, bring you into the music world  ",
    bgColor: "bg-blue-500",
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
            <Products />
            <Banner data={BannerData2}/>
        </div>
    );
}

export default App;
