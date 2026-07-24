import React from "react";
import Heading from "../Reusable/Heading";
import ProductCard from "./ProductCard";

import Image1 from "@/assets/saleproducts/blackandblue.png";
import Image2 from "@/assets/saleproducts/blackgaming.png";
import Image3 from "@/assets/saleproducts/blackredheadphone.png";
import Image4 from "@/assets/saleproducts/blackwithmic.png";
import Image5 from "@/assets/saleproducts/blueheadphone.png";
import Image6 from "@/assets/saleproducts/gamingheadset.png";
import Image7 from "@/assets/saleproducts/greenheadphone.png";
import Image8 from "@/assets/saleproducts/orangeheadphone.png";

const ProductsCard = [
    { id: 1, img: Image1, title: "Blue Headphone", price: "$120", aosDelay: "0" },
    { id: 2, img: Image2, title: "White Headphone", price: "$230", aosDelay: "200" },
    { id: 3, img: Image3, title: "Headphone", price: "$150", aosDelay: "400" },
    { id: 4, img: Image4, title: "Headphone", price: "$90", aosDelay: "600" },
    { id: 5, img: Image5, title: "Headphone", price: "$60", aosDelay: "800" },
    { id: 6, img: Image6, title: "Headphone", price: "$110", aosDelay: "1000" },
    { id: 7, img: Image7, title: "Headphone", price: "$150", aosDelay: "1200" },
    { id: 8, img: Image8, title: "Headphone", price: "$250", aosDelay: "1400" },
];
const Products = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-6">
                {/* Header Section */}
                <Heading title="Our Product" subtitle="Explore Our Produt" />

                {/* Body Section */}
                <ProductCard data={ProductsCard} />
            </div>
        </div>
    );
};

export default Products;
