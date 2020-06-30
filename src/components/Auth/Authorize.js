import React, { useState, useEffect } from 'react';

import oauth from '../../oauth';

const handleAuthorization = async () => {

	const auth0 = await oauth(window.location.href);
	const accessToken = await auth0.getTokenSilently();
	return accessToken;
};

const Authorize = () => {

	const [accessToken, setAccessToken] = useState();

	useEffect(() => {
		handleAuthorization(accessToken, setAccessToken)
			.then(token => setAccessToken(token))
			.catch(err => console.error('Authentication failed', err));
	}, [accessToken]);

	return (<div>Access token: {JSON.stringify(accessToken)}</div>);
};

export default Authorize;