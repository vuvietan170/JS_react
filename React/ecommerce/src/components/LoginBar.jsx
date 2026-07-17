import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";

export function LoginBar() {
    const { user, login, logout } = useAuth();
    const [name, setName] = useState("");

    if (user) {
        return (
            <div
                className="row"
                style={{ justifyContent: "space-between", marginBottom: 16 }}
            >
                <span>
                    Xin chào, <b>{user.name}</b>
                </span>
                <button onClick={logout}>Đăng xuất</button>
            </div>
        );
    }

    return (
        <form
            className="row"
            style={{ marginBottom: 16 }}
            onSubmit={(e) => {
                e.preventDefault();
                if (name.trim()) login(name.trim());
            }}
        >
            <input
                placeholder="Tên của bạn..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Đăng nhập</button>
        </form>
    );
}
