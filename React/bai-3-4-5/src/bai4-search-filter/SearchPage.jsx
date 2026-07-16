import { useSearchParams } from "react-router-dom"; // doc va thay doi cac query parameters
import { products } from "./Mockdata";
import FilterPanel from "./FilterPanel";

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    // doc truc tiep url -> dong bo, share link duoc ,back,forward
    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "all";
    const maxPrice = searchParams.get("maxPrice") || "2000";

    const updateParams = (key, value) => {
        const next = new URLSearchParams(searchParams); // searchParams đã là một đối tượng URLSearchParams rồi ,searchParams la doi tuong chi nen doc , nen can tao 1 ban sao

        if (value && value !== "all") {
            next.set(key, value); //cap nhat 1 query parameter :params.set("page", "2"); ?page=1&sort=asc-> ?page=1&sort=arc, neu set chua ton tai thi tao them 1 set moi
        } else {
            next.delete(key); //xoa khoi url
        }
        setSearchParams(next);
    };

    const filtered = products.filter((p) => {
        const matchQ = p.name.toLowerCase().includes(q.toLowerCase()); // ten san pham co chua tu khoa tim kiem khong
        const matchCategory = category === "all" || p.category === category; //all thi tra ra het sp,con khong thi ra category tuong ung
        const matchPrice = p.price <= Number(maxPrice); // nho hon maxPrice
        return matchQ && matchCategory && matchPrice;
    });

    return (
        <div>
            <h2>Seach Page And Filter with url state</h2>
            <input
                placeholder="Tim san pham..."
                value={q}
                onChange={(e) => updateParams("q", e.target.value)}
            ></input>{" "}
            {/*dong bo gia tri tim kiem voi url*/}
            <FilterPanel
                category={category}
                setCategory={(c) => updateParams("category", c)}
                maxPrice={maxPrice}
                setMaxPrice={(v) => updateParams("maxPrice", v)}
            />
            <p>
                url query hien tai :{" "}
                <code>{searchParams.toString() || "empty"}</code>
            </p>
            <ul>
                {filtered.map((p) => (
                    <li key={p.id}>
                        {p.name} - {p.category} - {p.price}
                    </li>
                ))}
                {filtered.length === 0 && <li>Khong co san pham nao</li>}
            </ul>
        </div>
    );
}
