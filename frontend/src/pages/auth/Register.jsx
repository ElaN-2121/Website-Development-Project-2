import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import '../../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    if (e) e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = await register(formData.email, formData.password);
    if (success) {
      alert("Registration successful!");
      navigate('/login'); 
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Sign up to get started</p>
        
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
          <div className="auth-input-group">
            <label>Email Address</label>
            <input 
              className="auth-input"
              type="email" 
              placeholder="Enter your email" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input 
              className="auth-input"
              type="password" 
              placeholder="Create password" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required 
            />
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <input 
              className="auth-input"
              type="password" 
              placeholder="Confirm password" 
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required 
            />
          </div>

          <Button 
            type="submit"
            text="Sign Up" 
            variant="default" 
            className="auth-btn-full" 
          />
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;