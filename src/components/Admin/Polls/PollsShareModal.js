import React, { useState, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

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

const PollsTableRow = ({
	show,
	handleClose,
	poll
}) => {

	const [showCopyTooltop, setShowCopyTooltop] = useState(false);
	const target = useRef(null);

	const handleLinkFocus = async event => {
		const copied = await tryToCopyToClipboard(event);
		if(copied) {
			setShowCopyTooltop(true);
			setTimeout(() => setShowCopyTooltop(false), 2000);
		}
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Share {poll ? poll.title : ''}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center">
				{poll ? (
					<>
						<QRCode
							value={`${window.location.origin}/poll/${poll.id}?utm_source=share&utm_medium=qr&utm_campaign=user_share`}
							renderAs="svg"
							size={192}
							className="mb-5"
						/>
						<Form.Control
							value={`${window.location.origin}/poll/${poll.id}?utm_source=share&utm_medium=url&utm_campaign=user_share`}
							ref={target}
							onFocus={handleLinkFocus}
							readOnly
						/>
						<Overlay
							target={target.current}
							show={showCopyTooltop}
							placement="top"
						>
							<Tooltip>Copied to clipboard</Tooltip>
						</Overlay>
					</>
				) : null}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PollsTableRow;
