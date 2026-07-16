import { useLikePost } from "../hooks/useLikePost.js";

export function PostCard({ post }) {
    const likeMutation = useLikePost();

    return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => likeMutation.mutate(post.id)}>
                {post.liked ? "Was Liked" : "No Like"} ({post.likes})
            </button>
            <hr />
        </div>
    );
}
