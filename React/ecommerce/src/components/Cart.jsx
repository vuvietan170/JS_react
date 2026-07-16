import { useCart } from "../hooks/useCart.js";
import { fmtVnd } from "../utils/format.js";

export function Cart() {
    const { cartItems, detailed, total, changeQty, removeFromCart, checkout } =
        useCart();

    function handleCheckout() {
        const result = checkout();
        alert(result.message);
    }

    return (
        <div>
            <h3>Giỏ hàng ({cartItems.length})</h3>
            {detailed.length === 0 && (
                <p style={{ color: "#888" }}>Giỏ hàng trống.</p>
            )}
            {detailed.map((i) => (
                <div
                    className="card row"
                    key={i.productId}
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span>{i.name}</span>
                    <div className="row" style={{ alignItems: "center" }}>
                        <button
                            onClick={() =>
                                changeQty(i.productId, i.qty - 1)
                            }
                        >
                            -
                        </button>
                        <span style={{ width: 24, textAlign: "center" }}>
                            {i.qty}
                        </span>
                        <button
                            onClick={() =>
                                changeQty(i.productId, i.qty + 1)
                            }
                        >
                            +
                        </button>
                        <span style={{ width: 100, textAlign: "right" }}>
                            {fmtVnd(i.subtotal)}
                        </span>
                        <button onClick={() => removeFromCart(i.productId)}>
                            Xóa
                        </button>
                    </div>
                </div>
            ))}
            {detailed.length > 0 && (
                <div
                    className="row"
                    style={{ justifyContent: "space-between", marginTop: 8 }}
                >
                    <b>Tổng: {fmtVnd(total)}</b>
                    <button onClick={handleCheckout}>Đặt hàng</button>
                </div>
            )}
        </div>
    );
}
