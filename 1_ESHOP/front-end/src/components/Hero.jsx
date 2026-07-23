import React from "react";
import Image1 from "../assets/products/headphone.jpg";
import Image2 from "../assets/products/vitural.webp";
import Image3 from "../assets/products/laptop.webp";
import Image4 from "../assets/products/Headphone.webp";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const HeroData = [
    {
        id: 1,
        img: Image4,
        subtitle: "Beats Solo",
        title: "Wireless",
        tilte2: "Headphone",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        tilte2: "Vitural",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        tilte2: "Laptop",
    },
];
export default function Hero() {
    return (
        <div className="container">
            <div className="w-full">
                <Carousel>
                    <CarouselContent>
                        {HeroData.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="grid grid-col-1 sm:grid-col-2"
                            >
                                {/* text content section  */}
                                <div>
                                    <h1>{item.subtitle}</h1>
                                    <h1>{item.title}</h1>
                                    <h1>{item.tilte2}</h1>
                                    <div>
                                        <button>Buy now</button>
                                    </div>
                                </div>
                                {/* img section  */}
                                <div>
                                    <div>
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_6px_4px]"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            </div>
        </div>
    );
}
