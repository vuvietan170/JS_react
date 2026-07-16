import { useState } from "react";
import { TodoProvider, useTodo } from "./TodoContext";

function TodoInner() {
    const {
        todos,
        filter,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        setFilter,
    } = useTodo();
    const [text, setText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    const filtered = todos.filter((t) => {
        if (filter === "active") return !t.done; // lay ra nhung viec chua hoan thanh
        if (filter === "done") return t.done; // lay ra nhung viec hoan thanh
        return true;
    });

    function handleAdd(e) {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text.trim());
        setText("");
    }

    function startEdit(t) {
        setEditingId(t.id);
        setEditingText(t.text);
    }
    function saveEdit(id) {
        if (editingText.trim()) {
            return editTodo(id, editingText.trim());
        }
        setEditingId(null);
    }

    return (
        <div>
            <h2>Todo App</h2>

            <form>
                <input
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add todo "
                />
                <button type="submit">Add</button>
            </form>
            <div>
                {["all", "active", "done"].map((f) => (
                    <button key={f} onClick={() => setFilter(f)}>
                        {f === "all"
                            ? "All"
                            : f === "active"
                              ? "Chua xong"
                              : "Da xong"}
                    </button>
                ))}
            </div>

            {filtered.length === 0 && <p>Khong co viec nao</p>}
            {filtered.map((t) => (
                <div key={t.id}>
                    <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => toggleTodo(t.id)}
                    ></input>
                    {editingId === t.id ? (
                        <input
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            onBlur={() => saveEdit(t.id)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && saveEdit(t.id)
                            }
                            autoFocus
                        />
                    ) : (
                        <span>{t.text}</span>
                    )}
                    <button onClick={() => startEdit(t)}>Edit</button>
                    <button onClick={() => deleteTodo(t.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
export default function TodoApp() {
    return (
        <TodoProvider>
            <TodoInner />
        </TodoProvider>
    );
}
