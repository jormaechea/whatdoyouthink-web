import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Skeleton from 'react-loading-skeleton';

import { usePolls } from '../../../api/private';

import PollsTable from './PollsTable';
import PollsShareModal from './PollsShareModal';

const PollsAdminList = () => {

	const [pollShareModal, setshowShareModal] = useState(null);

	const {
		polls,
		isLoading,
		hasError
	} = usePolls();

	const closeShareModal = () => setshowShareModal(null);
	const openShareModal = (poll) => setshowShareModal(poll);

	return (
		hasError ? (
			<Container>
				<Row>
					<Col>
						<h2 className="text-center mt-5 mb-5">An error ocurred</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						<span>{hasError.message}</span>
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
						<PollsTable loading={isLoading} polls={polls} openShareModal={openShareModal} />
					</Col>
				</Row>
				<Row className="justify-content-md-center text-center">
					<Col>
						{isLoading ? <Skeleton width={120} height={38} /> : (
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
