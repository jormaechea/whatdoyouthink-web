import React from 'react';

import { Auth0Provider } from "@auth0/auth0-react";

const {
	REACT_APP_OAUTH_ENDPOINT,
	REACT_APP_CLIENT_ID,
	REACT_APP_AUDIENCE,
	REACT_APP_SCOPE
} = process.env;

const redirectUri = `${window.location.origin}/auth/authorize`;

const AuthWrapper = ({ children }) => {
	return (
		<Auth0Provider
			domain={REACT_APP_OAUTH_ENDPOINT}
			clientId={REACT_APP_CLIENT_ID}
			audience={REACT_APP_AUDIENCE}
			scope={REACT_APP_SCOPE}
			redirectUri={redirectUri}
			useRefreshTokens
		>
			{children}
		</Auth0Provider>
	);
};

export default AuthWrapper;
