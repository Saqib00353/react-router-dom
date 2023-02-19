import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from './authentication/AuthProvider';

export const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    color: '#000',
    marginRight: '20px',
  };
};

const Navgationbar = () => {
  const { user } = useAuth();
  return (
    <Navbar style={{ boxShadow: '2px 2px 14px #aaa' }}>
      <Nav>
        <Nav.Link style={navLinkStyle} to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link style={navLinkStyle} to="/about" as={NavLink}>
          About
        </Nav.Link>
        <Nav.Link style={navLinkStyle} to="/contact" as={NavLink}>
          Contact
        </Nav.Link>
        <Nav.Link style={navLinkStyle} to="/product" as={NavLink}>
          Product
        </Nav.Link>
        <Nav.Link style={navLinkStyle} to="/users" as={NavLink}>
          Users
        </Nav.Link>
        <Nav.Link style={navLinkStyle} to="/profile" as={NavLink}>
          Profile
        </Nav.Link>
        {!user && (
          <Nav.Link style={navLinkStyle} to="/login" as={NavLink}>
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navgationbar;
