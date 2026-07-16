import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Publiclayout() {
    return (
        <div>
            <nav>
                {/* end chi danh dau link la active khi url khop chinh xac voi "/" */}
                <NavLink to="/" end>
                    Home Page
                </NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/authors">Author</NavLink>
            </nav>

            {/* cac trang con render vao day */}
            <Outlet />
        </div>
    );
}
export default Publiclayout;
