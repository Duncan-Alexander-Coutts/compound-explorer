export const formatCompoundsForScatterChart = (compounds) => {
  if (compounds && compounds.length > 0) {
    //Nivo chart requires a top level group item
    return [
      {
        id: "compounds",
        data: compounds.map((compound) => ({
          id: compound.id,
          x: compound.molecularWeight,
          y: compound.aLogP,
          /* This field may look like repeated data, however, on click the chart 
               does not expose the 'id' field as expected */
          compoundId: compound.id,
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
    (compound) => compound.id === seriesItem.data.compoundId
  );
};
