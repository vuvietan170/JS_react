import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient.js";
import { NewPostForm } from "./components/NewPostForm.jsx";
import { PostList } from "./components/PostList.jsx";

export default function BlogApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <h2>Blog (React Query)</h2>
            <NewPostForm />
            <PostList />
        </QueryClientProvider>
    );
}
