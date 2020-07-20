import React from 'react';

import Container from '@material-ui/core/Container';

import PollTitle from './PollTitle';
import PollVoteZone from './PollVoteZone';

const Poll = ({ poll }) => (
	<Container>
		<PollTitle poll={poll} />
		<PollVoteZone poll={poll} />
	</Container>
);

export default Poll;
