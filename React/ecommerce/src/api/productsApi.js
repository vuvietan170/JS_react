// Lớp "API" giả lập — trong thực tế đây sẽ là các lệnh gọi fetch/axios
// tới backend thật (VD: fetch('/api/products')).
// Vì dữ liệu sản phẩm trong bài học là dữ liệu tĩnh (mock), ta bọc nó
// trong một hàm bất đồng bộ để sau này dễ dàng thay bằng API thật
// mà không cần sửa slice hay component nào khác.

const MOCK_PRODUCTS = [
    { id: 1, name: "Bàn phím cơ", price: 890000 },
    { id: 2, name: "Chuột không dây", price: 350000 },
    { id: 3, name: "Tai nghe Bluetooth", price: 590000 },
    { id: 4, name: "Màn hình 24 inch", price: 2990000 },
];

export function fetchProducts() {
    // Giả lập độ trễ mạng 300ms
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_PRODUCTS), 300);
    });
}
