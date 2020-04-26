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
    props.selectedCompound &&
    props.selectedCompound.compound_id === compound.compound_id;

  return (
    <TableContainer
      ref={tableRoot}
      style={{ maxHeight: "100%" }}
      component={Paper}
      square
    >
      <Table stickyHeader>
        <TableHead ref={tableHeader}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Molecular formula</TableCell>
            <TableCell>Molecular weight</TableCell>
            <TableCell>ALogP</TableCell>
            <TableCell>Rings</TableCell>
            <TableCell>Smiles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.compounds.map((compound) => {
            const isSelected = isCompoundSelected(compound);
            return (
              <TableRow
                hover
                onClick={() => props.onCompoundClick(compound)}
                ref={isSelected ? selectedCompoundElementRef : undefined}
                selected={isSelected}
                key={compound.compound_id}
              >
                <TableCell>
                  <img
                    style={{ height: 60, width: 60 }}
                    src={`../../${compound.image}`}
                  />
                </TableCell>
                <TableCell>{compound.molecular_formula}</TableCell>
                <TableCell>{compound.molecular_weight}</TableCell>
                <TableCell>{compound.ALogP}</TableCell>
                <TableCell>{compound.num_rings}</TableCell>
                <TableCell>{compound.smiles}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompoundTable;
