import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice.js";

export function useAuth() {
    const user = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();

    return {
        user,
        login: (name) => dispatch(login(name)),
        logout: () => dispatch(logout()),
    };
}
