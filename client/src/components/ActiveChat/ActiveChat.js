import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Input, Header, Messages } from "./index";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    maxHeight: "100%"
  },
  chatContainer: {
    marginLeft: 41,
    paddingRight: 10,
    display: "flex",
    overflowY: "scroll",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between"
  }
}));

const ActiveChat = (props) => {
  const [conversation, setConversation]= useState({})
  const [messages, updateMessages] = useState([])
  
  const classes = useStyles();

  const body = useRef()

  const { user } = props;

  useEffect(() => {
    if(props.conversation !== undefined){
      setConversation(props.conversation)
      updateMessages(props.conversation.messages)
    }
    // set the scroll to the end
    if (body.current) {
      if (body.current.scrollHeight > body.current.offsetHeight) {
        body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
      }
    }
  }, [props.conversation, messages, conversation]);

  return (
    <Box className={classes.root}>
      {conversation.otherUser && (
        <>
          <Header
            username={conversation.otherUser.username}
            online={conversation.otherUser.online || false}
          />
          <Box ref={body} className={classes.chatContainer}>
            <Messages
              messages={messages}
              otherUser={conversation.otherUser}
              userId={user.id}
            />
          </Box>
          <Input
            otherUser={conversation.otherUser}
            conversationId={conversation.id}
            user={user}
          />
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    conversation:
      state.conversations &&
      state.conversations.find(
        (conversation) => conversation.otherUser.username === state.activeConversation
      )
  };
};

export default connect(mapStateToProps, null)(ActiveChat);
