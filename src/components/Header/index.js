import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {

	const history = useHistory();
	const location = useLocation();

	const [pollId, setPollId] = useState('');

	const goToPoll = event => {

		event.preventDefault();

		if(pollId.trim() !== '') {
			history.push(`/poll/${pollId}`);
			setPollId('');
		}
	}

	return (
		<Navbar bg="dark" variant="dark" className="justify-content-between">
			<Navbar.Brand href="/">Simple Poll</Navbar.Brand>
			{location.pathname !== '/' ? (
				<Form inline onSubmit={goToPoll}>>
					<FormControl type="text" placeholder="Type a Poll ID" className="mr-sm-2" value={pollId} onChange={e => setPollId(e.target.value)} />
					<Button variant="outline-success" onClick={goToPoll}>Go to Poll!</Button>
				</Form>
			) : null}
		</Navbar>
	);
};

export default Header;