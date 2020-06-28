import React from 'react';

import Button from 'react-bootstrap/Button';

import Skeleton from 'react-loading-skeleton';

import Emoji from 'a11y-react-emoji';

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

const PollVoteOption = ({ kind, voteValue, userVote, variant, status, handleClick }) => {

	switch(status) {
		case 'loading':
			return <Skeleton height={186} className="mt-5" />;
		default:
			return (
				<Button block variant={variant} disabled={userVote && (userVote !== voteValue)} size="lg" className="mt-5 py-5" onClick={() => handleClick(voteValue)} title={`Vote ${voteValue}`}>
					<Emoji symbol={votes[kind][voteValue]} label={`Vote ${voteValue}`} style={{ fontSize: '3em' }} />
				</Button>
			);
	}
};

export default PollVoteOption;