import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Only allow access if user is logged in AND their role is 'admin'
  return user && user.role === 'admin' ? <Outlet /> : <Navigate to="/home" />;
};

export default AdminRoute;
