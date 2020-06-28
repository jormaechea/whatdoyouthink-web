import React from 'react';
import { useLocation } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';

import PollSearch from '../PollSearch';

const Header = () => {

	const location = useLocation();

	return (
		<Navbar bg="dark" variant="dark" className="justify-content-between">
			<Navbar.Brand href="/">Simple Poll</Navbar.Brand>
			{location.pathname !== '/' ? (
				<PollSearch inline />
			) : null}
		</Navbar>
	);
};

export default Header;