import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import MainTitle from '../MainTitle';

import { useAuth0 } from '@auth0/auth0-react';

import { Redirect } from 'react-router-dom';

const Authorize = () => {

	const {
		isLoading
	} = useAuth0();

	if(isLoading) {
		return (
			<Container align="center">
				<MainTitle>We're almost there...</MainTitle>
				<CircularProgress color="secondary"/>
				<Typography variant="body1" align="center">Loading...</Typography>
			</Container>
		);
	}

	return <Redirect to="/admin/poll" />;
};

export default Authorize;