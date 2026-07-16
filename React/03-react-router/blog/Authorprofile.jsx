import React from "react";
import { useParams, Link } from "react-router-dom";
import { authors, posts } from "../src/Mockdata";

function AuthorProfile() {
    const { authorId } = useParams(); // lay tham so tu url
    const author = authors.find((a) => a.id === authorId);
    const authorPosts = posts.filter((p) => (p.authorId = authorId));

    if (!author) {
        return <p>Khong tim thay tac gia</p>;
    }
    return (
        <div>
            <h1>{author.name}</h1>
            <h2>Post</h2>
            <ul>
                {authorPosts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AuthorProfile;
