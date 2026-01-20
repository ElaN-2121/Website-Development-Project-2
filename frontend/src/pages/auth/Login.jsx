import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Button from '../../components/Button';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    // Prevent default form behavior
    if (e) e.preventDefault();
    
    // Call login from Context - it returns the userData object
    const userData = await login(email, password);
    
    if (userData) {
      // CHECK ROLE AND REDIRECT
      if (userData.role === 'admin') {
        navigate('/Admin'); // Leads to Admin.jsx for administrators
      } else {
        navigate('/home');  // Leads to Home.jsx for regular users
      }
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Please enter your details to sign in</p>
        
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="auth-input-group">
            <label>Email Address</label>
            <input 
              className="auth-input"
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input 
              className="auth-input"
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {/* Use type="submit" so the form submits when Enter is pressed */}
          <Button 
            type="submit"
            text="Login" 
            variant="default" 
            className="auth-btn-full" 
          />
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;