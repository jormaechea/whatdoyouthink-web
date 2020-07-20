import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { makeStyles } from '@material-ui/core/styles';

import PollsTableRow from './PollsTableRow';

const useStyles = makeStyles(theme => ({
	table: {
		marginBottom: theme.spacing(3)
	},
	actionsCell: {
		width: '140px',
		textAlign: 'center'
	},
	votesCell: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	}
}));

const PollsTable = ({
	loading,
	polls = [],
	openShareModal
}) => {
	const classes = useStyles();

	return (
		<Table size="small" className={classes.table}>
			<TableHead>
				<TableRow>
					<TableCell>Poll</TableCell>
					<TableCell>Kind</TableCell>
					<TableCell className={classes.votesCell}>Votes</TableCell>
					<TableCell className={classes.actionsCell}>Actions</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{(loading ? [0,1,2] : polls).map((poll) => (
					<PollsTableRow
						key={loading ? poll : poll.id}
						poll={loading ? null : poll}
						openShareModal={openShareModal}
					/>
				))}
			</TableBody>
		</Table>
	);
};

export default PollsTable;
