import { useProducts } from "../hooks/useProducts.js";
import { useCart } from "../hooks/useCart.js";
import { fmtVnd } from "../utils/format.js";

export function ProductList() {
    const { items: products, status } = useProducts();
    const { addToCart } = useCart();

    return (
        <div>
            <h3>Sản phẩm</h3>
            {status === "loading" && <p style={{ color: "#888" }}>Đang tải sản phẩm...</p>}
            {products.map((p) => (
                <div
                    className="card row"
                    key={p.id}
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <b>{p.name}</b>
                        <div style={{ color: "#666" }}>{fmtVnd(p.price)}</div>
                    </div>
                    <button onClick={() => addToCart(p.id)}>
                        Thêm vào giỏ
                    </button>
                </div>
            ))}
        </div>
    );
}
