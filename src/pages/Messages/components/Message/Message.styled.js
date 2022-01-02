import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)({
	position: 'absolute',
	top:  '20%',
	left: '65%',
	width:  '50%',
	transform: 'translate(-50%, -50%)',
});

export const StyledGrid = styled('div')({
	marginTop: '20px',
	marginRight: '20px',
});

export const ScheduledFor = styled(Typography)({
	color: 'grey',
	fontSize: '.8rem',
});

export const StyledMessage = styled(Typography)({
	overflowWrap: 'break-word',
});

export const useStyles = makeStyles({
	responsive: {
		display: 'block',
		maxWidth: '100%',
	},
	normal: {
		
	}
});

