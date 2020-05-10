/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompound = /* GraphQL */ `
  subscription OnCreateCompound {
    onCreateCompound {
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
export const onUpdateCompound = /* GraphQL */ `
  subscription OnUpdateCompound {
    onUpdateCompound {
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
export const onDeleteCompound = /* GraphQL */ `
  subscription OnDeleteCompound {
    onDeleteCompound {
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
export const onCreateAssayResult = /* GraphQL */ `
  subscription OnCreateAssayResult {
    onCreateAssayResult {
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
export const onUpdateAssayResult = /* GraphQL */ `
  subscription OnUpdateAssayResult {
    onUpdateAssayResult {
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
export const onDeleteAssayResult = /* GraphQL */ `
  subscription OnDeleteAssayResult {
    onDeleteAssayResult {
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
