import { useChatStore } from "../store/useChatStore.js";

export function ChatWindow() {
    const activeUserId = useChatStore((s) => s.activeUserId);
    const users = useChatStore((s) => s.users);

    // lay ra lich su tin nhan rieng nguoi dang duoc chon de chat
    const messages = useChatStore(
        (s) => s.messagesByUser[s.activeUserId] || [], // tim trong obj messagesByUser xem co key nao trung voi id nguoi dang chat khong
    );

    const activeUser = users.find((u) => u.id === activeUserId);

    return (
        <div>
            <h3>Đang chat với: {activeUser?.name}</h3> 
            {messages.length === 0 && <p>Empty messages</p>}
            {messages.map((m, i) => (
                <p key={i}>
                    <b>{m.from === "me" ? "Bạn" : activeUser?.name}:</b>{" "}
                    {m.text}
                </p>
            ))}
        </div>
    );
}
