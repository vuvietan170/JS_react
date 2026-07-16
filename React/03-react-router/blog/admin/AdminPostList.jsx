// tao trang quan ly bai viet
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../src/Mockdata";

function AdminPostList() {
    return (
        <div>
            <h1>Manage Post</h1>
            <Link to="/admin/posts/new">+ New</Link>

            <ul>
                {posts.map((p) => (
                    <li key={p.id}>
                        {p.title} -{" "}
                        <Link to={`admin/posts/${p.id}/edit`}>Change</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AdminPostList;