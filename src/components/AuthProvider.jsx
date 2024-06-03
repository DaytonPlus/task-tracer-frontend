import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
    let data = {}
    
    try {
      data = JSON.parse(localStorage.getItem('auth'))
    } catch (e) {
    	localStorage.removeItem('auth')
    }
    
    const user = (data && data.token && data.name) ? data : null
    
    const login = (data, redirectTo='/') => {
    	if(!data || !data.name || !data.token) return false
    	localStorage.setItem('auth', JSON.stringify(data))
    	window.location.replace(redirectTo)
    	return true
    }
    
    const logout = (redirectTo='/') => {
    	localStorage.removeItem('auth')
    	window.location.replace(redirectTo);
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
