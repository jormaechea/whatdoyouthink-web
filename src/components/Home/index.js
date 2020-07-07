import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PollSearch from '../PollSearch';

export default () => {

	return (
		<Container fluid>
			<Row>
				<Col>
					<h2 className="text-center mt-5 mb-5">Enter the Poll ID</h2>
				</Col>
			</Row>
			<Row className="justify-content-md-center text-center">
				<Col md="6">
					<PollSearch />
				</Col>
			</Row>
		</Container>
	);
};
