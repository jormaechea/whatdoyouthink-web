import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import { useAuth0 } from '@auth0/auth0-react';

const Admin = ({ children }) => {

	const {
		isLoading,
		isAuthenticated,
		error,
		loginWithRedirect,
		logout
	} = useAuth0();

	if(isLoading) {
		return (
			<Container>
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

	if(error) {
		return (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">An error ocurred</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<span>{error}</span>
					</Col>
				</Row>
			</Container>
		);
	}

	if(!isAuthenticated) {
		loginWithRedirect();
		return null;
	}

	return (
		<div>
			{children}
			<Container>
				<Row className="justify-content-md-center text-center mt-5">
					<Col>
						<Button onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Admin;
