import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Added to display error messages on screen
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    if (e) e.preventDefault();
    setError(''); // Clear previous errors
    
    // Call login from Context - result is { success: boolean, role: string, message: string }
    const result = await login(email, password);
    
    // Check for the specific success flag
    if (result && result.success) {
      if (result.role === 'admin') {
        navigate('/Admin'); 
      } else {
        navigate('/home');  
      }
    } else {
      // If success is false, show the error message from the backend
      setError(result.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Please enter your details to sign in</p>
        
        {/* Error Message Display */}
        {error && <div className="auth-error-message" style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}

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