import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)({
	position: 'absolute',
	top: '10px',
	left: '60px',
});

export const StyledButtonsDiv = styled('div')({
	textAlign: 'center',
});

export const StyledNoButton = styled(Button)({
	marginRight: '10px',
});

export const StyledWarningIcon = styled(WarningIcon)({
	position: 'absolute',
	top: '14px',
	color: 'red',
});