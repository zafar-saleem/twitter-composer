import { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Layout } from '../Layout';
import {
	StyledTypography,
	StyledForm,
	StyledDiv,
	StyledCancelButton,
	StyledButtonsDiv,
	StyledTextField,
	StyledDatePicker,
	StyledError,
	useStyles,
} from './ComposeModal.styled';
import {
	OPEN_MODAL,
	SCHEDULE_MESSAGE,
	EDIT_MESSAGE,
} from '../../../config';

let isEdit = false;
let id = 0;

export const ComposeModal = () => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [error, setError] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [editMessage, setEditMessage] = useState({});
	const smallScreen = useMediaQuery('(max-width:599px)');
	const classes = useStyles();

	useEffect(() => {
		window.evts.listen(OPEN_MODAL, () => {
			setOpen(!false);
		});
	}, []);

	useEffect(() => {
		window.evts.listen(EDIT_MESSAGE, ({ message }) => {
			setIsEdit(true);
			setEditMessage(message);
			setOpen(!false);
		});
	}, []);

	const scheduleMessage = (event) => {
		event.preventDefault();
		const message = event.target.message.value;
		
		if (!validateMessage({ message })) {
			return;
		}

		if (!isEdit) {
			id++;
		}

		window.evts.dispatch(SCHEDULE_MESSAGE, {
			id: isEdit ? editMessage.id : id,
			message,
			date,
			time,
			timestamp: new Date(),
			isEdit,
		});

		setIsEdit(false);
	};

	const validateMessage = ({ message }) => {
		if (!message || !time || !date) {
			setError('All fields are required');
			return false;
		}

		if (date < new Date()) {
			setError('Please choose date in future');
			return false;	
		}
		
		setError('');
		handleClose();
		return true;
	};

	const handleClose = () => {
		setEditMessage(null);
		setOpen(false);
		setError('');
		setIsEdit(false);
	};

	return (
		<Layout
			open={open}
			handleClose={handleClose}>
			<StyledTypography variant="h6">Compose Message</StyledTypography>
			<StyledForm onSubmit={scheduleMessage}>
				{error && (<StyledError>{error}</StyledError>)}
				<StyledDiv>
			    <StyledTextField
					  id="outlined-multiline-static"
					  label="Message"
					  multiline
					  rows={3}
					  autoFocus
					  variant="outlined"
					  name="message"
					  placeholder={`Enter your message here`}
			      defaultValue={editMessage?.message || ''}
					/>
				</StyledDiv>
				<StyledDiv>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<span className={smallScreen ? classes.desktopDateTimeHide : classes.desktopDateTimeRender}>
				      <DatePicker
				      	views={['day']}
				        label="Date"
				        value={date}
				        onChange={(newValue) => {
				        	setDate(newValue);
				        }}
				        renderInput={(params) => <TextField {...params} />}
				      />
			      </span>
			      <span className={smallScreen ? classes.mobileDateTimeRender : classes.mobileDateTimeHide}>
				      <MobileDatePicker
			          label="Date"
			          value={date}
			          onChange={(newValue) => {
			            setDate(newValue);
			          }}
			          renderInput={(params) => <TextField {...params} />}
			        />
		        </span>
		        <span className={smallScreen ? classes.desktopDateTimeHide : classes.desktopDateTimeRender}>
				      <TimePicker
				        label="Time"
				        value={time}
				        onChange={(newValue) => {
				        	setTime(newValue);
				        }}
				        renderInput={(params) => <TextField {...params} />}
				      />
			      </span>
			      <span className={smallScreen ? classes.mobileDateTimeRender : classes.mobileDateTimeHide}>
				      <MobileTimePicker
				        label="Time"
				        value={time}
				        onChange={(newValue) => {
				        	setTime(newValue);
				        }}
				        renderInput={(params) => <TextField {...params} />}
				      />
			      </span>
			    </LocalizationProvider>
				</StyledDiv>
				<StyledButtonsDiv>
					<StyledCancelButton onClick={handleClose} variant="outlined">Cancel</StyledCancelButton>
					<Button type="submit" variant="contained" color="success">
        		{isEdit && `Update` || `Save`}
      		</Button>
				</StyledButtonsDiv>
			</StyledForm>
		</Layout>
	);
};
