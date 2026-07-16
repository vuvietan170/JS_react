import { useMutation, useQueryClient } from "@tanstack/react-query";// mutation cho phep thao tac thay doi du lieu, queryclient de quan ly cache cua React Query 
import { createPost } from "../api/postsApi.js";

export function useCreatePost() {
    const queryClient = useQueryClient();// lay queryClient sau do co the doc va sua cache

    return useMutation({
        mutationFn: createPost,// gui request
        
        // chay truoc khi goi api
        onMutate: async (newPost) => {
            await queryClient.cancelQueries({ queryKey: ["posts"] }); // huy cac request dang chay, tranh ghi de cache
            const previousData = queryClient.getQueryData(["posts"]); // luu cache hien tai, de neu co loi thi khoi phuc

            // can thiep truc tiep vao bo nho dem cua danh sach post de tu sua lai du lieu hien thi tren man hinh
            queryClient.setQueryData(["posts"], (old) => {
                if (!old) return old;
                const [firstPage, ...rest] = old.pages;
                // tao bai viet gia 
                const optimisticPost = {
                    id: "temp-" + Date.now(),
                    ...newPost,
                    likes: 0,
                    liked: false,
                };
                return {
                    ...old,
                    pages: [
                        {
                            ...firstPage,
                            items: [optimisticPost, ...firstPage.items],
                        },
                        ...rest,
                    ],
                };
            });

            return { previousData };
        },
        // Khoi phuc lai cache cu neu bi loi
        onError: (err, newPost, context) => {
            queryClient.setQueryData(["posts"], context.previousData);
        },
        // tu dong lam moi du lieu tren giao dien sau khi thuc hien hanh dong(them, sua , xoa)
        // ham se luon luon chay khi hanh dong mutation ket thuc (bat ke no thanh cong hay that bai) 
        onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });
}
