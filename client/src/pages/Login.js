import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "../store/utils/thunkCreators";

import { LinearGradientBanner } from '../components';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  bannerContainer:{
    width: "35vw",
    [theme.breakpoints.down("xs")]: {
      width: "0vw"
    },
    height: "100%",
  },
  formContainer: {
    height: "100%",
    width: "65vw",
    [theme.breakpoints.down("xs")]: {
      width: "80vw"
    },
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  form: {
    marginTop: "10%",
    display: "flex",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  registerButton: {
    boxShadow: `0px 0px 5px 5px ${theme.palette.secondary.light}`,
    padding: "15px 25px 15px 25px",
    marginTop: "50px",
    marginLeft: "30px",
    marginRight: "50px"
  },
  descriptionTexts: {
    color: `${theme.palette.secondary.main}`,
    display: 'flex',
    alignItems: "center",
    marginTop: "50px",
  },
  submitButton: {
    backgroundColor: `${theme.palette.primary.main}`,
    padding: "15px 25px 15px 25px",
    minWidth: "150px",
    color: "#FFFF",
    marginTop: "40px"
  }
}));

const Login = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center" style={{height: "100%"}}>
      <Box className={classes.wrapper}>
        <Box container className={classes.bannerContainer}>
          <LinearGradientBanner />
        </Box>
        <Box className={classes.formContainer}>
          <Grid container item justify="flex-end">
            <Typography variant="body1" noWrap className={classes.descriptionTexts}>Don't have an account?</Typography>
            <Button color="primary" size="large" className={classes.registerButton} onClick={() => history.push("/register")}>Create account</Button>
          </Grid>
          <form onSubmit={handleLogin}>
            <Grid container item className={classes.form}>
              <Grid>
              <Typography style={{ marginBottom: "30px" }} variant="h5">Welcome back!</Typography>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
              </Grid>
              <Grid>
                <Button type="submit" variant="contained" size="large" className={classes.submitButton}>
                  Login
              </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
