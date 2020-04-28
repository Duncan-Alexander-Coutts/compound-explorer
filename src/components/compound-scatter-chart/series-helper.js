export const formatCompoundsForScatterChart = (compounds) => {
  if (compounds && compounds.length > 0) {
    //Nivo chart requires a top level group item
    return [
      {
        id: "compounds",
        data: compounds.map((compound) => ({
          id: compound.compound_id,
          x: compound.molecular_weight,
          y: compound.ALogP,
          /* This field may look like repeated data, however, on click the chart 
               does not expose the 'id' field as expected */
          compound_id: compound.compound_id,
        })),
      },
    ];
  }
  return [];
};

export const findCompoundBySeriesItem = (seriesItem, compounds) => {
  if (!seriesItem) {
    throw new Error("seriesItem must be defined");
  } else if (!seriesItem.data) {
    throw new Error("seriesItem malformed, requires data property");
  } else if (!Array.isArray(compounds)) {
    throw new Error("compounds must be a defined array");
  }

  return compounds.find(
    (compound) => compound.compound_id === seriesItem.data.compound_id
  );
};
