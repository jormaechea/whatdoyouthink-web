import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';

import Emoji from 'a11y-react-emoji';

const Footer = () => {
	return (
		<Navbar bg="light" variant="light" fixed="bottom" className="justify-content-between">
			<Navbar.Text>
				<Link to="/admin/poll">
					<small>
						<Emoji symbol="🚀" />{' '}
						Create your own Poll!
					</small>
				</Link>
			</Navbar.Text>
			<Navbar.Text className="text-right ">
				<a href="https://github.com/jormaechea" target="_blank" rel="noopener noreferrer">
					<small className="text-muted">
						<span>Made with</span>{' '}
						<Emoji symbol="❤️" label="love" />{' '}
						<span>by</span>{' '}
						<span>Joaquín Ormaechea</span>
					</small>
				</a>
			</Navbar.Text>
		</Navbar>
	);
};

export default Footer;