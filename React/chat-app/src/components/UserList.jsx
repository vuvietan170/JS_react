import { useChatStore } from "../store/useChatStore.js";

export function UserList() {
    // tach rieng tung dong bang selector: component chi bi render lai khi thuoc tinh bi thay doi
    const users = useChatStore((s) => s.users);
    const activeUserId = useChatStore((s) => s.activeUserId);
    const setActiveUser = useChatStore((s) => s.setActiveUser);

    return (
        <ul>
            {users.map((u) => (
                <li key={u.id}>
                    <button onClick={() => setActiveUser(u.id)}> 
                        {u.id === activeUserId ? "> " : ""}
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}
