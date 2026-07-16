import { useSelector, useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,
} from "../features/cartSlice.js";
import { placeOrder } from "../features/ordersSlice.js";

export function useCart() {
    const cartItems = useSelector((s) => s.cart.items);
    const products = useSelector((s) => s.products.items);
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();

    const detailed = cartItems
        .map((ci) => {
            const p = products.find((x) => x.id === ci.productId);
            if (!p) return null; 
            return {
                ...ci,
                name: p.name,
                price: p.price,
                subtotal: p.price * ci.qty,
            };
        })
        .filter(Boolean);

    const total = detailed.reduce((sum, i) => sum + i.subtotal, 0);

    function checkout() {
        if (!user) return { ok: false, message: "Vui lòng đăng nhập trước khi đặt hàng!" };
        if (detailed.length === 0) return { ok: false, message: "Giỏ hàng đang trống!" };

        dispatch(placeOrder(detailed));
        dispatch(clearCart());
        return { ok: true, message: "Đặt hàng thành công!" };
    }

    return {
        cartItems,
        detailed,
        total,
        addToCart: (productId) => dispatch(addToCart(productId)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId)),
        changeQty: (productId, qty) => dispatch(changeQty({ productId, qty })),
        checkout,
    };
}
