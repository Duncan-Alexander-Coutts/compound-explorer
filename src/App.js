import "./App.css";
import { Box } from "@material-ui/core";

import React, { useState } from "react";
import CompoundTable from "./components/CompoundTable";
import CompoundScatterChart from "./components/CompoundScatterChart";

import compounds from "./data/compounds.json";

function App() {
  const [selectedCompound, setSelectedCompound] = useState();

  return (
    <div className="App" style={{ flexDirection: "row" }}>
      <Box width={selectedCompound ? "75%" : "100%"} height="100%">
        <Box height="50%">
          <CompoundScatterChart
            selectedCompound={selectedCompound}
            onCompoundClick={setSelectedCompound}
            compounds={compounds}
          />
        </Box>
        <Box style={{ overflow: "auto" }} height="50%">
          <CompoundTable
            onCompoundClick={setSelectedCompound}
            selectedCompound={selectedCompound}
            compounds={compounds}
          />
        </Box>
      </Box>
      {selectedCompound && <Box>Hello</Box>}
    </div>
  );
}

export default App;
