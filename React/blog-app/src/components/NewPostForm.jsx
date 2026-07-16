import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost.js";

export function NewPostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const createPostMutation = useCreatePost();

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return;
        createPostMutation.mutate({ title, body });
        setTitle("");
        setBody("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Tilte..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Content..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <br />
            <button type="submit">Đăng bài</button>
        </form>
    );
}
