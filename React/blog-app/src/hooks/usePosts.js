import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi.js";

export function usePosts() {
    const query = useInfiniteQuery({
        queryKey: ["posts"], // khoa de react luu cache , neu component khac cung dung queryKey thi react Query se dung ching cache
        queryFn: fetchPosts, // ham lay du lieu, khong can tu truyen pageParam
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage, // tra ve nextPage: undefined neu khong con page nao tiep nua
    });

    const posts = query.data ? query.data.pages.flatMap((p) => p.items) : []; // lay items cua tung trang, noi cac mang do thanh 1 mang phang
    return { ...query, posts };
}
