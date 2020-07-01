import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Skeleton from 'react-loading-skeleton';

import PrivateApi from '../../../api/private';

import PollForm from './PollForm';

import { useAuth0 } from '@auth0/auth0-react';

const PollsAdminEdit = ({ match }) => {

	const { getAccessTokenSilently } = useAuth0();

	const [poll, setPoll] = useState();
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [apiError, setApiError] = useState(false);
	const history = useHistory();

	const isNew = match.params.pollId === 'new';

	const onFormChange = event => {
		const {
			name,
			value
		} = event.target;

		setPoll({
			...poll,
			[name]: value
		})
	};

	const onFormSumbit = async event => {

		event.preventDefault();

		setSaving(true);

		const apiCall = isNew ? PrivateApi.createPoll : PrivateApi.updatePoll;

		try {
			const accessToken = await getAccessTokenSilently();
			await apiCall(accessToken, poll, match.params.pollId);
			history.push('/admin/poll');
		} catch(err) {
			setApiError(true);
			setSaving(false);
		}
	};

	useEffect(() => {

		setLoading(true);
		(async () => {

			if(isNew) {
				setLoading(false);
				return;
			}

			try {
				const accessToken = await getAccessTokenSilently();
				const userPoll = await PrivateApi.getPollById(accessToken, match.params.pollId)

				setPoll(userPoll);
				setLoading(false);
			} catch(err) {
				console.error('An error ocurred with during poll fetch', err);
				setApiError(err);
				setLoading(false);
			}

		})();
	}, [getAccessTokenSilently, match.params.pollId, isNew]);

	return (
		apiError ? (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">An error ocurred</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<span>{apiError.message}</span>
					</Col>
				</Row>
			</Container>
		) : (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">{!loading ? (isNew ? 'Create your poll!' : poll.title) : <Skeleton />}</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col>
						<PollForm
							isNew={isNew}
							loading={loading}
							saving={saving}
							poll={poll}
							handleChange={onFormChange}
							handleSubmit={onFormSumbit}
						/>
					</Col>
				</Row>
			</Container>
		)
	);
};

export default PollsAdminEdit;
