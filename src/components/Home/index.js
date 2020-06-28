import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default () => {

	const history = useHistory();

	const [pollId, setPollId] = useState('');

	const goToPoll = event => {

		event.preventDefault();

		if(pollId.trim() !== '') {
			history.push(`/poll/${pollId}`);
			setPollId('');
		}

		return false;
	}

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="text-center mt-5 mb-5">Enter the Poll ID</h2>
				</Col>
			</Row>
			<Row className="justify-content-md-center text-center">
				<Col md="6">
					<Form onSubmit={goToPoll}>
						<FormControl
							type="text"
							pattern="[0-9a-f]+"
							placeholder="Type a Poll ID"
							className="mb-3 text-center"
							size="lg"
							value={pollId}
							onChange={e => setPollId(e.target.value)}
						 />
						<Button variant="outline-success" onClick={goToPoll}>Go to Poll!</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
