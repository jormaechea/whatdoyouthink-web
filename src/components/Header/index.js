import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" className="justify-content-between" expand="md">
			<Link to="/" className="navbar-brand">
				<img
					src="/logo-64.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="Simple Poll logo"
				/>
				{' '}
				Simple Poll
			</Link>

			<Navbar.Toggle aria-controls="app-header"/>
			<Navbar.Collapse id="app-header">
				<Nav className="ml-auto">
					<Nav.Item>
						<Link to="/about" className="nav-link">About</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/admin/poll" className="nav-link">My Polls</Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;