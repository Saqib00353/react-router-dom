import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const RequireLogin = ({ children }) => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default RequireLogin;
