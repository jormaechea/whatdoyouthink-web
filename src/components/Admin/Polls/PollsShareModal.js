import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

import QRCode from 'qrcode.react';

const selectContent = event => event.target.select();

const tryToCopyToClipboard = async event => {

	selectContent(event);

	const content = event.target.value;

	if(navigator.clipboard) {
		try {
			await navigator.clipboard.writeText(content);
			return true;
		} catch(e) {
		}
	}

	if(document.execCommand)
		return document.execCommand('copy');
};

const useStyles = makeStyles(theme => ({
	modal: {
		overflowY: 'auto'
	},
	modalPaper: {
		width: '500px',
		margin: theme.spacing(2, 'auto'),
		padding: theme.spacing(4, 2),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2),
			width: '300px'
		},
		'&:focus': {
			outline: 'none'
		}
	},
	header: {
		width: '100%'
	},
	title: {
		lineHeight: '48px'
	},
	closeButton: {
		marginLeft: 'auto'
	},
	pollId: {
		fontSize: '2rem',
		letterSpacing: '2px'
	}
}));

const PollsTableRow = ({
	show,
	handleClose,
	poll
}) => {

	const classes = useStyles();

	const [showCopyTooltip, setShowCopyTooltip] = useState(false);

	const handleLinkFocus = async event => {
		const copied = await tryToCopyToClipboard(event);
		if(copied) {
			setShowCopyTooltip(true);
			setTimeout(() => setShowCopyTooltip(false), 2000);
		}
	};

	return (
		<Modal
			open={show}
			onClose={handleClose}
			className={classes.modal}
		>
			<Paper className={classes.modalPaper}>
				<Grid container direction="column" alignItems="center" spacing={2}>
					<Grid item className={classes.header}>
						<Grid container>
							<Grid item>
								<Typography variant="h5" className={classes.title}>Share {poll ? poll.title : ''}</Typography>
							</Grid>
							<Grid item className={classes.closeButton}>
								<IconButton onClick={handleClose} variant="link">
									<CloseIcon/>
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Typography className={classes.pollId}>{poll ? poll.id : ''}</Typography>
					</Grid>
					<Grid item>
						<QRCode
							value={poll ? `${window.location.origin}/poll/${poll.id}?utm_source=share&utm_medium=qr&utm_campaign=user_share` : ''}
							renderAs="svg"
							includeMargin={true}
							size={192}
							className="mb-5"
						/>
					</Grid>
					<Grid item>
						<FilledInput
							value={poll ? `${window.location.origin}/poll/${poll.id}?utm_source=share&utm_medium=url&utm_campaign=user_share` : ''}
							onFocus={handleLinkFocus}
							readOnly
						/>
					</Grid>
					<Snackbar
						open={showCopyTooltip}
						message="Copied to clipboard"
					/>
				</Grid>
			</Paper>
		</Modal>
	);
};

export default PollsTableRow;
