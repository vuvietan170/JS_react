import { UserList } from "./components/UserList.jsx";
import { ChatWindow } from "./components/ChatWindow.jsx";
import { MessageInput } from "./components/MessageInput.jsx";

export default function ChatApp() {
    return (
        <div>
            <h2>Chat App (Zustand)</h2>
            <UserList />
            <ChatWindow />
            <MessageInput />
        </div>
    );
}
