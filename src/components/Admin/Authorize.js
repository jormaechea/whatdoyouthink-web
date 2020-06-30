import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import { useAuth0 } from '@auth0/auth0-react';

import { Redirect } from 'react-router-dom';

const Authorize = () => {

	const {
		isLoading
	} = useAuth0();

	if(isLoading) {
		return (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">We're almost there...</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center mt-5">
					<Col>
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					</Col>
				</Row>
			</Container>
		);
	}

	return <Redirect to="/admin/polls" />;
};

export default Authorize;