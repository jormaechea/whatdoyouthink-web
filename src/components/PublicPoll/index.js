import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import PollApi from '../../hooks/polls';

import Poll from './Poll';

const useGetPoll = async (pollId, setPoll) => {
	try {
		const poll = await PollApi.getPoll(pollId);
		setTimeout(() => setPoll(poll), 1000);
		// setPoll(poll);
	} catch(e) {
		console.error(`Error fetching poll: ${e.message}`);
	}
};

export default ({ match }) => {

	const [poll, setPoll] = useState(null);

	useEffect(() => {
		if(poll && poll.id === match.params.pollId)
			return;

		setPoll(null);
		useGetPoll(match.params.pollId, setPoll);
	}, [poll, match.params.pollId]);

	return (
		<Container fluid>
			<Poll poll={poll} />
		</Container>
	);
};
