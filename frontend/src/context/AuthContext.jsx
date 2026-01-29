import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('habesha_user');
    // We also check for the token to ensure the session is actually valid
    const token = localStorage.getItem('token');
    
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    } else {
      // If one is missing, clear both to be safe
      localStorage.removeItem('habesha_user');
      localStorage.removeItem('token');
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // If the backend sent a 400 or 401, this 'if' stops the login process
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // 1. Update React State
      setUser(data);
      
      // 2. Save full user data (for role/name)
      localStorage.setItem('habesha_user', JSON.stringify(data));
      
      // 3. Save JUST the token (for your api.js interceptor)
      localStorage.setItem('token', data.token); 
      
      return { success: true, role: data.role };

    } catch (error) {
      console.error("Login Error:", error);
      // This returns the error to Login.jsx so it can display the message
      return { success: false, message: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: 'user' }), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return { success: true };
    } catch (error) {
      console.error("Register Error:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    // 1. Clear React State (This makes the Navbar link reappear/disappear)
    setUser(null);
    
    // 2. Clear Browser Storage
    localStorage.removeItem('habesha_user');
    localStorage.removeItem('token'); 
    
    // 3. Redirect
    window.location.href = '/login'; 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);