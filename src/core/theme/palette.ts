import { PaletteMode } from "@mui/material";

const palette = {
  grey: {
    "50": "#ECEFF1",
    "100": "#D4D5D8",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
    "500": "#64768B",
    "600": "#546E7A",
    "700": "#47586C",
    "800": "#37474F",
    "900": "#263238",
  },
};

export const darkPalette = {
  ...palette,
  contrastThreshold: 4.5,
  mode: "dark" as PaletteMode,
  error: {
    main: "#cc0033",
  },
  info: {
    main: "#1f3c68",
  },
  primary: {
    main: "#007f96",
    contrastText: "#D4D5D8",
  },
  secondary: {
    main: "#D4D5D8",
    contrastText: "#007f96",
  },
  success: {
    main: "#99CC66",
  },
  warning: {
    main: "#F3BA1A",
  },
  text: {
    primary: palette.grey[50],
    secondary: palette.grey[100],
    disabled: palette.grey[300],
  },
  divider: palette.grey[700],
  background: {
    paper: palette.grey[900],
    default: palette.grey[800],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[800],
  },
};

export const lightPalette = {
  ...palette,
  contrastThreshold: 3,
  mode: "light" as PaletteMode,
  error: {
    main: "#cc0033",
  },
  info: {
    main: "#1f3c68",
  },
  primary: {
    main: "#007f96",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#FFF",
    contrastText: "#007f96"
  },
  success: {
    main: "#99CC66",
  },
  warning: {
    main: "#F3BA1A",
  },
  text: {
    primary: palette.grey[700],
    secondary: palette.grey[500],
    disabled: palette.grey[300],
  },
  divider: palette.grey[100],
  background: {
    paper: "#FFF",
    default: palette.grey[50],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[50],
  },
};
