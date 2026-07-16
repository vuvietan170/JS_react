import { Provider } from "react-redux";
import { store } from "./store.js";
import { LoginBar } from "./components/LoginBar.jsx";
import { ProductList } from "./components/ProductList.jsx";
import { Cart } from "./components/Cart.jsx";
import { OrderHistory } from "./components/OrderHistory.jsx";

function EcommerceInner() {
    return (
        <div>
            <h2>E-commerce (Redux Toolkit)</h2>
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
