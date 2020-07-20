import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import Emoji from 'a11y-react-emoji';

import store from 'store';

import Skeleton from '../Skeleton';
import PublicApi from '../../api/public';
import PollVoteOption from './PollVoteOption';

import { sendEvent } from '../../utils/analytics';

const PollVoteZone = ({ poll }) => {

	const [status, setStatus] = useState('loading');
	const [userVote, setUserVote] = useState();

	useEffect(() => {
		if(poll) {
			const hasVoted = store.get(`voted-${poll.id}`);
			setStatus(!hasVoted ? 'ready' : 'done');

		} else
			setStatus('loading');
	}, [poll]);

	const sendVote = async voteValue => {

		if(status !== 'ready')
			return;

		setUserVote(voteValue)
		setStatus('voting');

		await PublicApi.votePoll(poll.id, voteValue);

		sendEvent('vote', 'poll', voteValue);

		setStatus('done');
		setUserVote(null)
		store.set(`voted-${poll.id}`, true);
	}

	return (status !== 'done') ? (
		<Grid container direction="column" alignItems="center" justify="center" spacing={2}>
			<Grid item>
				<p>{poll ? 'What do you think?' : <Skeleton width="60%"/>}</p>
			</Grid>
			<Grid item>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<PollVoteOption
							kind={poll && poll.kind}
							voteValue="positive"
							userVote={userVote}
							variant="contained"
							status={status}
							handleClick={sendVote}
						/>
					</Grid>
					<Grid item xs={6}>
						<PollVoteOption
							kind={poll && poll.kind}
							voteValue="negative"
							userVote={userVote}
							variant="contained"
							status={status}
							handleClick={sendVote}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	) : (
		<Grid
			container
			direction="column"
			alignItems="center"
			justify="center"
			alignContent="center"
			spacing={2}
		>
			<Grid item>
				<p>Thanks for voting!</p>
			</Grid>
			<Grid item>
				<p>
					<Emoji symbol="🎉"  style={{ fontSize: '3em' }} />
				</p>
			</Grid>
		</Grid>
	);
};

export default PollVoteZone;
