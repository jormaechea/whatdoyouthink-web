import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const inputStyle = {
	fontSize: '55px',
	letterSpacing: '4px',
	maxWidth: '330px'
};

const PollSearch = () => {

	const [pollId, setPollId] = useState('');

	const history = useHistory();

	const goToPoll = event => {

		event.preventDefault();

		if(pollId.trim() !== '') {
			history.push(`/poll/${pollId}`);
			setPollId('');
		}
	}

	return (
		<Form onSubmit={goToPoll}>
			<FormControl
				type="text"
				style={inputStyle}
				className="mx-auto px-0 px-sm-2 mb-3 shadow-none rounded-0 border-top-0 border-right-0 border-left-0 text-center"
				value={pollId}
				onChange={e => setPollId(e.target.value)}
				minLength={6}
				maxLength={6}
			/>
			<Button
				variant="outline-success"
				type="submit">
					Go to Poll!
			</Button>
		</Form>
	);
};

export default PollSearch;
