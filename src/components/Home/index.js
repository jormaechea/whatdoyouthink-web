import React from 'react';

import Container from '@material-ui/core/Container';

import MainTitle from '../MainTitle';
import PollSearch from '../PollSearch';

export default () => {

	return (
		<Container>
			<MainTitle>Enter the Poll ID</MainTitle>
			<PollSearch />
		</Container>
	);
};
