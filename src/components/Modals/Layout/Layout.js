import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
	StyledIcon,
	StyledIconButton,
	StyledModal,
	useStyles,
} from './Layout.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '0 solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export const Layout = ({ open, handleClose, children }) => {
	const smallScreen = useMediaQuery('(max-width:599px)');
	const classes = useStyles();

	return (
		<Modal
	    aria-labelledby="modal-layout"
	    aria-describedby="modal-layout"
	    open={open}
	    onClose={handleClose}
	    closeAfterTransition
	    BackdropComponent={Backdrop}
	    BackdropProps={{
	      timeout: 500,
	    }}>
	    <Fade in={open}>
	      <Box sx={style} className={smallScreen ? classes.responsive : classes.normal}>
	      	<StyledIconButton onClick={() => handleClose()} size="large" aria-label="search" color="inherit">
            <StyledIcon>+</StyledIcon>
          </StyledIconButton>
	        {children}
	      </Box>
	    </Fade>
	  </Modal>
	);
};
