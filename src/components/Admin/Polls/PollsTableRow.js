import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';

import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '../../Skeleton';

import { Link, useHistory } from 'react-router-dom';

const getVotesStats = votes => {
	const stats = votes.reduce((acum, vote) => {
		if(typeof acum[vote.type] !== 'undefined')
			acum[vote.type]++
		return acum;
	}, {
		positive: 0,
		negative: 0,
	});

	return `${votes.length} votes: ${stats.positive} positive, ${stats.negative} negative.`
}

const useStyles = makeStyles(theme => ({
	link: {
		color: theme.palette.text.secondary,
		'&:hover': {
			color: theme.palette.action.active
		}
	},
	votesCell: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));

const PollsTableRow = ({
	poll,
	openShareModal
}) => {

	const classes = useStyles();

	const history = useHistory();

	return (
		<TableRow>
			<TableCell>{poll ? (
				<Link to={`/poll/${poll.id}`} className={classes.link}>
					{poll.title}
				</Link>
			) : <Skeleton />}</TableCell>
			<TableCell>{poll ? poll.kind : <Skeleton />}</TableCell>
			<TableCell className={classes.votesCell}>{poll ? getVotesStats(poll.votes) : <Skeleton />}</TableCell>
			<TableCell>
				<Grid container spacing={1}>
					<Grid item>
						{
							poll ? (
								<IconButton onClick={() => history.push(`/admin/poll/${poll.id}`)} variant="link">
									<EditIcon/>
								</IconButton>
							) : (
								<Skeleton variant="circle" width={48} height={48} count={2} component="span" />
							)
						}
					</Grid>
					<Grid item>
						{
							poll ? (
								<IconButton variant="contained" onClick={() => openShareModal(poll)}>
									<ShareIcon/>
								</IconButton>
							) : (
								<Skeleton variant="circle" width={48} height={48} count={2} component="span" />
							)
						}
					</Grid>
				</Grid>
			</TableCell>
		</TableRow>
	);
};

export default PollsTableRow;
