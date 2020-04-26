import "./App.css";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import CompoundTable from "./components/CompoundTable";
import CompoundScatterChart from "./components/CompoundScatterChart";

import { theme } from "./theme/theme-provider";
import compounds from "./data/compounds.json";
import CompoundDetail from "./components/CompoundDetail";

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

const App = () => {
  const classes = useStyles();
  const [selectedCompound, setSelectedCompound] = useState();

  return (
    <MuiThemeProvider theme={theme}>
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
};

export default App;
