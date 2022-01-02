import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import { ComposeModal } from '../Modals/ComposeModal';
import { OPEN_MODAL } from '../../config';

export const Appbar = ({ dispatch }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      	<Container maxWidth="lg">
	        <Toolbar>
	          <IconButton
	            size="large"
	            edge="start"
	            color="inherit"
	            aria-label="open drawer"
	            sx={{ mr: 2 }}
	          >
	            <MenuIcon />
	          </IconButton>
	          <Typography
	            variant="h5"
	            noWrap
	            component="div"
	            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
	          >
	          </Typography>
	          <IconButton
	          	onClick={() => window.evts.dispatch(OPEN_MODAL, {})}
	          	size="large"
	          	aria-label="search" 
	          	color="inherit"
	          >
	            <Icon>+</Icon>
	          </IconButton>
	          <IconButton
	            size="large"
	            aria-label="display more actions"
	            edge="end"
	            color="inherit"
	          >
	          </IconButton>
	        </Toolbar>
	        <ComposeModal />
        </Container>
      </AppBar>
    </Box>
	);
}