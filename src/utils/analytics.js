import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';


const AnalyticsTraker = () => {

	const history = useHistory();

	useEffect(() => {
		history.listen((location) => {
			if(window.ga) {
				window.ga('set', 'page', location.pathname + location.search);
				window.ga('send', 'pageview');
			}
		});
	}, [history])

	console.log('history', history);
	return <></>;
};

export default AnalyticsTraker;