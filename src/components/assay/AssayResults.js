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

const formatResult = (result) =>
  `${result.result} ${result.operator} ${result.value}${result.unit}`;

const AssayResults = (props) => {
  return (
    <>
      <Typography data-test="root-header" variant="h6">
        Assay results
      </Typography>
      <TableContainer square component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Target</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.results &&
              props.results.map((result) => (
                <TableRow key={result.result_id}>
                  <TableCell data-test="result-target">
                    {result.target}
                  </TableCell>
                  <TableCell data-test="result-text">
                    {formatResult(result)}
                  </TableCell>
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
