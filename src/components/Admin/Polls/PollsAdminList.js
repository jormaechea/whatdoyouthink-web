import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Skeleton from 'react-loading-skeleton';

import { useAuth0 } from '@auth0/auth0-react';

import PrivateApi from '../../../api/private';

import PollsTable from './PollsTable';
import PollsShareModal from './PollsShareModal';

const PollsAdminList = () => {

	const { getAccessTokenSilently } = useAuth0();

	const [polls, setPolls] = useState();
	const [loading, setLoading] = useState(true);
	const [apiError, setApiError] = useState(false);
	const [pollShareModal, setshowShareModal] = useState(null);

	const closeShareModal = () => setshowShareModal(null);
	const openShareModal = (poll) => setshowShareModal(poll);

	useEffect(() => {

		setLoading(true);
		(async () => {

			try {
				const accessToken = await getAccessTokenSilently();
				const userPolls = await PrivateApi.getPolls(accessToken)

				setPolls(userPolls);
				setLoading(false);
			} catch(err) {
				console.error('An error ocurred with during polls fetch', err);
				setApiError(err);
				setLoading(false);
			}

		})();
	}, [getAccessTokenSilently]);

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
						<h2 className="text-center mt-5 mb-5">My polls</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<PollsTable loading={loading} polls={polls} openShareModal={openShareModal} />
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						{loading ? <Skeleton width={120} height={38} /> : (
							<Link to="/admin/poll/new">
								<Button variant="success">
									Create a poll
								</Button>
							</Link>
						)}
					</Col>
				</Row>
				<PollsShareModal
					show={!!pollShareModal}
					handleClose={closeShareModal}
					poll={pollShareModal}
				/>
			</Container>
		)
	);
};

export default PollsAdminList;
