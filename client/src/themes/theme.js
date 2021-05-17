import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let defaultTheme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans serif",
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        marginTop: "20px",
      }
    }, MuiTextField:{
      root : {
        width: "40vw",
        minWidth: "160px"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: {
      main: "#B0B0B0",
      light: "rgb(245,247,249,1)"
    }
  }
});

export const theme = responsiveFontSizes(defaultTheme);