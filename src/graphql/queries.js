/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompound = /* GraphQL */ `
  query GetCompound($id: ID!) {
    getCompound(id: $id) {
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
export const listCompounds = /* GraphQL */ `
  query ListCompounds(
    $filter: ModelCompoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAssayResult = /* GraphQL */ `
  query GetAssayResult($id: ID!) {
    getAssayResult(id: $id) {
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
export const listAssayResults = /* GraphQL */ `
  query ListAssayResults(
    $filter: ModelAssayResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssayResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
