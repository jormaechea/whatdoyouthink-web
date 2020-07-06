import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const About = () => {

	return (
		<Container fluid className="px-0">
			<Jumbotron>
				<Container>
					<h1>WhatDoYouThink</h1>
					<p>
						WhatDoYouThink is an app designed to get instant feedback.
					</p>
				</Container>
			</Jumbotron>
			<Container>
				<Row className="mb-3">
					<Col>
						<h2>Why?</h2>
						<p>
							Because easy and instant feedback is really useful. Whether you're doing a presentation, demo, pitch or a TED Talk.
							Just a simple "good" or "bad", can help you improve for the next one.
							<br />
							The main idea is <strong>simplicity</strong>. Create, share and vote in one minute. Yes, that simple!
						</p>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<h2>Features</h2>
						<ListGroup variant="flush">
							<ListGroup.Item>One click login with google</ListGroup.Item>
							<ListGroup.Item>Simple poll creation</ListGroup.Item>
							<ListGroup.Item>Share poll with QR</ListGroup.Item>
							<ListGroup.Item>Customize poll voting with thumbs or emojis</ListGroup.Item>
							<ListGroup.Item>One-click vote</ListGroup.Item>
							<ListGroup.Item>Admin to manage your polls and see the results</ListGroup.Item>
							<ListGroup.Item>And it's <strong>FREE</strong>. <strong>Forever!</strong></ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<p className="text-center">
							<Link to="/admin/poll">
								<Button variant="success">
									Create your first poll now!
								</Button>
							</Link>
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default About;
