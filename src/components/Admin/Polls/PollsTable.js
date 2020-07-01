import React from 'react';

import Table from 'react-bootstrap/Table';

import PollsTableRow from './PollsTableRow';

const PollsTable = ({
	loading,
	polls = []
}) => (
	<Table>
		<thead>
			<tr>
				<td>Poll</td>
				<td>Kind</td>
				<td>Votes</td>
				<td>Actions</td>
			</tr>
		</thead>
		<tbody>
			{(loading ? [0,1,2] : polls).map((poll) => (
				<PollsTableRow key={loading ? poll : poll.id} poll={loading ? null : poll} />
			))}
		</tbody>
	</Table>
);

export default PollsTable;
