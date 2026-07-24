import React from "react";

const Heading = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
            <div>
            <h1 className="text-3xl font-bold lg:text-4xl ">{title}</h1>
            <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
        </div>
    );
};

export default Heading;
