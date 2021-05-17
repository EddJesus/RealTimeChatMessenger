import React, {useState} from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  wrapperPreview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unreadMessage: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: -0.17,
  },
  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  const currentUser = props.user || {}

  let unread = 0;

  conversation.messages.map(message => {

    if (message.senderId !== currentUser.id) {
      if (message.read === false) {
        unread += 1;
      }
    }

  })

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={unread > 0 ? classes.unreadMessage : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box className={classes.wrapperPreview}>
        {unread !== 0 ?
          (
            <Typography className={classes.notification} >
              {unread}
            </Typography>
          ) :
          <>
          </>
        }
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ChatContent);
