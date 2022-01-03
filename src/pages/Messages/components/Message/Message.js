import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteModal } from '../../../../components/Modals/DeleteModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
	StyledTypography,
	StyledGrid,
	ScheduledFor,
	StyledMessage,
	useStyles,
} from './Message.styled';
import moment from 'moment';

import {
	EDIT_MESSAGE,
	WARNING_DELETE_MESSAGE,
} from '../../../../config';

export const Message = ({ messages }) => {
	const smallScreen = useMediaQuery('(max-width:599px)');
	const classes = useStyles();

	return (
		<>
			{
				messages.length > 0 && messages?.map((message, index) => (
					<StyledGrid
						item="true" xs={3}
						key={`${message.timestamp}-${index}`}
						className={smallScreen ? classes.responsive : classes.normal}>
			      <Card
			      	sx={{ maxWidth: 345 }}
			      	className={smallScreen ? classes.responsive : classes.normal}>
				      <CardHeader
				        avatar={
				          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				            R
				          </Avatar>
				        }
				        action={
				        	<>
					          <IconButton
					          	onClick={() => window.evts.dispatch(WARNING_DELETE_MESSAGE, { message })}
					          	aria-label="settings">
					            <DeleteIcon />
					          </IconButton>
					          <IconButton
						        	onClick={() => window.evts.dispatch(EDIT_MESSAGE, { message })}
						        	aria-label="share">
						          <EditIcon />
						        </IconButton>
				          </>
				        }
				        title="Admin"
				        subheader={`Saved on ${moment(message.timestamp).format("DD-MM-YYYY").toString()}`}
				      />
				      <CardMedia
				        component="img"
				        height="194"
				        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
				        alt="placeholder-image"
				      />
				      <CardContent>
				        <StyledMessage variant="body2" color="text.secondary">{message.message}</StyledMessage>
				      </CardContent>
				      <CardActions disableSpacing>
				        <ScheduledFor variant="body2" color="text.secondary">
				        	Scheduled for {moment(message.date).format("DD-MM-YYYY").toString()} at {moment(message.time).format("hh:mm a").toString()}
				        </ScheduledFor>
				      </CardActions>
				    </Card>
			    </StyledGrid>
				))
			}
			{
				messages.length === 0  && (
					<StyledTypography>No Messages Scheduled yet.</StyledTypography>
				)
			}
			<DeleteModal />
		</>
	);
};
