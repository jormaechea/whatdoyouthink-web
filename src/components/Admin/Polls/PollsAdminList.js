import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import MainTitle from '../../MainTitle';

import { usePolls } from '../../../api/private';

import PollsTable from './PollsTable';
import PollsShareModal from './PollsShareModal';
import Skeleton from '../../Skeleton';

const useStyles = makeStyles(theme => ({
	root: {
		marginBottom: theme.spacing(2)
	},
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.action.active,
			textDecoration: 'none'
		}
	}
}));

const PollsAdminList = () => {

	const classes = useStyles();

	const [pollShareModal, setshowShareModal] = useState(false);

	const {
		polls,
		isLoading,
		hasError
	} = usePolls();

	const closeShareModal = () => setshowShareModal(false);
	const openShareModal = (poll) => setshowShareModal(poll);

	if(hasError) {
		return (
			<Container className={classes.root}>
				<MainTitle>An error ocurred</MainTitle>
				<Typography variant="body1" align="center">
					{hasError.message}
				</Typography>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<MainTitle>My polls</MainTitle>
			<PollsTable loading={isLoading} polls={polls} openShareModal={openShareModal} />
			<Box align="center">
				{isLoading ? <Skeleton variant="rect" width={120} height={36} /> : (
					<Link to="/admin/poll/new" className={classes.link}>
						<Button variant="contained" color="secondary">
							Create a poll
						</Button>
					</Link>
				)}
			</Box>
			<PollsShareModal
				show={!!pollShareModal}
				handleClose={closeShareModal}
				poll={pollShareModal}
			/>
		</Container>
	);
};

export default PollsAdminList;
