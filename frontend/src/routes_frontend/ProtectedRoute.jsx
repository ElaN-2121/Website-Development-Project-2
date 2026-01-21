import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Show nothing or a spinner while checking localStorage
  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  // If there is a user (any role), allow access to the child routes (Outlet)
  // If not, redirect them to the login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

// This "export default" is what fixes your App.jsx error
export default ProtectedRoute;