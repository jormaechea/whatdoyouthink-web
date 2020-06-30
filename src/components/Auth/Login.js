import React, { useEffect } from 'react';

import oauth from '../../oauth';

const Login = () => {

	useEffect(() => {
		oauth().then(auth0 => auth0.loginWithRedirect())
	}, []);

	return <div />;
};

export default Login;