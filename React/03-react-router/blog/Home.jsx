import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../src/Mockdata";

function Home() {
    return (
        <div>
            <h1>New Post</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home;
