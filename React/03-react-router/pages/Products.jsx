import { Link } from "react-router-dom";

const products = [
    { id: 2, name: "Laptop" },
    { id: 1, name: "Mouse" },
    { id: 3, name: "Keyboard" },
];
function Product() {
    return (
        <div>
            <h2>Products</h2>

            {products.map((item) => (
                <div key={item.id}>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
}
export default Product;
