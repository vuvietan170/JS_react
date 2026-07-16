const categories = ["all", "phone", "laptop", "tablet", "accessory"];

export default function FilterPanel({
    category,
    setCategory,
    maxPrice,
    setMaxPrice,
}) {
    <div>
        <div>
            <b>Categories:</b>
            {categories.map((cat) => (
                <button key={cat} onClick={() => setCategory(cat)}>
                    {cat}
                </button>
            ))}
        </div>

        <div>
            <label>
                <b>Gia tri toi da</b>
                <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                ></input>{" "}
                ${maxPrice}
            </label>
        </div>
    </div>;
}
