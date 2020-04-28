import React from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

//TODO: Helper, test
const formatResult = (result) =>
  `${result.result} ${result.operator} ${result.value}${result.unit}`;

const AssayResults = (props) => {
  return (
    <>
      <Typography variant="h6">Assay results</Typography>
      <TableContainer square component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Target</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.results.map((result) => (
              <TableRow key={result.result_id}>
                <TableCell>{result.target}</TableCell>
                <TableCell>{formatResult(result)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

AssayResults.propTypes = {
  results: PropTypes.array,
};

export default AssayResults;
