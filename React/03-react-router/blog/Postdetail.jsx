import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../src/Mockdata";

function Postdetail() {
    const { postId } = useParams();
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return <p>Khong tim thay post</p>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>
                {" "}
                Author{" "}
                <Link to={`/authors/${posts.authorId}`}>{post.author}</Link>
            </p>
        </div>
    );
}
export default Postdetail;
