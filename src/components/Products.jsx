import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { navLinkStyle } from './Navbar';

const Products = () => {
  return (
    <>
      <Form.Control className="my-3 w-25" type="text" placeholder="Search" />
      <Navbar className="border border-primary">
        <Nav>
          <Nav.Link style={navLinkStyle} to="featured" as={NavLink}>
            Featured
          </Nav.Link>
          <Nav.Link style={navLinkStyle} to="new" as={NavLink}>
            New
          </Nav.Link>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Products;
