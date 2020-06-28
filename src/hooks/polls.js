import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const timeout = 5000;

const callPublicApi = async ({
	method = 'get',
	path,
	...options
}) => {

	const { status, data } = await axios({
		method: method.toLowerCase(),
		url: `${apiBaseUrl}${path}`,
		timeout,
		responseType: 'json',
		...options
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

const getPoll = pollId => {
	return callPublicApi({
		path: `/polls/${pollId}`
	})
};

const votePoll = (pollId, vote, comment = '') => {
	return callPublicApi({
		method: 'post',
		path: `/polls/${pollId}/vote`,
		data: {
			type: vote,
			comment
		}
	});
};

export default {
	getPoll,
	votePoll
};
