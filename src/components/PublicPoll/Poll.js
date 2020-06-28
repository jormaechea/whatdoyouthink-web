import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PollTitle from './PollTitle';
import PollVoteZone from './PollVoteZone';

const Poll = ({ poll }) => (
	<Container>
		<Row className="justify-content-md-center">
			<Col xs="12" md="6" className="mt-5 mb-5">
				<PollTitle poll={poll} />
			</Col>
		</Row>
		<Row className="justify-content-md-center">
			<Col xs="12" md="6" >
				<PollVoteZone poll={poll} />
			</Col>
		</Row>
	</Container>
);

export default Poll;