import { deepPurple } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: deepPurple,
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 0,
      },
    },
    MuiTableHead: {
      root: {
        borderRadius: 0,
      },
    },
  },
});
