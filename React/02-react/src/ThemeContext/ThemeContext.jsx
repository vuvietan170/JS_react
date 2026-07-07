import React,{useState,useContext,createContext, use} from "react";

const ThemeContext = createContext(); // tao kenh luu du lieu


export function ThemeProvider({children}){
    const [theme,setTheme] = useState("light");

    function SwitchTheme(){
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    // ThemeContext.Provider de dua du lieu vao Context
    // children co the co rat nhieu doi tuong
    return (
        <ThemeContext.Provider value={{theme,SwitchTheme}}>
            {children} 
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    return useContext(ThemeContext);
}