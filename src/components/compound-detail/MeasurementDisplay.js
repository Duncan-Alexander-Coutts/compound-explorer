import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
  },
}));

const MeasurementDisplay = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} xs={4} item>
      <Typography className={classes.title}>{props.title}</Typography>
      <Typography>{props.value}</Typography>
    </Grid>
  );
};

MeasurementDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default MeasurementDisplay;
