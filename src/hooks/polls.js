import axios from 'axios';

const apiBaseUrl = 'https://simplepollapi.jormaechea.com.ar';
// const apiBaseUrl = 'http://192.168.0.31:4000';

const getPoll = async pollId => {
	const { status, data } = await axios.get(`${apiBaseUrl}/polls/${pollId}`, {
		timeout: 3000,
		responseType: 'json'
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

const votePoll = async (pollId, vote, comment = '') => {
	const { status, data } = await axios.post(`${apiBaseUrl}/polls/${pollId}/vote`, {
		type: vote,
		comment
	},
	{
		timeout: 3000,
		responseType: 'json'
	});

	if(status !== 200)
		throw	new Error(`[${status}] ${data}`);

	return data;
};

export default {
	getPoll,
	votePoll
};
