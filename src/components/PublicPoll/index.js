import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PublicApi from '../../api/public';

import Poll from './Poll';

export default ({ match }) => {

	const [poll, setPoll] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if(poll && poll.id === match.params.pollId)
			return;

		(async () => {

			setPoll(null);

			try {
				const result = await PublicApi.getPoll(match.params.pollId);
				setPoll(result);
			} catch(err) {
				setError((err.response && err.response.data && err.response.data.message) || err.message);
			}
		})();

	}, [poll, match.params.pollId, error]);

	return (
		<Container fluid>
			{error ? (
				<Container>
					<Row className="justify-content-md-center">
						<Col xs="12" md="6" className="mt-5 mb-5">
							<h2 className="text-center my-4">{error}</h2>
						</Col>
					</Row>
				</Container>
			) : (
				<Poll poll={poll} />
			)
			}
		</Container>
	);
};
