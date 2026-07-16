import { useParams } from "react-router-dom"; // lay tham so tren url
import { Link } from "react-router-dom";
function ProductDetail() {
    const { id } = useParams(); // neu truy cap /products/5 thi id="5"
    return (
        <div>
            <h2>Product Detail</h2>
            <p>Product ID: {id}</p>
            <Link to="/products">Back</Link>
        </div>
    );
}
export default ProductDetail;
