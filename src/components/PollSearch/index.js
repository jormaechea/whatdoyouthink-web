import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	form: {
		textAlign: 'center',
		marginBottom: '20px'
	},
	input: {
		fontSize: '55px',
		letterSpacing: '4px',
		maxWidth: '330px',
		marginBottom: '20px',
		'& input': {
			textAlign: 'center'
		}
	}
}));

const inputProps = {
	required: true,
	minLength: 6,
	maxLength: 6
};

const PollSearch = () => {

	const classes = useStyles();

	const [pollId, setPollId] = useState('');

	const history = useHistory();

	const goToPoll = event => {

		event.preventDefault();

		if(pollId.trim() !== '') {
			history.push(`/poll/${pollId}`);
			setPollId('');
		}
	}

	return (
		<form autoComplete="off" onSubmit={goToPoll} className={classes.form}>
			<Box>
				<FilledInput
					type="text"
					className={classes.input}
					value={pollId}
					onChange={e => setPollId(e.target.value)}
					color="secondary"
					inputProps={inputProps}
				/>
			</Box>
			<Box>
				<Button
					variant="contained"
					color="secondary"
					type="submit">
						Go to Poll!
				</Button>
			</Box>
		</form>
	);
};

export default PollSearch;
