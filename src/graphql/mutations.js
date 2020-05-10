/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompound = /* GraphQL */ `
  mutation CreateCompound(
    $input: CreateCompoundInput!
    $condition: ModelCompoundConditionInput
  ) {
    createCompound(input: $input, condition: $condition) {
      id
      smiles
      molecularWeight
      aLogP
      molecularFormula
      numRings
      image
      assayResults {
        items {
          id
          target
          result
          operator
          value
          unit
          compoundID
        }
        nextToken
      }
    }
  }
`;
export const updateCompound = /* GraphQL */ `
  mutation UpdateCompound(
    $input: UpdateCompoundInput!
    $condition: ModelCompoundConditionInput
  ) {
    updateCompound(input: $input, condition: $condition) {
      id
      smiles
      molecularWeight
      aLogP
      molecularFormula
      numRings
      image
      assayResults {
        items {
          id
          target
          result
          operator
          value
          unit
          compoundID
        }
        nextToken
      }
    }
  }
`;
export const deleteCompound = /* GraphQL */ `
  mutation DeleteCompound(
    $input: DeleteCompoundInput!
    $condition: ModelCompoundConditionInput
  ) {
    deleteCompound(input: $input, condition: $condition) {
      id
      smiles
      molecularWeight
      aLogP
      molecularFormula
      numRings
      image
      assayResults {
        items {
          id
          target
          result
          operator
          value
          unit
          compoundID
        }
        nextToken
      }
    }
  }
`;
export const createAssayResult = /* GraphQL */ `
  mutation CreateAssayResult(
    $input: CreateAssayResultInput!
    $condition: ModelAssayResultConditionInput
  ) {
    createAssayResult(input: $input, condition: $condition) {
      id
      target
      result
      operator
      value
      unit
      compoundID
      compound {
        id
        smiles
        molecularWeight
        aLogP
        molecularFormula
        numRings
        image
        assayResults {
          nextToken
        }
      }
    }
  }
`;
export const updateAssayResult = /* GraphQL */ `
  mutation UpdateAssayResult(
    $input: UpdateAssayResultInput!
    $condition: ModelAssayResultConditionInput
  ) {
    updateAssayResult(input: $input, condition: $condition) {
      id
      target
      result
      operator
      value
      unit
      compoundID
      compound {
        id
        smiles
        molecularWeight
        aLogP
        molecularFormula
        numRings
        image
        assayResults {
          nextToken
        }
      }
    }
  }
`;
export const deleteAssayResult = /* GraphQL */ `
  mutation DeleteAssayResult(
    $input: DeleteAssayResultInput!
    $condition: ModelAssayResultConditionInput
  ) {
    deleteAssayResult(input: $input, condition: $condition) {
      id
      target
      result
      operator
      value
      unit
      compoundID
      compound {
        id
        smiles
        molecularWeight
        aLogP
        molecularFormula
        numRings
        image
        assayResults {
          nextToken
        }
      }
    }
  }
`;
