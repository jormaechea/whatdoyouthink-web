import React from 'react';

const {
	REACT_APP_OAUTH_ENDPOINT,
	REACT_APP_CLIENT_ID
} = process.env;

const LoginLink = () => {

	const redirectUrl = `${window.location.origin}/auth/authorize`;

	return (
		<a href={`https://${REACT_APP_OAUTH_ENDPOINT}/authorize?response_type=code&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${redirectUrl}`}>Login</a>
	);
};

export default LoginLink;
