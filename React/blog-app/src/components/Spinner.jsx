export function Spinner({ label = "Đang tải..." }) {
    return (
        <div style={{ textAlign: "center", padding: 16, color: "#888" }}>
            {label}
        </div>
    );
}
