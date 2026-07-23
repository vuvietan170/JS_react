import React, { useEffect, useState } from "react";
import LightButton  from "../assets/header/darkon.png";
import DarkButton from "../assets/header/lighton.png";
const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );
    const element = document.documentElement; // Truy cap vao phan tu element

    //adding theme to localStorage and html element
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);
    return (
        <div className="relative left-5">
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton}
                alt=""
                className={`w-12 cursor-pointer absolute right-0 l z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                src={DarkButton}
                alt=""
                className={`w-12 cursor-pointer  ${theme === "light" ? "opacity-0" : "opacity-100"} transition-all duration=300`}
            />
        </div>
    );
};
export default DarkMode;
