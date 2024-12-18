import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaChartLine, FaUsers, FaBox, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column p-3" style={{ minHeight: '100vh' }}>
      <Navbar.Brand href="#">Dashboard</Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
        <Nav.Link href="#analytics"><FaChartLine /> Analytics</Nav.Link>
        <Nav.Link href="#users"><FaUsers /> Users</Nav.Link>
        <Nav.Link href="#products"><FaBox /> Products</Nav.Link>
        <Nav.Link href="#settings"><FaCog /> Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
