import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from './AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const redirectPath = state?.path || '/';

  const handleLogin = () => {
    login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <TextField label="Username" className="my-3 w-25" type="text" onChange={(e) => setUser(e.target.value)} />
      <div>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
