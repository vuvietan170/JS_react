import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store.js";
import {
    login,
    logout,
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,
    placeOrder,
} from "./features.js";

function fmtVnd(n) {
    return n.toLocaleString("vi-VN") + "đ";
}

function LoginBar() {
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    if (user) {
        return (
            <div
                className="row"
                style={{ justifyContent: "space-between", marginBottom: 16 }}
            >
                <span>
                    Xin chào, <b>{user.name}</b> 👋
                </span>
                <button onClick={() => dispatch(logout())}>Đăng xuất</button>
            </div>
        );
    }
    return (
        <form
            className="row"
            style={{ marginBottom: 16 }}
            onSubmit={(e) => {
                e.preventDefault();
                if (name.trim()) dispatch(login(name.trim()));
            }}
        >
            <input
                placeholder="Tên của bạn..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Đăng nhập</button>
        </form>
    );
}

function ProductList() {
    const products = useSelector((s) => s.products.items);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Sản phẩm</h3>
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
                    <button onClick={() => dispatch(addToCart(p.id))}>
                        Thêm vào giỏ
                    </button>
                </div>
            ))}
        </div>
    );
}

function Cart() {
    const cartItems = useSelector((s) => s.cart.items);
    const products = useSelector((s) => s.products.items);
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();

    const detailed = cartItems.map((ci) => {
        const p = products.find((x) => x.id === ci.productId);
        return {
            ...ci,
            name: p.name,
            price: p.price,
            subtotal: p.price * ci.qty,
        };
    });
    const total = detailed.reduce((sum, i) => sum + i.subtotal, 0);

    function handleCheckout() {
        if (!user) return alert("Vui lòng đăng nhập trước khi đặt hàng!");
        if (detailed.length === 0) return alert("Giỏ hàng đang trống!");
        dispatch(placeOrder(detailed));
        dispatch(clearCart());
        alert("Đặt hàng thành công!");
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
                                dispatch(
                                    changeQty({
                                        productId: i.productId,
                                        qty: i.qty - 1,
                                    }),
                                )
                            }
                        >
                            -
                        </button>
                        <span style={{ width: 24, textAlign: "center" }}>
                            {i.qty}
                        </span>
                        <button
                            onClick={() =>
                                dispatch(
                                    changeQty({
                                        productId: i.productId,
                                        qty: i.qty + 1,
                                    }),
                                )
                            }
                        >
                            +
                        </button>
                        <span style={{ width: 100, textAlign: "right" }}>
                            {fmtVnd(i.subtotal)}
                        </span>
                        <button
                            onClick={() =>
                                dispatch(removeFromCart(i.productId))
                            }
                        >
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

function OrderHistory() {
    const orders = useSelector((s) => s.orders.list);
    if (orders.length === 0) return null;
    return (
        <div>
            <h3>Lịch sử đơn hàng</h3>
            {orders.map((o) => (
                <div className="card" key={o.id}>
                    <div style={{ color: "#666", fontSize: 13 }}>
                        {o.createdAt}
                    </div>
                    {o.items.map((i) => (
                        <div key={i.productId}>
                            {i.name} x{i.qty} - {fmtVnd(i.subtotal)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function EcommerceInner() {
    return (
        <div>
            <h2>🛒 E-commerce (Redux Toolkit)</h2>
            <LoginBar />
            <ProductList />
            <Cart />
            <OrderHistory />
        </div>
    );
}

// ⭐ App file để chạy riêng bài 2
export default function EcommerceApp() {
    return (
        <Provider store={store}>
            <EcommerceInner />
        </Provider>
    );
}
