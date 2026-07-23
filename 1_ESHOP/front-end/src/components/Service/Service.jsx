import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
{
    /* <MdLocalShipping /> */
}
{
    /* <FaCheckCircle /> */
}
{
    /* <FaWallet /> */
}
{
    /* <TfiHeadphoneAlt /> */
}

const ServiceData = [
    {
        id: 1,
        icon: <MdLocalShipping className="icon-service" />,
        title: "Free Shipping",
        description: "Free Shipping In Hanoi",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="icon-service" />,
        title: "Safe Money",
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaWallet className="icon-service" />,
        title: "Secure Payment",
        description: "All Payment Secure",
    },
    {
        id: 4,
        icon: <TfiHeadphoneAlt className="icon-service" />,
        title: "Online Support 24/7",
        description: "Hotline: 0981722036",
    },
];
const Service = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg: grid-cols-4 gap-6">
                    {ServiceData.map((item)=> (
                        <div key={item.id} className="flex items-center gap-4">
                            {item.icon}
                            <div className="flex flex-col" >
                                <h1 className="text-base sm:text-lg font-bold ">{item.title}</h1>
                                <p className="text-xs sm:text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Service;
