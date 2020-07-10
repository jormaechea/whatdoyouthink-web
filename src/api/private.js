import { useAuth0 } from '@auth0/auth0-react';

import useSWR from 'swr';
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

export const usePolls = () => {

	const { getAccessTokenSilently } = useAuth0();

	const { data, error } = useSWR('polls', async () => {

		const accessToken = await getAccessTokenSilently();

		return callPrivateApi({
			accessToken,
			path: '/polls'
		});
	});

	return {
		polls: data,
		isLoading: !error && !data,
		hasError: error
	}
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
	getPollById,
	createPoll,
	updatePoll
};
