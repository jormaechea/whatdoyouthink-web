import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import oauth from '../../oauth';

const handleAuth = async () => {
	const auth0 = await oauth(window.location.href);
	// await auth0.logout();
	return auth0.getTokenSilently();
};

const redirectToLogin = async () => {
	const auth0 = await oauth(window.location.href);
	await auth0.loginWithRedirect();
};

const AuthWrapper = ({ children }) => {

	const [userData, setUserData] = useState();
	useEffect(() => {
		handleAuth()
			.then(user => setUserData(user))
			.catch(err => {
				if(err.error === 'login_required')
					redirectToLogin();

				console.error('An error ocurred with during authentication', err);
			});
	}, []);

	if(!userData) {
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

	return (
		children(userData)
	);
};

export default AuthWrapper;
