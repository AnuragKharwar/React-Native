import { createContext } from "react";
import AuthProvider from "./authProvider";

export const GlobalContext = createContext<any>({});

const GlobalContextProvider = ({ children }: { children: any }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalContextProvider;
