import React from "react";
import Image1 from "@/assets/category/ps.png";
import Image2 from "@/assets/category/phone.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Reusable/Button";

const Category2 = () => {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first col  */}
                    <div
                        className="col-span-1 sm:col-span-2  py-10 pl-5 bg-gradient-to-br from-black/90 to-white/70 
                    text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden "
                    >
                        <div>
                            <div className="relative z-10 mb-4">
                                <p className="mb-[2px] text-gray-400 z-10">
                                    Enjoy
                                </p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 ">
                                    Play Staion 4
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor="bg-black/80"
                                    textColor="text-white"
                                ></Button>
                            </div>
                        </div>
                        <img
                            src={Image1}
                            alt=""
                            className="w-[280px] sm:w-[340px] absolute right-0 top-1/2 -translate-y-1/2 z-0 object-contain "
                        ></img>
                    </div>
                    {/* second col  */}
                    <div
                        className="py-10 pl-5 bg-gradient-to-br from-black/90 to-blue-700/70 text-white 
                    rounded-3xl relative h-[320px] flex items-end overflow-hidden"
                    >
                        <div>
                            <div className="relative z-10 mb-4">
                                <p className="mb-[2px] text-gray-400">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                                    PS4
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor="bg-blue-300"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                        <img
                            src={Image3}
                            alt=""
                            className="w-[200px] absolute right-0 top-1/2 -translate-y-1/2 z-0 object-contain"
                        ></img>
                    </div>

                    {/* third col  */}
                    <div
                        className="py-10 pl-5 bg-gradient-to-br from-black/50 to-purple-500/70 
                    text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden"
                    >
                        <div>
                            <div className="relative z-10 mb-4">
                                <p className="mb-[2px] text-gray-400">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 ">
                                    zFlip 
                                </p>
                                {/* <button className="bg-red-500 hover:bg-red-600 font-semibold text-white rounded-full px-8 py-2.5 hover:scale-105 duration-300 transition-tranforms">Browse</button> */}
                                <Button
                                    text="Browse"
                                    bgColor="bg-black"
                                    textColor="text-purple-500"
                                ></Button>
                            </div>
                        </div>
                        <img
                            src={Image2}
                            alt=""
                            className="w-[180px] absolute right-0 top-1/2 -translate-y-1/2 z-0 object-contain"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category2;
