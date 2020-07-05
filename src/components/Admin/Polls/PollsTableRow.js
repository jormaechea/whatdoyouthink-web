import React from 'react';

import Button from 'react-bootstrap/Button';

import Skeleton from 'react-loading-skeleton';

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


const PollsTableRow = ({
	poll,
	openShareModal
}) => {

	const history = useHistory();

	return (
		<tr>
			<td>{poll ? (
				<Link to={`/poll/${poll.id}`}>
					{poll.title}
				</Link>
			) : <Skeleton />}</td>
			<td className="d-none d-sm-block">{poll ? poll.kind : <Skeleton />}</td>
			<td>{poll ? getVotesStats(poll.votes) : <Skeleton />}</td>
			<td>{poll ? (
				<span>
					<Button className="mr-0 mb-2 mb-sm-0 mr-sm-2" onClick={() => history.push(`/admin/poll/${poll.id}`)}>
						Edit
					</Button>
					<Button variant="success" onClick={() => openShareModal(poll)}>
						Share
					</Button>
				</span>
			) : <Skeleton width={54} height={34} count={2} className="ml-2" />}</td>
		</tr>
	);
};

export default PollsTableRow;
