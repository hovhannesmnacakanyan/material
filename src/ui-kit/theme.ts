import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: 4,
  shape: { borderRadius: 4 },
  palette: {
    primary: {
      main: "#d54",
      light: "#fff",
      dark: "#000",
      contrastText: "#ff0",
    },
  },
});
