import Typography from '@mui/material/Typography';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const StyledTypography = styled(Typography)({
	position: 'absolute',
	top: '15px',
});

export const StyledForm = styled('form')({
	marginTop: '30px',
});

export const StyledDiv = styled('div')({
	marginTop: '20px',
	marginBottom: '20px',
});

export const StyledButtonsDiv = styled('div')({
	textAlign: 'right',
});

export const StyledCancelButton = styled(Button)({
	marginRight: '10px',
});

export const StyledTextField = styled(TextField)({
	width: '100%',
});

export const StyledDatePicker = styled(DatePicker)({
	color: 'red',
	border: '1px solid red',
});

export const StyledError = styled('span')({
	color: 'red',
	fontSize: '.8rem',
});

export const useStyles = makeStyles({
	mobileDateTimeRender: {
  	display: 'block',
  	'& div': {
  		width: '100%',
  		marginBottom: '10px',
  	},
  },
  mobileDateTimeHide: {
  	display: 'none',
  },
  desktopDateTimeRender: {
  	display: 'block',
  	'& div': {
  		marginBottom: '10px',
  	},
  },
  desktopDateTimeHide: {
  	display: 'none',
  },
});
