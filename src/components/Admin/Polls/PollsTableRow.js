import React from 'react';

import Skeleton from 'react-loading-skeleton';

import { Link } from 'react-router-dom';

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

const PollsTableRow = ({
	poll
}) => {
	return (
		<tr>
			<td>{poll ? poll.title : <Skeleton />}</td>
			<td>{poll ? poll.kind : <Skeleton />}</td>
			<td>{poll ? getVotesStats(poll.votes) : <Skeleton />}</td>
			<td>{poll ? <Link to={`/poll/${poll.id}`} title={`View ${poll.title}`}>View</Link> : <Skeleton />}</td>
		</tr>
	);
};

export default PollsTableRow;
