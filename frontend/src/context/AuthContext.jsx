import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on load
  useEffect(() => {
    const savedUser = localStorage.getItem('habesha_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 1. LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save user and token
      setUser(data);
      localStorage.setItem('habesha_user', JSON.stringify(data));
      
      return { success: true, role: data.role };

    } catch (error) {
      console.error("Login Error:", error);
      return { success: false, message: error.message };
    }
  };

  // 2. REGISTER FUNCTION
  const register = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role: 'user' }), // Default role is user
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Auto-login after register
      setUser(data);
      localStorage.setItem('habesha_user', JSON.stringify(data));
      
      return { success: true };

    } catch (error) {
      console.error("Register Error:", error);
      return { success: false, message: error.message };
    }
  };

  // 3. LOGOUT FUNCTION
  const logout = () => {
    setUser(null);
    localStorage.removeItem('habesha_user');
    // Optional: Window reload to clear any state artifacts
    window.location.href = '/login'; 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);