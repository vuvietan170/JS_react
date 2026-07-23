import React from "react";

import Image1 from "../../assets/products/headphone.png";
import Image2 from "../../assets/products/vitural.webp";
import Image3 from "../../assets/products/laptop.png";
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
        img: Image1,
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
        <div className="container mx-auto px-4 my-6">
            <div
                className="overflow-hidden rounded-3xl min-h-[550px] 
            sm:min-h-[650px] hero-bg-color flex justify-center items-center relative p-6 sm:p-12"
            >
                <Carousel className="w-full">
                    <CarouselContent>
                        {HeroData.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 min-h-[450px]">
                                    {/* text content section  */}
                                    <div
                                        className="flex flex-col justify-center gap-2 sm:gap-4
                                     text-center sm:text-left order-2 sm:order-1 z-10 pl-40"
                                    >
                                        <h3 className="text-2xl sm:text-4xl font-semibold text-gray-600">
                                            {item.subtitle}
                                        </h3>
                                        <h2 className="text-4xl sm:text-6xl font-bold text-gray-800">
                                            {item.title}
                                        </h2>
                                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white/80 tracking-wide drop-shadow-sm">
                                            {item.tilte2}
                                        </h1>
                                        <div className="pt-4">
                                            <button className="bg-red-500 hover:bg-red-600 font-medium py-2.5 px-8 rounded-full text-white hover:scale-105 duration-300 transition-all">
                                                Buy now
                                            </button>
                                        </div>
                                    </div>

                                    {/* img section  */}
                                    <div className="order-1 sm:order-2 flex justify-center items-center">
                                        <div>
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:h-[450px] lg:w-[450px] hover:scale-105 duration-300 transition-transform
                                            object-contain mx-auto drop-shadow-[-8px_6px_4px] relative z-40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>
        </div>
    );
}
