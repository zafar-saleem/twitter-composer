import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Layout } from '../Layout';
import {
	StyledTypography,
	StyledButtonsDiv,
	StyledNoButton,
	StyledWarningIcon,
} from './DeleteModal.styled';
import {
	WARNING_DELETE_MESSAGE,
	DELETE_MESSAGE,
} from '../../../config';

export const DeleteModal = () => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState();

	useEffect(() => {
		window.evts.listen(WARNING_DELETE_MESSAGE, (message) => {
			setMessage(message);
			setOpen(!false);
		});
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Layout
			open={open}
			handleClose={handleClose}>
			<StyledWarningIcon />
			<StyledTypography variant="h6" component="span">
				Delete Warning
			</StyledTypography>
			<Typography variant="body2" color="text.secondary" pt={2} pb={2}>
				Do you really want to delete this message?
			</Typography>
			<StyledButtonsDiv>
			<StyledNoButton onClick={handleClose} variant="outlined">No</StyledNoButton>
			<Button
				onClick={() => {
					window.evts.dispatch(DELETE_MESSAGE, { message })
					handleClose();
				}}
				variant="contained"
				color="error">Yes</Button>
			</StyledButtonsDiv>
		</Layout>
	);
};
