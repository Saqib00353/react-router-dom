import { useAuth } from './authentication/AuthProvider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      <h1>Welcome {user}</h1>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Profile;
