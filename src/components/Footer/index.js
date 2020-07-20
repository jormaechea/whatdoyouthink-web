import React from 'react';
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

import Emoji from 'a11y-react-emoji';

const useStyles = makeStyles(theme => ({
	footer: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		paddingTop: '10px',
		paddingBottom: '10px',
		backgroundColor: theme.palette.primary.dark
	},
	box: {
		width: '50%'
	},
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.action.active,
			textDecoration: 'none'
		}
	},
	noWrap: {
		whiteSpace: 'nowrap'
	}
}));

const Footer = () => {

	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<Container>
				<Grid container>
					<Grid item xs={6}>
						<Typography>
							<Link to="/admin/poll" className={classes.link}>
								<small>
									<Emoji symbol="🚀" />{' '}
									Create your own Poll!
								</small>
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography align="right">
							<a href="https://github.com/jormaechea" target="_blank" rel="noopener noreferrer" className={classes.link}>
								<small className="text-muted">
									<span>Made with</span>{' '}
									<Emoji symbol="❤️" label="love" />{' '}
									<span>by</span>{' '}
									<span className={classes.noWrap}>Joaquín Ormaechea</span>
								</small>
							</a>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;