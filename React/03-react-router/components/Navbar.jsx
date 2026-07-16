import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link> |<Link to="/products">Products</Link> |
            <Link to="/categories">Categories</Link> |
            <Link to="/cart">Cart</Link> | <Link to="/checkout">Checkout</Link>
        </nav>
    );
}
export default NavBar;
