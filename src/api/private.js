import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const timeout = 5000;

const callPrivateApi = async ({
	accessToken,
	method = 'get',
	path,
	...options
}) => {

	const { status, data } = await axios({
		method: method.toLowerCase(),
		url: `${apiBaseUrl}/admin${path}`,
		timeout,
		responseType: 'json',
		headers: {
			Authorization: `Bearer ${accessToken}`
		},
		...options
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

const getPolls = accessToken => {
	return callPrivateApi({
		accessToken,
		path: `/polls`
	})
};

export default {
	getPolls
};
