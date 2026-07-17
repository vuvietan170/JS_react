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
                <p class="text-center text-2xl text-gray-300">Giỏ hàng trống.</p>
            )}
            {detailed.map((i) => (
                <div key={i.productId}>
                    <span>{i.name}</span>
                    <div>
                        <button
                            onClick={() => changeQty(i.productId, i.qty - 1)}
                        >
                            -
                        </button>
                        <span>{i.qty}</span>
                        <button
                            onClick={() => changeQty(i.productId, i.qty + 1)}
                        >
                            +
                        </button>
                        <span>{fmtVnd(i.subtotal)}</span>
                        <button onClick={() => removeFromCart(i.productId)}>
                            Xóa
                        </button>
                    </div>
                </div>
            ))}
            {detailed.length > 0 && (
                <div>
                    <b class='text-center text-2xl text-gray-300 '>Tổng: {fmtVnd(total)}</b>
                    <button onClick={handleCheckout}>Đặt hàng</button>
                </div>
            )}
        </div>
    );
}
