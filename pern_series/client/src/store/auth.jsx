import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const logout = ()=>{
    setToken('');
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, logout, storeTokenInLS}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error('useAuth use outside of the provider');
    }
    return authContextValue;
}
