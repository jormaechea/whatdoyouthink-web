import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';

import Skeleton from '../../Skeleton';

import { useAuth0 } from '@auth0/auth0-react';

import PrivateApi from '../../../api/private';

import MainTitle from '../../MainTitle';
import PollForm from './PollForm';

import { sendEvent } from '../../../utils/analytics';

const PollsAdminEdit = ({ match }) => {

	const { getAccessTokenSilently } = useAuth0();

	const [poll, setPoll] = useState();
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [apiError, setApiError] = useState(false);
	const history = useHistory();

	const isNew = match.params.pollId === 'new';

	if(isNew && !poll) {
		setPoll({
			title: '',
			kind: 'thumbs'
		});
	}

	const clearError = () => setApiError(null);

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
			setApiError(null);
			const accessToken = await getAccessTokenSilently();
			await apiCall(accessToken, poll, match.params.pollId);
			sendEvent(isNew ? 'create' : 'edit', 'poll-admin');
			history.push('/admin/poll');
		} catch(err) {
			setApiError((err.response && err.response.data && err.response.data.message) || err.message);
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
				setApiError(null);
				const accessToken = await getAccessTokenSilently();
				const userPoll = await PrivateApi.getPollById(accessToken, match.params.pollId)

				setPoll(userPoll);
				setLoading(false);
			} catch(err) {
				setApiError((err.response && err.response.data && err.response.data.message) || err.message);
				setLoading(false);
			}

		})();
	}, [getAccessTokenSilently, match.params.pollId, isNew]);

	return (
		<Container>
			<Snackbar
				open={!!apiError}
				autoHideDuration={6000}
				onClose={clearError}
				message={`An error ocurred: {apiError}`}>
			</Snackbar>

			<MainTitle>
				{!loading ? (isNew ? 'Create your poll!' : (poll.title || 'What is it gonna be?')) : <Skeleton />}
			</MainTitle>

			<PollForm
				isNew={isNew}
				loading={loading}
				saving={saving}
				poll={poll}
				handleChange={onFormChange}
				handleSubmit={onFormSumbit}
			/>
		</Container>
	);
};

export default PollsAdminEdit;
