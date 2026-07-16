import { useEffect, useRef } from "react";
import { usePosts } from "../hooks/usePosts.js";
import { PostCard } from "./PostCard.jsx";

export function PostList() {
    const { posts, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
        usePosts();
    // duoc dat duoi cung cua bai viet, de nhan biet ng dung da doc het va tai them
    const sentinelRef = useRef(null);

    // khi cuon toi div rong danh sach se tu tai them bai viet
    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;
        const observer = new IntersectionObserver((entries) => { //IntersectionObserver la cong cu co san cua trinh duyet, de rinh xem mot phan tu da xuat hien tren man hinh chua
            if ( 
                entries[0].isIntersecting &&
                hasNextPage &&
                !isFetchingNextPage
            ) {
                fetchNextPage();// thao man 3 dieu kien tren -> tai them bai viet
            }
        });
        observer.observe(el); // bat quan sat
        return () => observer.disconnect(); // tat observer di, de tranh lang phi du lieu
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isLoading) return <p>Đang tải...</p>; // hien chu dang tai

    return (
        <div>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            <div ref={sentinelRef} />
            {isFetchingNextPage && <p>Đang tải thêm...</p>}
            {!hasNextPage && <p>Đã hết bài viết.</p>}
        </div>
    );
}
