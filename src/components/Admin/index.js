import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PrivateApi from '../../api/private';

import PollsTable from './PollsTable';
import LoginLink from './LoginLink';

const Admin = ({ accessToken }) => {

	const [polls, setPolls] = useState();
	const [loading, setLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setLoading(true);
		PrivateApi.getPolls(accessToken)
			.then(userPolls => {
				setPolls(userPolls);
				setLoading(false);
			})
			.catch(err => {
				console.error('An error ocurred with during polls fetch', err);
				setHasError(err);
				setLoading(false);
			});
	}, [accessToken]);

	return (
		hasError ? (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">You need to login</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<LoginLink />
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

export default Admin;
