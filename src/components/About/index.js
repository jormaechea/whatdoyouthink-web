import React from 'react';
import { Link } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.action.active,
			textDecoration: 'none'
		}
	}
}));

const About = () => {

	const classes = useStyles();

	return (
		<Grid container direction="column">
			<Grid item>
				<Container>
					<h1>WhatDoYouThink</h1>
					<p>
						WhatDoYouThink is an app designed to get instant feedback.
					</p>
				</Container>
			</Grid>
			<Grid item>
				<Container>
					<h2>Why?</h2>
					<p>
						Because easy and instant feedback is really useful. Whether you're doing a presentation, demo, pitch or a TED Talk.
						Just a simple "good" or "bad", can help you improve for the next one.
						<br />
						The main idea is <strong>simplicity</strong>. Create, share and vote in one minute. Yes, that simple!
					</p>
				</Container>
			</Grid>
			<Grid item>
				<Container>
					<h2>Features</h2>
					<List variant="flush">
						<ListItem divider>One click login with google</ListItem>
						<ListItem divider>Simple poll creation</ListItem>
						<ListItem divider>Share poll with QR</ListItem>
						<ListItem divider>Customize poll voting with thumbs or emojis</ListItem>
						<ListItem divider>One-click vote</ListItem>
						<ListItem divider>Admin to manage your polls and see the results</ListItem>
						<ListItem divider>
							<ListItemText>
								And it's <strong>FREE</strong>. <strong>Forever!</strong>
							</ListItemText>
						</ListItem>
					</List>
				</Container>
			</Grid>
			<Grid item align="center">
				<Container>
					<p className="text-center">
						<Link to="/admin/poll" className={classes.link}>
							<Button variant="contained" color="secondary">
								Create your first poll now!
							</Button>
						</Link>
					</p>
				</Container>
			</Grid>
		</Grid>
	);
};

export default About;
