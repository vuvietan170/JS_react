// tao du lieu gia, de react query ma khong can du lieu that
let posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Bài đăng ${i + 1}`,
    body: "Content.",
    likes: 0,
    liked: false,
}));

let nextId = posts.length + 1;
const PAGE_SIZE = 5;

// tao thoi gian cho de cho no giong voi goi apt that
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// lay du lieu bai viet theo tung trang
export async function fetchPosts({ pageParam = 1 }) {
    await delay(500); // gia lap goi api
    const start = (pageParam - 1) * PAGE_SIZE;
    const items = posts.slice(start, start + PAGE_SIZE);// lay dung so bai cua 1 trang
    const hasMore = start + PAGE_SIZE < posts.length; // kiem tra con trang tiep khong
    return { items, nextPage: hasMore ? pageParam + 1 : undefined };
}

// create New post
export async function createPost({ title, body }) {
    await delay(500);
    const newPost = { id: nextId++, title, body, likes: 0, liked: false };
    posts = [newPost, ...posts];
    return newPost;
}

// like / unlike
export async function toggleLike(postId) {
    await delay(300);
    const post = posts.find((p) => p.id === postId);
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    return post;
}
