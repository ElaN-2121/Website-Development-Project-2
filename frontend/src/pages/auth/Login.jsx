import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to show error messages
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    const result = await login(email, password);
    
    if (result.success) {
      if (result.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } else {
      setError(result.message); // Show error from backend
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to Habesha Fest</p>
        
        {error && <div className="auth-error-message" style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
        
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="auth-input-group">
            <label>Email Address</label>
            <input 
              className="auth-input" type="email" placeholder="Enter your email" 
              value={email} onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input 
              className="auth-input" type="password" placeholder="••••••••" 
              value={password} onChange={(e) => setPassword(e.target.value)} required 
            />
          </div>

          <Button type="submit" text="Login" variant="default" className="auth-btn-full" />
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;