import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate dieu huong bang Js trong khi Link
// form them moi, chinh sua bai viet
function AdminPostForm() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const editMode = Boolean(postId);

    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); // ngan hanh dong mac dinh cua 1 phan tu(thuong hay dung)
        console.log(
            editMode ? `Update post #${postId}` : "Create New post",
            title,
        );
        navigate("/admin/posts");
    };

    return (
        <div>
            <h1>{editMode ? `Fix post #${postId}` : "Create New post"}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default AdminPostForm;