import React, { createContext, useState, ReactNode } from "react";

type user = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  token: string;
};

export interface AuthType {
  user: user | null;
  login: (userData: user) => void;
  logout: () => void;
  loading: boolean;
}
export const AuthContext = createContext<AuthType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (data: user) => {
    try {
      setLoading(true);
      console.log("logegd in user", data);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
