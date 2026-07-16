import { useOrders } from "../hooks/useOrders.js";
import { fmtVnd } from "../utils/format.js";

export function OrderHistory() {
    const { orders } = useOrders();
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
