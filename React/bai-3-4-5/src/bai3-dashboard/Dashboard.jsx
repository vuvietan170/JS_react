// UI doi role va hien thi noi dung theo quyen
import { useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

export default function Dashboard() {
    const { role, setRole } = useAuth();
    const roles = ["user", "admin", "moderator"];

    return (
        <div>
            <h2>Dashboard role-based Asset</h2>
            <div>
                <b>Doi role:</b>
                {roles.map((r) => (
                    <button key={r} onClick={() => setRole(r)}>
                        {r}
                    </button>
                ))}
            </div>

            <p>Role hien tai: {role}</p>

            <section>
                <h3>Khu vuc user</h3>
                <ProtectedRoute allowedRoles={["user", "admin", "moderator"]}>
                    <p>Everybody can watch this</p>
                </ProtectedRoute>
            </section>

            <section>
                <h3>Khu vuc moderator</h3>
                <ProtectedRoute allowedRoles={["admin", "moderator"]}>
                    <p>Only <b>admin and moderator</b> can watch this</p>
                </ProtectedRoute>
            </section>
            <section>
                <h3>Khu vuc Admin</h3>
                <ProtectedRoute allowedRoles={["admin"]}>
                    <p>
                        Only <b>admin</b> can watch this
                    </p>
                </ProtectedRoute>
            </section>
        </div>
    );
}
