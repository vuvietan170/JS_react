import { useAuth } from "./AuthContext";

//chi hien thi children neu role hop le
export default function ProtectedRoute({allowedRoles,children}){
    const {role} = useAuth(); // lay vai tro nguoi dung tu useAuth
    
    //kiem tra danh sach hien tai co nam trong dsach allower khong
    if(!allowedRoles.includes(role)){
        return <p>Khong du quyen truy cap</p>;
    }
    return children;
}