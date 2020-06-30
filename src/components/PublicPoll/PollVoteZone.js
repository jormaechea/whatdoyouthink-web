import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Skeleton from 'react-loading-skeleton';

import Emoji from 'a11y-react-emoji';

import PublicApi from '../../api/public';
import PollVoteOption from './PollVoteOption';

const PollVoteZone = ({ poll }) => {

	const [status, setStatus] = useState('loading');
	const [userVote, setUserVote] = useState();

	useEffect(() => {
		setStatus(poll ? 'ready' : 'loading');
	}, [poll]);

	const sendVote = async voteValue => {

		if(status !== 'ready')
			return;

		setUserVote(voteValue)
		setStatus('voting');

		await PublicApi.votePoll(poll.id, voteValue);

		setStatus('done');
		setUserVote(null)
	}

	return (status !== 'done') ? (
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
					<PollVoteOption
						kind={poll && poll.kind}
						voteValue="positive"
						userVote={userVote}
						variant="success"
						status={status}
						handleClick={sendVote}
					/>
				</Col>
				<Col xs="12" md="6">
					<PollVoteOption
						kind={poll && poll.kind}
						voteValue="negative"
						userVote={userVote}
						variant="danger"
						status={status}
						handleClick={sendVote}
					/>
				</Col>
			</Row>
		</Container>
	) : (
		<Container fluid>
			<Row className="justify-content-md-center text-center">
				<Col className="text-center">
					<p>
						{'Thanks for voting!'}
					</p>
					<p>
						<Emoji symbol="🎉"  style={{ fontSize: '3em' }} />
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default PollVoteZone;