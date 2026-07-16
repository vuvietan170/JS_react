import { useSelector } from "react-redux";

export function useOrders() {
    const orders = useSelector((s) => s.orders.list);
    return { orders };
}
