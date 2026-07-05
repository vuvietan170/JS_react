// Bài 3: Tạo Component Navigation
// Tạo component navigation bar với list các menu items được truyền qua props.
import React from "react";
const Navigation = ({menuItems}) => {
    return (
        <nav className="Navigation">
            <h2>List menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))} 

            </ul>
        </nav>
    );

};
export default Navigation;