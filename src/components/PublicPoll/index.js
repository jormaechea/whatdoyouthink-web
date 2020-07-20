import React, { useState, useEffect } from 'react';

import PublicApi from '../../api/public';

import MainTitle from '../MainTitle';
import Poll from './Poll';

export default ({ match }) => {

	const [poll, setPoll] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if(poll && poll.id === match.params.pollId)
			return;

		(async () => {

			setPoll(null);

			try {
				const result = await PublicApi.getPoll(match.params.pollId);
				setPoll(result);
			} catch(err) {
				setError((err.response && err.response.data && err.response.data.message) || err.message);
			}
		})();

	}, [poll, match.params.pollId, error]);

	return error ? <MainTitle>{error}</MainTitle> : <Poll poll={poll} />;
};
