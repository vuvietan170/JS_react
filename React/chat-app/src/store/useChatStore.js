import { create } from "zustand";

const USERS = [
    { id: 1, name: "Viet Tan" },
    { id: 2, name: "Gia Bảo" },
    { id: 3, name: "A Sùng" },
];

// Zustand store: quan ly user hien tai, danh sach user,lich su tin nhan theo tung nguoi (messagesByUser[userId] = mang tin nhan).
export const useChatStore = create((set, get) => ({
    users: USERS,
    activeUserId: USERS[0].id,
    messagesByUser: {
        1: [{ from: "them", text: "Lô cu!" }],
        2: [],
        3: [],
    },

    setActiveUser: (userId) => set({ activeUserId: userId }),// chuyen doi qua lai giua cac phong chat (activeUserId tu cap nhap theo ten)

    sendMessage: (text) => {
        const { activeUserId, messagesByUser } = get();// lay du lieu hien tai trong store
        const updated = [
            ...(messagesByUser[activeUserId] || []), // lay cac tin nhan cu cua nguoi nay(neu co)
            { from: "me", text }, // them tin nhan moi vao doan cuoi cung
        ];
        set({ messagesByUser: { ...messagesByUser, [activeUserId]: updated } });

        // Gia lap tin nhan tra loi trong 1s
        setTimeout(() => {
            const current = get().messagesByUser[activeUserId] || []; // Lay lich su tin nhan moi nhat
            set({
                messagesByUser: {
                    ...get().messagesByUser,
                    [activeUserId]: [
                        ...current,
                        { from: "them", text: text + " cai dcm" },
                    ],
                },
            });
        }, 1000);
    },
}));
