import React, {useEffect, useState} from "react";
import { axiosInstance } from "../axiosInstance";
const AuthContext = React.createContext(undefined)


export const AuthProvider= ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = useState(false);
    const login = async (values) => {
        console.log("getting here")
        try {
            setLoading(true);
            const response = await axiosInstance.post("/api/auth/login", values);
            if (response.status === 200) {
                setIsAuthenticated(true)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false)

    }
    const getUserByToken = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get("/api/auth/getUser");
            if (response.status === 200) {
                setUser(response.data.data);
                console.log(response.data.data)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const signup = async (values) => {
        try {
            setLoading(true);
            const response = await axiosInstance.post("/api/auth/register", values);
            if (response.status === 200) {
                console.log(response.data);

            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/api/auth/getUser");
                setUser(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                setUser(null);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    return (
        <AuthContext.Provider
            value={{isAuthenticated, login, logout, signup, user, getUserByToken, loading}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}