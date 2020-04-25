import React, { useEffect, useRef } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

const CompoundTable = (props) => {
  const tableRoot = useRef();
  const tableHeader = useRef();
  const selectedCompoundElementRef = useRef();

  useEffect(() => {
    if (selectedCompoundElementRef && selectedCompoundElementRef.current) {
      tableRoot.current.scrollTo(
        0,
        selectedCompoundElementRef.current.offsetTop -
          tableHeader.current.offsetHeight
      );
    }
  }, [props.selectedCompound]);

  const isCompoundSelected = (compound) =>
    props.selectedCompound && props.selectedCompound === compound.compound_id;

  return (
    <TableContainer
      ref={tableRoot}
      style={{ maxHeight: "100%" }}
      component={Paper}
    >
      <Table stickyHeader>
        <TableHead ref={tableHeader}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Molecular formula</TableCell>
            <TableCell align="center">Molecular weight</TableCell>
            <TableCell align="center">ALogP</TableCell>
            <TableCell align="center">Rings</TableCell>
            <TableCell>Smiles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.compounds.map((compound) => {
            const isSelected = isCompoundSelected(compound);
            return (
              <TableRow
                hover
                onClick={() => props.onCompoundClick(compound.compound_id)}
                ref={isSelected ? selectedCompoundElementRef : undefined}
                selected={isSelected}
                key={compound.compound_id}
              >
                <TableCell align="left">
                  <img
                    style={{ height: 60, width: 60 }}
                    src={`../../${compound.image}`}
                  />
                </TableCell>
                <TableCell align="center">
                  {compound.molecular_formula}
                </TableCell>
                <TableCell align="center">
                  {compound.molecular_weight}
                </TableCell>
                <TableCell align="center">{compound.ALogP}</TableCell>
                <TableCell align="center">{compound.num_rings}</TableCell>
                <TableCell align="left">{compound.smiles}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompoundTable;
