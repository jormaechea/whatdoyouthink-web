import React from 'react';

import Skeleton from '../Skeleton';
import MainTitle from '../MainTitle';

const PollTitle = ({ poll }) => (
	<MainTitle>
		{poll ? poll.title : <Skeleton/>}
	</MainTitle>
);

export default PollTitle;
