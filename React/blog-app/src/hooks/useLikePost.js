import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "../api/postsApi.js";

export function useLikePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: toggleLike,
        onMutate: async (postId) => {
            await queryClient.cancelQueries({ queryKey: ["posts"] });
            const previousData = queryClient.getQueryData(["posts"]);

            queryClient.setQueryData(["posts"], (old) => ({
                ...old,
                pages: old.pages.map((page) => ({ // duyet tung trang
                    ...page,
                    items: page.items.map((post) => // duyet tung id
                        post.id === postId
                            ? {
                                  ...post,
                                  liked: !post.liked,
                                  likes: post.likes + (post.liked ? -1 : 1),
                              }
                            : post,
                    ),
                })),
            }));

            return { previousData };
        },
        onError: (err, postId, context) => {
            queryClient.setQueryData(["posts"], context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });
}
