import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  hover: {
    cursor: "pointer",
    fill: theme.palette.secondary.light,
    r: theme.spacing(),
  },
  selected: {
    fill: theme.palette.secondary.main,
    r: theme.spacing(1.5),
  },
}));

/*
    I have made use of the Nivo library's scatter chart here. It did not
    support the notion of selecting an plotted item out of the box, therefore 
    I have added that feature here in my wrapper.
*/
const CompoundScatterChart = (props) => {
  const chartRoot = useRef();
  const classes = useStyles();
  const scaleProperties = { type: "linear", min: "auto", max: "auto" };

  /**
   * TODO: Test
   * Chart component requires data to be in a 'group' and each datum have 'x' and 'y' values.
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
            /* This field may look like repeated data, however, on click the chart 
               does not expose the 'id' field as expected */
            compound_id: compound.compound_id,
          })),
        },
      ];
    }
  };

  useEffect(() => {
    const highlightCompoundOnChart = () => {
      /* Whenever the selected compound has changed via the props
       * this will fire in order to reconcile that change visually
       * by 'de-selecting' all plotted points and 'selecting' the
       * compound as given in props.
       *
       * Note: The chart uses SVG via d3 therefore I was able to
       * find the desired SVG circle and apply or remove a 'selected' class
       * for highlighting to the user.
       */

      chartRoot.current.querySelectorAll("circle").forEach((element, index) => {
        const selectedIndex = props.compounds.findIndex(
          (compound) =>
            compound.compound_id === props.selectedCompound?.compound_id
        );
        if (index === selectedIndex) {
          element.classList.add(classes.selected);
        } else {
          element.classList.remove(classes.selected);
        }
      });
    };
    highlightCompoundOnChart();
  }, [classes.selected, props.compounds, props.selectedCompound]);

  //TODO: test
  const normaliseSelection = (seriesItem) =>
    props.compounds.find(
      (compound) => compound.compound_id === seriesItem.data.compound_id
    );

  const onCompoundClick = (seriesItem) =>
    props.onCompoundClick &&
    props.onCompoundClick(normaliseSelection(seriesItem));

  const onPointMouseEnter = (_data, event) =>
    event.target.classList.add(classes.hover);

  const onPointMouseLeave = (_data, event) =>
    event.target.classList.remove(classes.hover);

  return (
    <div className={classes.root} ref={chartRoot}>
      <ResponsiveScatterPlot
        onClick={onCompoundClick}
        colors={{ scheme: "dark2" }}
        data={formatCompoundData()}
        //Unfortunately these margins cannot be in CSS
        margin={{ top: 60, right: 90, bottom: 70, left: 90 }}
        xScale={scaleProperties}
        yScale={scaleProperties}
        //Ensures the chart reflects points that overlapping
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
        onMouseEnter={onPointMouseEnter}
        onMouseLeave={onPointMouseLeave}
      />
    </div>
  );
};

CompoundScatterChart.propTypes = {
  compounds: PropTypes.array.isRequired,
  selectedCompound: PropTypes.object,
  onCompoundClick: PropTypes.func,
};

export default CompoundScatterChart;
