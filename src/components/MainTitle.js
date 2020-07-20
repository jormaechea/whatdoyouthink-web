import React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		marginBottom: theme.spacing(3)
	}
}));

export default ({ children }) => {

	const classes = useStyles();

	return (
		<Typography
			component="h3"
			variant="h4"
			align="center"
			paragraph
			className={classes.title}
		>
			{children}
		</Typography>
	);
};
