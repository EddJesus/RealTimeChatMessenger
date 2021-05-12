import React from "react";
import bannerImage from "../../assets/bg-img.png";
import ChatIcon from "../../assets/ChatIcon.jsx";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: "100%",
    width: "35vw",
    minWidth: "300px",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    backgroundImage: `linear-gradient(to top, rgba(134, 185, 255, 0.85),rgba(58, 141, 255, 0.85) ), url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  }, 
  bannerText :{
    color: "white",
    marginTop: "20px",
  }
}));

const LinearGradientBanner = (props) => {
  const classes = useStyles();

  if (props.width === 'xs') {
    return <div />;
  }

  return (
    <Box className={classes.wrapper}>
      <ChatIcon />
      <Typography variant={props.width === 'md' ? "h5" : "h4"} className={classes.bannerText}>
        Converse with anyone <br />
        with any language
      </Typography>
    </Box>
  );
};

export default withWidth()(LinearGradientBanner);
