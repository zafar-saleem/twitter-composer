import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)({
	position: 'absolute',
	top: 0,
	right: 0,
});

export const StyledIcon = styled(Icon)({
	transform: 'rotate(45deg)',
});

export const useStyles = makeStyles({
	responsive: {
		maxWidth: '100%',
		position: 'relative',
	},
	normal: {
		
	}
});
