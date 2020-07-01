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
		path: '/polls'
	})
};

const getPollById = (accessToken, pollId) => {
	return callPrivateApi({
		accessToken,
		path: `/polls/${pollId}`
	})
};

const createPoll = (accessToken, poll) => {
	return callPrivateApi({
		accessToken,
		method: 'post',
		path: '/polls',
		data: poll
	})
};

const updatePoll = (accessToken, poll, pollId) => {
	return callPrivateApi({
		accessToken,
		method: 'put',
		path: `/polls/${pollId}`,
		data: poll
	})
};

export default {
	getPolls,
	getPollById,
	createPoll,
	updatePoll
};
