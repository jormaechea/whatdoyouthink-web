import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';

const PollForm = ({
	isNew,
	loading,
	saving,
	poll,
	handleChange,
	handleSubmit
}) => (
	<Form onSubmit={handleSubmit}>

		<Form.Control type="hidden" placeholder="Put some awesome title!" size="lg" />

		<Form.Group>
			<Form.Label>What's you poll title?</Form.Label>
			<Form.Control
				type="text"
				placeholder="Put some awesome title!"
				size="lg"
				readOnly={loading || saving}
				value={poll ? poll.title : ''}
				name="title"
				onChange={handleChange}
				required
			/>
		</Form.Group>

		<Form.Group>
			<Form.Label>What kind of votes you want to show?</Form.Label>
			<Form.Control
				as="select"
				size="lg"
				readOnly={loading || saving}
				value={poll ? poll.kind : null}
				name="kind"
				onChange={handleChange}
			>
				<option value="thumbs">Thumb up / down</option>
				<option value="emojis">Happy / angry emoji</option>
			</Form.Control>
		</Form.Group>

		<Row className="justify-content-md-center text-center">
			{!loading ? (
				<Col>
					<Button variant="success" type="submit" readOnly={loading || saving}>
						Save
					</Button>
					{!saving ? (
						<Link to="/admin/poll">
							<Button variant="link">
								Cancel
							</Button>
						</Link>
					) : null}
				</Col>
			) : (
				<Col>
					<Skeleton width={62} height={38} count={2} className="mr-2" />
				</Col>
			)}
		</Row>
	</Form>
);

export default PollForm;
