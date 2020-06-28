import React from 'react';

import Skeleton from 'react-loading-skeleton';

const PollTitle = ({ poll }) => (
	<h2 className="text-center mt-5 mb-5">{poll ? poll.title : <Skeleton/>}</h2>
);

export default PollTitle;