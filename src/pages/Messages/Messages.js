import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Message } from './components/Message/';
import {
	useStyles,
} from './Messages.styled';

import {
	SCHEDULE_MESSAGE,
	DELETE_MESSAGE,
} from '../../config';

export const Messages = () => {
	const [messages, setMessages] = useState([]);
	const smallScreen = useMediaQuery('(max-width:599px)');
	const classes = useStyles();
	let unSorted = [];

	useEffect(() => {
		window.evts.listen(SCHEDULE_MESSAGE, (newMessage) => {
			if (!newMessage.isEdit) {
				unSorted.push(newMessage);
			} else {
				const n = updateTweet(newMessage);
				unSorted = n;
			}

			setMessages((prev) => [...sortMessages()]);
		});
	}, []);

	useEffect(() => {
		window.evts.listen(DELETE_MESSAGE, (message) => {
			const msgs = deleteTweet(message);
			setMessages(msgs);
		});
	}, []);

	const sortMessages = () => (
		unSorted.sort((a, b) => {
		  return new Date(a.date.getTime()) - new Date(b.date.getTime());
		})
	);

	const updateTweet = (editableMessage) => {
		return unSorted.map(message => {
			if (message.id === editableMessage.id) {
				message['message'] = editableMessage.message;
				message['date'] = editableMessage.date;
				message['time'] = editableMessage.time;
			}
			return message;
		});
	};

	const deleteTweet = (deletableMessage) => {
		return unSorted = unSorted.filter((message) => {
			if (message.id !== deletableMessage.message.message.id) {
				return message;
			}
		});
	};

	return (
		<Container maxWidth="lg">
			{messages?.length > 0 && (
				<Typography variant="h5" pt={5}>Messages</Typography>
			)}
			<Grid
				container
				spacing={2}
				className={smallScreen ? classes.responsive : classes.normal}>
				<Message messages={messages} />
			</Grid>
		</Container>
	);
};
