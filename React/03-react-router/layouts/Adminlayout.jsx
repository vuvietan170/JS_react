import React from "react";
import { Outlet,NavLink } from "react-router-dom";

function AdminLayout(){
    const isAdmin = true;

    if(!isAdmin){
        return <p>Ban khong co quyen truy cap</p>;
    }
    return(
        <div style={{display: "flex"}} >
            <aside>
                <NavLink to="/admin">DashBoard</NavLink>
                <NavLink to="/admin/posts">Bai dang</NavLink>
                <NavLink to="/admin/categories">Danh muc</NavLink>
                <NavLink to="/admin/authors"></NavLink>
            </aside>

            <section>
                <Outlet/>
            </section>
        </div>
    );
}
export default AdminLayout;