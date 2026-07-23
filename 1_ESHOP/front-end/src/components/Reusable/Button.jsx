import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
    return <button
    className={`${bgColor} ${textColor} font-semibold cursor-pointer hover:scale-105 duraion-300 py-2 px-8 rounded-full relative z-10`}>{text}</button>;
};
export default Button;
