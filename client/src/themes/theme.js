import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let defaultTheme = createMuiTheme({
  typography: {
    fontFamily: "OpenSans - semibold, regular",
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
        minWidth: "400px",
        maxWidth: "600px",
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