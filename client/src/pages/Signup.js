import React, { useState } from "react";
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
  FormHelperText,
} from "@material-ui/core";
import { register } from "../store/utils/thunkCreators";

import { LinearGradientBanner } from '../components';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  bannerContainer: {
    minWidth: "300px",
    width: "35vw",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    height: "100%",
  },
  formContainer: {
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "100vw"
    },
    height: "100%",
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
  headerWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  loginText: {
    marginBottom: "30px"
  },
  loginButton: {
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
  },
  inputs: {
    width: "70vw",
    display: "flex",
    justifyContent: "center"
  }
}));

const Login = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center" style={{ height: "100%" }}>
      <Box className={classes.wrapper}>
        <Box className={classes.bannerContainer}>
          <LinearGradientBanner />
        </Box>
        <Box className={classes.formContainer}>
          <Grid container item justify="flex-end" className={classes.headerWrapper}>
            <Typography variant="body1" noWrap className={classes.descriptionTexts}>Need to log in?</Typography>
            <Button color="primary" size="large" className={classes.loginButton} onClick={() => history.push("/login")}>Login</Button>
          </Grid>
          <form onSubmit={handleRegister}>
            <Grid container item className={classes.form}>
                <Typography className={classes.loginText} variant="h5">Create an account.</Typography>
              <Grid className={classes.inputs}>
                <FormControl margin="normal" required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                    InputLabelProps={{ required: false }}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.inputs}>
                <FormControl margin="normal" required>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                    InputLabelProps={{ required: false }}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.inputs}>
                <FormControl margin="normal" required error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                    InputLabelProps={{ required: false }}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid className={classes.inputs}>
                <FormControl margin="normal" required error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                    InputLabelProps={{ required: false }}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Button type="submit" variant="contained" size="large" className={classes.submitButton}>
                Create
            </Button>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
