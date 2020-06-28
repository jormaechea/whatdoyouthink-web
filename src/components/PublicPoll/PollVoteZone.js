import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Skeleton from 'react-loading-skeleton';

import PollApi from '../../hooks/polls';

const votes = {
	thumbs: {
		negative: '👎',
		positive: '👍'
	},
	emojis: {
		negative: '😠',
		positive: '😀'
	}
};

const vote = async (pollId, voteValue, setStatus) => {

	setStatus('voting');

	await PollApi.votePoll(pollId, voteValue);

	setStatus('done');
}

const PollVoteZone = ({ poll }) => {

	const [status, setStatus] = useState('ready');

	return status === 'ready' ? (
		<Container fluid>
			<Row className="justify-content-md-center text-center">
				<Col className="text-center">
					<p>
						{poll ? 'What do you think?' : <Skeleton width="60%"/>}
					</p>
				</Col>
			</Row>
			<Row className="justify-content-md-center text-center">
				<Col xs="12" md="6">
					{poll ? (
						<Button block variant="success" size="lg" className="mt-5 py-5" onClick={() => vote(poll.id, 'positive', setStatus)}>
							<span role="img" aria-label="thumbs-up" style={{ fontSize: '3em' }}>
								{votes[poll.kind].positive}
							</span>
						</Button>
					) : <Skeleton height={186} className="mt-5" />}
				</Col>
				<Col xs="12" md="6">
					{poll ? (
						<Button block variant="danger" size="lg" className="mt-5 py-5" onClick={() => vote(poll.id, 'negative', setStatus)}>
							<span role="img" aria-label="thumbs-down" style={{ fontSize: '3em' }}>
								{votes[poll.kind].negative}
							</span>
						</Button>
					) : <Skeleton height={186} className="mt-5" />}
				</Col>
			</Row>
		</Container>
	) : (status === 'voting' ? 'Voting...' : 'Done!');
};

export default PollVoteZone;