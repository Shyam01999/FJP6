import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext)
}
// sync -> if you have a user or not on login and logout 
// It also exposes you lossley coupled auth functions
// 
function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    async function signUp(name, email, password,  confirm) {
        try {
            console.log("signup will be here");
            let res = await axios.post
                ("http://localhost:8080/user/signup", {
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword: confirm,
                    
                })
            console.log("data", res.data);

        } catch (err) {
            console.log("err", err.message);
        }
    }

    async function login(email, password) {
        let flag = true;
        try {
            setLoading(true);
            const res = await axios.post("http://localhost:8080/user/login", {
                email: email,
                password: password
            });
            setLoading(false);
            setUser(res.data.userDetails);
            localStorage.setItem("user", JSON.stringify(res.data.userDetails));
            return flag;
            
        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
        console.log("login will be here");
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    

    function logout() {
        localStorage.removeItem("user")
        setUser(null);
        console.log("logout will come here");
    }

    const value = {
        user,
        login,
        signUp,
        logout
    }
    return (
        < AuthContext.Provider value={value} >
            {/* if not loading show childrens  */}
            {!loading && children}
        </AuthContext.Provider >
    )
}
export default AuthProvider
