import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CompoundTable from "./components/compound-table/CompoundTable";
import CompoundScatterChart from "./components/compound-scatter-chart/CompoundScatterChart";

import { theme } from "./theme/theme-provider";
import CompoundDetail from "./components/compound-detail/CompoundDetail";

import { API, graphqlOperation } from "aws-amplify";
import { listCompounds } from "./graphql/queries";
import { seedCompounds } from "./seed/seed_service";

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
  const [compounds, setCompounds] = useState([]);
  const [selectedCompound, setSelectedCompound] = useState();

  useEffect(() => {
    //seedCompounds();
    fetchCompounds();
  }, []);

  async function fetchCompounds() {
    const loadedCompounds = await API.graphql(graphqlOperation(listCompounds));
    setCompounds(loadedCompounds.data.listCompounds.items);
  }

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

export default withAuthenticator(App);
