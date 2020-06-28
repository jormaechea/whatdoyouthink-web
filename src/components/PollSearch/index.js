import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const PollSearch = ({
	inline
}) => {

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
		<Form inline={inline} onSubmit={goToPoll}>
			<FormControl
				type="text"
				placeholder="Type a Poll ID"
				className="mr-sm-2"
				value={pollId}
				onChange={e => setPollId(e.target.value)}
			/>
			<Button
				variant="outline-success"
				className={inline ? '' : 'mt-2'}
				type="submit">
					Go to Poll!
			</Button>
		</Form>
	);
};

export default PollSearch;
