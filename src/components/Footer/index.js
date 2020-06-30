import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';

import Emoji from 'a11y-react-emoji';

const Footer = () => {
	return (
		<Navbar bg="light" variant="light" fixed="bottom" className="justify-content-between">
			<Navbar.Text>
				<Link to="/admin">
					<Emoji symbol="🚀" />{' '}
					Create your own Poll!
				</Link>
			</Navbar.Text>
			<Navbar.Text>
				<span>Made with</span>{' '}
				<Emoji symbol="❤️" label="love" />{' '}
				<span>by</span>{' '}
				<a href="https://github.com/jormaechea" target="_blank" rel="noopener noreferrer">Joaquín Ormaechea</a>
			</Navbar.Text>
		</Navbar>
	);
};

export default Footer;