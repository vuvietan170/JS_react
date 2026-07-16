import { useState } from "react";
import { useChatStore } from "../store/useChatStore.js";

export function MessageInput() {
    const [text, setText] = useState("");
    const sendMessage = useChatStore((s) => s.sendMessage);

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        sendMessage(text.trim());
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nhập tin nhắn..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Gửi</button>
        </form>
    );
}
