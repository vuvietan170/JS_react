import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productsSlice.js";

export function useProducts() {
    const items = useSelector((s) => s.products.items);
    const status = useSelector((s) => s.products.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") dispatch(fetchProducts());
    }, [status, dispatch]);

    return { items, status };
}
