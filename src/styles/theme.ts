import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileP: true;
    mobileL: true;
    tablet: true;
    desktopS: true;
    desktopM: true;
    desktopL: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#F2F2F2",
      dark: "#505050",
      contrastText: "#C3C3C3",
    },
    background: {
      default: "#070B30",
    },
    divider: "rgba(255, 255, 255, 0.2)",
  },
  breakpoints: {
    values: {
      mobileP: 0,
      mobileL: 448,
      tablet: 728,
      desktopS: 960,
      desktopM: 1280,
      desktopL: 1440,
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h2: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    h3: {
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
});

export default theme;
