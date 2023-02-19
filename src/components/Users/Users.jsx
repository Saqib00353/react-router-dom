import { NavLink, Outlet } from 'react-router-dom';
import { navLinkStyle } from '../Navbar';
import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get('filter') === 'active';
  return (
    <>
      <NavLink style={navLinkStyle} to="1">
        User 1
      </NavLink>
      <NavLink style={navLinkStyle} to="2">
        User 2
      </NavLink>
      <NavLink style={navLinkStyle} to="3">
        User 3
      </NavLink>
      <Outlet />
      <div className="py-3 d-flex gap-3">
        <Button variant="contained" color="success" onClick={() => setSearchParams({ filter: 'active' })}>
          Show Active Users
        </Button>
        <Button variant="contained" color="error" onClick={() => setSearchParams({})}>
          Remove Filter
        </Button>
      </div>
      {showActiveUser ? <h2>Showing Active Users</h2> : <h2>All users</h2>}
    </>
  );
};

export default Users;
