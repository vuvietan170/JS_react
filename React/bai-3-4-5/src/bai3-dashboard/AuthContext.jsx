import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // role giả lập, thực tế sẽ lấy từ API login
  const [role, setRole] = useState('user'); // 'user' | 'moderator' | 'admin'

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}