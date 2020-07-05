import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

export const sendEvent = (action, category, label, value) => {

	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		event_value: value
	});
}

const sendPageView = page => {
	window.gtag('config', process.env.REACT_APP_GA_ID, { page_path: page });
}

const AnalyticsTraker = () => {

	const location = useLocation();

	useEffect(() => {
		sendPageView(location.pathname + location.search);
	}, [location])

	return null;
};

export default AnalyticsTraker;