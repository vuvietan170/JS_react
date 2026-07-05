// Bài 2: Tạo Component ProductCard
// Tạo component hiển thị thông tin sản phẩm với image, name, price, description và button "Thêm vào giỏ".

function Card({image,name,price,description}){
    return (
        <div>
            <img src={image} alt={name} width="200" />

            <h2>Name:{name}</h2>

            <p>Giá: {price} VNĐ</p>

            <p>{description}</p>

            <button>Thêm vào giỏ</button>
        </div>
    );
}
export default Card;