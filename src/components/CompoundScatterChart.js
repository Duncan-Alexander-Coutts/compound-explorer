import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
// import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

//Get note in here about the library not supporting selection OOTB but I have added it, hooking it into the theme of material-ui
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    hover: {
      cursor: "pointer",
      fill: theme.palette.secondary.light,
      r: theme.spacing(),
    },
    selected: {
      fill: theme.palette.secondary.main,
      r: theme.spacing(1.5),
    },
  };
});

const CompoundScatterChart = (props) => {
  // const { t } = useTranslation()
  const chartRoot = useRef();
  const classes = useStyles();

  /**
   * Char component requires data to be in a 'group' and each datum have 'x' and 'y' values.
   */
  const formatCompoundData = () => {
    const { compounds } = props;
    if (compounds && compounds.length > 0) {
      return [
        {
          id: "compounds",
          data: compounds.map((compound) => ({
            id: compound.compound_id,
            x: compound.molecular_weight,
            y: compound.ALogP,
            /* This fields may look like repeated data, however, on click the chart 
               does not expose the 'id' field as expected */
            compound_id: compound.compound_id,
          })),
        },
      ];
    }
  };

  useEffect(() => {
    chartRoot.current.querySelectorAll("circle").forEach((element, index) => {
      if (props.selectedCompound) {
        const selectedIndex = props.compounds.findIndex(
          (compound) => compound.compound_id === props.selectedCompound
        );
        if (index === selectedIndex) {
          element.classList.add(classes.selected);
        } else {
          element.classList.remove(classes.selected);
        }
      }
    });
  }, [classes.selected, props.selectedCompound]);

  //Put into helper
  const normaliseSelection = (seriesItem) => seriesItem.data.compound_id;

  const onCompoundClick = (seriesItem) =>
    props.onCompoundClick &&
    props.onCompoundClick(normaliseSelection(seriesItem));

  return (
    <div style={{ width: "100%", height: "100%" }} ref={chartRoot}>
      <ResponsiveScatterPlot
        onClick={onCompoundClick}
        theme={{ fontFamily: "Roboto" }}
        data={formatCompoundData()}
        margin={{ top: 60, right: 90, bottom: 70, left: 90 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        blendMode="multiply"
        axisBottom={{
          legend: "Molecular weight",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          legend: "ALogP",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        useMesh={false}
        onMouseEnter={(_data, event) => {
          event.target.classList.add(classes.hover);
        }}
        onMouseLeave={(_data, event) => {
          event.target.classList.remove(classes.hover);
        }}
      />
    </div>
  );
};

CompoundScatterChart.propTypes = {
  compounds: PropTypes.array.isRequired,
  selectedCompound: PropTypes.number,
  onCompoundClick: PropTypes.func,
};

export default CompoundScatterChart;
