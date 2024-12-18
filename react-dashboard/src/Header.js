import React from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap';
import { FaBell, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Navbar.Brand href="#">Dashboard</Navbar.Brand>
      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav className="ml-auto">
        <Nav.Link href="#"><FaBell /> Notifications</Nav.Link>
        <NavDropdown title={<FaUser />} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;
