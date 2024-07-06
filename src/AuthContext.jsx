import React, { createContext, useState, useEffect } from 'react'; 
import axios from 'axios';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token: ', token);
                if (token) {
                    const response = await axios.get('https://pubgnode.onrender.com/api/auth/me', {
                        headers: {
                            Authorization:  `Bearer ${token}`  
                        }
                    });
                    setUser(response.data);
                }
            } catch (error) {
                console.error(error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);
    
    const signup = async (formData) => {
        try {
            const response = await axios.post('https://pubgnode.onrender.com/api/auth/signup', formData);
            localStorage.setItem('token', token);
            setUser(response.data);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    
    const login = async (formData) => {
        try {
            const response = await axios.post('https://pubgnode.onrender.com/api/auth/login', formData);
            const {token} = response.data;
            localStorage.setItem('token', token);
            setUser(response.data);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

