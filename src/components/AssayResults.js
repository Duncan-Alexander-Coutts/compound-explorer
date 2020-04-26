import React from "react";
import {
  makeStyles,
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

const useStyles = makeStyles((theme) => ({}));

const formatResult = (result) =>
  `${result.result} ${result.operator} ${result.value}${result.unit}`;

const AssayResults = (props) => {
  return (
    <>
      <Typography variant="h6">Assay results</Typography>
      <TableContainer square style={{ maxHeight: "100%" }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Target</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.results.map((result) => {
              return (
                <TableRow key={result.result_id}>
                  <TableCell>{result.target}</TableCell>
                  <TableCell>{formatResult(result)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

AssayResults.propTypes = {};

export default AssayResults;
