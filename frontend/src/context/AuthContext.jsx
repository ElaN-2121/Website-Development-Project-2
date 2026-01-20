import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a user is already logged in when the app starts
  useEffect(() => {
    const savedUser = localStorage.getItem('habesha_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // BACKEND INTEGRATION: Later, you will fetch this from API
    console.log("Checking credentials for:", email);

    // Mock Logic for Admin vs User
    let role = 'user'; 
    if (email === 'admin@habesha.com' && password === 'admin123') {
      role = 'admin';
    }

    const userData = { 
      email, 
      role, 
      token: "sample-jwt-token" // Your friend's backend will provide this
    };

    setUser(userData);
    localStorage.setItem('habesha_user', JSON.stringify(userData));
    
    return userData; // Return the user data so Login.jsx can redirect
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('habesha_user');
  };

  const register = async (email, password) => {
    // BACKEND INTEGRATION: POST request to registration endpoint
    console.log("Registering new user:", email);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);