import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PrivateApi from '../../../api/private';

import PollsTable from './PollsTable';

import { useAuth0 } from '@auth0/auth0-react';

const PollsAdmin = () => {

	const { getAccessTokenSilently } = useAuth0();

	const [polls, setPolls] = useState();
	const [loading, setLoading] = useState(true);
	const [apiError, setApiError] = useState(false);

	useEffect(() => {

		setLoading(true);
		(async () => {

			try {
				const accessToken = await getAccessTokenSilently();
				const userPolls = await PrivateApi.getPolls(accessToken)

				setPolls(userPolls);
				setLoading(false);
			} catch(err) {
				console.error('An error ocurred with during polls fetch', err);
				setApiError(err);
				setLoading(false);
			}

		})();
	}, [getAccessTokenSilently]);

	return (
		apiError ? (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">An error ocurred</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<span>{apiError.message}</span>
					</Col>
				</Row>
			</Container>
		) : (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">My polls</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<PollsTable loading={loading} polls={polls} />
					</Col>
				</Row>
			</Container>
		)
	);
};

export default PollsAdmin;
