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
