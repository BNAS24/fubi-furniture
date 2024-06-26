"use client";
import { createTheme } from "@mui/material/styles";
// Supports weights 100-900
import '@fontsource-variable/inter';

const mainWhite = "#F2F1F1";
const mainGreen = "#668C14";
const lightGreen = "#87B91A";
const mainTeal = "#324359";
const commonBlack = "#000";
const commonWhite = "#FFF";
const backgroundTransparent = "rgba(0, 0, 0, 0.5)";

export const theme = createTheme({
  palette: {
    primary: {
      main: mainGreen,
      light: lightGreen,
      contrastText: mainWhite,
    },
    secondary: {
      main: mainTeal,
      contrastText: mainWhite,
    },
    common: {
      black: commonBlack,
      white: commonWhite,
    },
    background: {
      paper: backgroundTransparent,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
