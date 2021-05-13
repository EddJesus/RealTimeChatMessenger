import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";


const useStyles = makeStyles(() => ({
  root: {

  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {messages.reverse().map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
