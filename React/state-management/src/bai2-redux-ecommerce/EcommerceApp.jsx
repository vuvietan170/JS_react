import { useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import {
    login,
    logout,
    addToCart,
    removeFromCart,
    clearCart,
    changeQty,
    placeOrder,
} from "./features";
// chuyen ve tien viet
function formatVND(v) {
    return v.toLocaleString("vi-VN") + "vnd";
}

//login logout
function LoginBar() {
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    if (user) {
        return (
            <div>
                <span>Hello {user.name}</span>
                <button onClick={() => dispatch(logout())}>LogOut</button>
            </div>
        );
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (name.trim()) dispatch(login(name.trim())); //dang nhap neu ten khong rong
            }}
        >
            <input
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}
function ProductList() {
    const products = useSelector((s) => s.products.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Product</h3>
            {products.map((p) => (
                <div key={p.id}>
                    <p>{p.name}</p>
                    <button onClick={() => dispatch(addToCart(p.id))}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
function Cart() {
    const cartItem = useSelector((s) => s.cart.items);
    const products = useSelector((s) => s.products.items);
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();

    const detail = cartItem.map((ci) => {
        const p = products.find((x) => x.id === ci.productId);
        return {
            ...ci,
            name: p.name,
            price: p.price,
            subtotal: p.price * ci.qty,
        };
    });
    const total = detail.reduce((sum, i) => sum + i.subtotal, 0);
    function handleCheckout() {
        if (!user) return alert("Please login before buy a procduct");
        if (detail.length === 0) return alert("Cart is empty");
        dispatch(placeOrder(detail));
        dispatch(clearCart());
        alert("Complete By Product");
    }
    return (
        <div>
            <h3>Cart item total : {cartItem.length}</h3>

            {detail.length === 0 && <p>Cart empty</p>}
            {detail.map((i) => (
                <div key={i.productId}>
                    <span>{i.name}</span>
                    <div>
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
                        <span>{i.qty}</span>
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
                        <span>{formatVND(i.subtotal)}</span>
                        <button
                            onClick={() =>
                                dispatch(removeFromCart(i.productId))
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {detail.length > 0 && (
                <div>
                    <b>{formatVND(total)}</b>
                    <button onClick={handleCheckout}>Dat hang</button>
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
            <h3>Order History</h3>
            {orders.map((histo) => (
                <div key={histo.id}>
                    <div>{histo.createdAt}</div>
                    {histo.items.map((i) => (
                        <div key={i.productId}>
                            {" "}
                            {i.name} x{i.qty} - {formatVND(i.subtotal)}
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
            <h2>E-commerce(Redux Toolkit)</h2>
            <LoginBar />
            <ProductList />
            <Cart />
            <OrderHistory />
        </div>
    );
}
export default function EcommerceApp() {
    return (
        <Provider store={store}>
            <EcommerceInner />
        </Provider>
    );
}
