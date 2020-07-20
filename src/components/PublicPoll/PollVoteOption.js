import React from 'react';

import Button from '@material-ui/core/Button';

import Emoji from 'a11y-react-emoji';

import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '../Skeleton';

const votes = {
	thumbs: {
		negative: '👎',
		positive: '👍'
	},
	emojis: {
		negative: '😠',
		positive: '😀'
	}
};

const colorMapping = {
	positive: '#28A745',
	negative: '#DC3545'
}

const useStyles = makeStyles(theme => ({
	voteButton: {
		width: '130px',
		height: '130px',
		backgroundColor: ({ voteValue }) => colorMapping[voteValue],
		'&:hover': {
			backgroundColor: ({ voteValue }) => colorMapping[voteValue],
			opacity: 0.9
		}
	}
}));

const PollVoteOption = ({ kind, voteValue, userVote, variant, status, handleClick }) => {

	const classes = useStyles({
		voteValue
	});

	switch(status) {
		case 'loading':
			return <Skeleton variant="rect" height={130} width={130} />;
		default:
			return (
				<Button
					variant={variant}
					disabled={userVote && (userVote !== voteValue)}
					className={classes.voteButton}
					onClick={() => handleClick(voteValue)}
					title={`Vote ${voteValue}`}
				>
					<Emoji
						symbol={votes[kind][voteValue]}
						label={`Vote ${voteValue}`}
						style={{ fontSize: '3em' }}
					/>
				</Button>
			);
	}
};

export default PollVoteOption;
