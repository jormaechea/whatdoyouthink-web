import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import MainTitle from '../MainTitle';

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
			<Container align="center">
				<CircularProgress color="secondary"/>
				<Typography variant="body1" align="center">Loading...</Typography>
			</Container>
		);
	}

	if(error) {
		return (
			<Container>
				<MainTitle>An error ocurred</MainTitle>
				<Typography variant="body1" align="center">{error}</Typography>
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
			<Container align="center">
				<Button
					color="secondary"
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					Log out
				</Button>
			</Container>
		</div>
	);
};

export default Admin;
