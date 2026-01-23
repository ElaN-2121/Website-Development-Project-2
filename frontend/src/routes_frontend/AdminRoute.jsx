import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  /**
   * SECURITY CHECK:
   * If user is logged in AND is an admin -> Show Admin Pages (Outlet)
   * Otherwise -> Redirect to the main landing page (/)
   */
  return user && user.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;