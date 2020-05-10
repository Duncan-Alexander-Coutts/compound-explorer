import compounds from "./../data/compounds.json";

import { API, graphqlOperation } from "aws-amplify";
import { createCompound, deleteCompound } from "../graphql/mutations";
import { listCompounds } from "../graphql/queries";

export const seedCompounds = async () => {
  const listCurrentCompoundsResult = await API.graphql(
    graphqlOperation(listCompounds)
  );

  if (
    listCurrentCompoundsResult &&
    listCurrentCompoundsResult.data.listCompounds &&
    listCurrentCompoundsResult.data.listCompounds.items &&
    listCurrentCompoundsResult.data.listCompounds.items.length > 0
  ) {
    listCurrentCompoundsResult.data.listCompounds.items.forEach(
      async (compound) => {
        await API.graphql(
          graphqlOperation(deleteCompound, { input: { id: compound.id } })
        );
      }
    );
  }

  compounds.forEach(async (compound) => {
    try {
      await API.graphql(
        graphqlOperation(createCompound, { input: mapCompound(compound) })
      );
    } catch (error) {
      console.error(error);
    }
  });
};

const mapCompound = (compound) => {
  return {
    id: compound.compound_id,
    smiles: compound.smiles,
    molecularWeight: compound.molecular_weight,
    aLogP: compound.ALogP,
    molecularFormula: compound.molecular_formula,
    numRings: compound.num_rings,
    image: compound.image,
    // assayResults: mapAssayResults(compound.assay_results),
  };
};

const mapAssayResults = (assayResults) => {
  if (!assayResults && assayResults.length === 0) {
    return null;
  }
  return {
    items: assayResults.map((assayResult) => ({
      id: assayResult.result_id,
      target: assayResult.target,
      result: assayResult.result,
      operator: assayResult.operator,
      value: assayResult.value,
      unit: assayResult.unit,
    })),
  };
};
