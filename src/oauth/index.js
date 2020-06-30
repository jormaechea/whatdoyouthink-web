import createAuth0Client from '@auth0/auth0-spa-js';

const {
	REACT_APP_OAUTH_ENDPOINT,
	REACT_APP_CLIENT_ID,
	REACT_APP_AUDIENCE,
	REACT_APP_SCOPE
} = process.env;

const defaultRedirectUrl = window.location.origin;

let client;
export default redirectUrl => {
	if(!client) {
		client = createAuth0Client({
			domain: REACT_APP_OAUTH_ENDPOINT,
			client_id: REACT_APP_CLIENT_ID,
			audience: REACT_APP_AUDIENCE,
			scope: REACT_APP_SCOPE,
			redirect_uri: redirectUrl || defaultRedirectUrl,
			useRefreshTokens: true
		});
	}

	return client;
}