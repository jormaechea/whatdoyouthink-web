import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '../../Skeleton';

const useStyles = makeStyles(theme => ({
	gridRow: {
		width: '300px',
		maxWidth: '100%',
		marginBottom: theme.spacing(1)
	},
	formActions: {
		margin: theme.spacing(2, 0)
	},
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.action.active,
			textDecoration: 'none'
		}
	}
}));

const PollForm = ({
	isNew,
	loading,
	saving,
	poll,
	handleChange,
	handleSubmit
}) => {

	const classes = useStyles();

	return (
		<form onSubmit={handleSubmit}>
			<Grid container direction="column" alignItems="center" justify="center" spacing={2}>

				<Grid item className={classes.gridRow}>
					<TextField
						name="title"
						value={poll ? poll.title : ''}
						label="What's you poll title?"
						readOnly={loading || saving}
						onChange={handleChange}
						autoComplete="off"
						color="secondary"
						required
						fullWidth
					/>
				</Grid>

				<Grid item className={classes.gridRow}>
					<TextField
						name="kind"
						value={poll ? poll.kind : ''}
						label="What kind of votes you want to show?"
						readOnly={loading || saving}
						onChange={handleChange}
						color="secondary"
						select
						required
						fullWidth
					>
						<MenuItem value="thumbs">Thumb up / down</MenuItem>
						<MenuItem value="emojis">Happy / angry emoji</MenuItem>
					</TextField>
				</Grid>

				{!loading ? (
					<Grid item className={classes.gridRow}>
						<Grid
							container
							alignItems="center"
							justify="center"
							spacing={2}
							className={classes.formActions}
						>

							<Grid item>
								<Button variant="contained" color="secondary" type="submit" disabled={loading || saving}>
									Save
								</Button>
							</Grid>
							{!saving ? (
								<Grid item>
									<Link to="/admin/poll" className={classes.link}>
										<Button>
											Cancel
										</Button>
									</Link>
								</Grid>
							) : null}
						</Grid>
					</Grid>
				) : (
					<Grid item className={classes.gridRow}>
						<Skeleton variant="rect" width={62} height={38} />
						<Skeleton variant="rect" width={62} height={38} />
					</Grid>
				)}
			</Grid>
		</form>
	);
};

export default PollForm;
