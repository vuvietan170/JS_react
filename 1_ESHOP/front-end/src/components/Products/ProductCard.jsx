import React from "react";
import Button from "../Reusable/Button";

const ProductCard = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
                {/* card section  */}
                {data.map((item) => (
                    <div key={item.id} className="relative group">
                        <div>
                            <img
                                src={item.img}
                                alt=""
                                className="h-[180px] w-full object-contain rounded-md group-hover:blur-xs group-hover:scale-105 bg-gray-500"
                            />
                            {/* hover button  */}
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center 
                             justify-center items-center duration-200  ">
                                <Button
                                    text="Add to Cart"
                                    bgColor="bg-red-500"
                                    textColor="text-white"
                                />
                            </div>
                        </div>

                        <div className="leading-7">
                            <h2 className="font-semibold">{item.title}</h2>
                            <h2 className="font-bold">{item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
