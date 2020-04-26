import "./App.css";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import CompoundTable from "./components/CompoundTable";
import CompoundScatterChart from "./components/CompoundScatterChart";

import compounds from "./data/compounds.json";
import CompoundDetail from "./components/CompoundDetail";
import { blue, deepPurple, orange, deepOrange } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
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

const useStyles = makeStyles((theme) => ({
  appRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  masterContainer: {
    minWidth: 0,
    flex: 1,
  },
  masterContentItemContainer: {
    height: "50%",
  },
  detailContentContainer: {
    width: theme.spacing(75),
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  const [selectedCompound, setSelectedCompound] = useState();

  useEffect(() => {
    setSelectedCompound(compounds[0]);
  }, []);

  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className={classes.appRoot}>
        <div className={classes.masterContainer}>
          <div className={classes.masterContentItemContainer}>
            <CompoundScatterChart
              selectedCompound={selectedCompound}
              onCompoundClick={setSelectedCompound}
              compounds={compounds}
            />
          </div>
          <div className={classes.masterContentItemContainer}>
            <CompoundTable
              onCompoundClick={setSelectedCompound}
              selectedCompound={selectedCompound}
              compounds={compounds}
            />
          </div>
        </div>
        {selectedCompound && (
          <div className={classes.detailContentContainer}>
            <CompoundDetail compound={selectedCompound} />
          </div>
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
