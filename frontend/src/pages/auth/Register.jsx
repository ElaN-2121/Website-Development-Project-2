import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import '../../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Helper function to check email format
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 1. Check if email is valid format
    if (!validateEmail(formData.email)) {
      return setError("Please enter a valid email address (e.g., user@example.com)");
    }

    // 2. Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    // 3. Check password length (Security Best Practice)
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    try {
      const result = await register(formData.name, formData.email, formData.password);
      
      if (result.success) {
        alert("Account created successfully! Please login to continue.");
        navigate('/login'); 
      } else {
        setError(result.message || 'Registration failed.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join Habesha Fest today</p>
        
        {error && (
          <div className="auth-error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label>Full Name</label>
            <input
              className="auth-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <input
              className="auth-input"
              type="email" // This triggers browser-level validation
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input
              className="auth-input"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <input
              className="auth-input"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <Button 
            type="submit" 
            text="Register" 
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