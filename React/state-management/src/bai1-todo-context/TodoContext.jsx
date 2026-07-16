import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(null);

const initialState = {
    todos: [
        { id: 1, text: "Học Context API", done: true },
        { id: 2, text: "Học useReducer", done: false },
    ],
    filter: "all", // all | active | done
};
function todoReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, done: false },
                ],
            };
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.payload ? { ...t, done: !t.done } : t,
                ),
            };
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload),
            };
        case "EDIT":
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.payload.id
                        ? { ...t, text: action.payload.text }
                        : t,
                ),
            };
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const value = {
        todos: state.todos,
        filter: state.filter,
        addTodo: (text) => dispatch({ type: "ADD", payload: text }),
        toggleTodo: (id) => dispatch({ type: "TOGGLE", payload: id }),
        deleteTodo: (id) => dispatch({ type: "DELETE", payload: id }),
        editTodo: (id, text) =>
            dispatch({ type: "EDIT", payload: { id, text } }),
        setFilter: (filter) =>
            dispatch({ type: "SET_FILTER", payload: filter }),
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodo phai duoc dung trong TodoProvider");
    return context;
}
