import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeButton() {
    //lay cac thuoc tinh cua object thanh ca bien rieng
    const { theme, SwitchTheme } = useTheme();
    const style = {
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "50px",
        minHeight: "100vh",
    };
    return (
        <div style={style}>
            <h2>Current Theme: {theme}</h2>

            <button onClick={SwitchTheme}>
                Swicth to {theme === "light" ? "dark" : "light"}
            </button>
        </div>
    );
}
export default ThemeButton;
