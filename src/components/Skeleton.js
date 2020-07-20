import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

export default ({ children, ...props }) => (
	<Skeleton
		animation="wave"
		{...props}
	>
		{children}
	</Skeleton>
);