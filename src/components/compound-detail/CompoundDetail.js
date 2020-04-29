import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Grid,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import MeasurementDisplay from "./MeasurementDisplay";
import AssayResults from "../assay/AssayResults";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  media: {
    flex: 1,
    backgroundSize: "contain",
  },
  measurementsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  measurement: {
    textAlign: "center",
  },
  smilesContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(),
  },
  smilesTitle: {
    fontWeight: "bold",
  },
  smilesValueContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copySmilesButton: {
    marginLeft: theme.spacing(),
  },
  assayResultsContainer: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
  },
}));

const CompoundDetail = (props) => {
  const classes = useStyles();

  return (
    <Card square className={classes.root}>
      <div className={classes.detailContainer}>
        <CardHeader
          title={props.compound.molecular_formula}
          subheader={`ID: ${props.compound.compound_id}`}
        />
        <CardMedia
          className={classes.media}
          image={`${props.compound.image}`}
          title="Compound structure image"
        />
        <CardContent>
          <Grid justify="space-around" container>
            <MeasurementDisplay
              title="Weight"
              value={props.compound.molecular_weight}
            />
            <MeasurementDisplay title="ALogP" value={props.compound.ALogP} />
            <MeasurementDisplay
              title="Rings"
              value={props.compound.num_rings}
            />
            <Grid
              className={`${classes.measurement} ${classes.smilesContainer}`}
              xs={12}
              item
            >
              <Typography className={classes.smilesTitle}>Smiles</Typography>
              <div className={classes.smilesValueContainer}>
                <Typography noWrap>{props.compound.smiles}</Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <CardContent className={classes.assayResultsContainer}>
        <AssayResults results={props.compound.assay_results} />
      </CardContent>
    </Card>
  );
};

CompoundDetail.propTypes = {
  compound: PropTypes.object,
};

export default CompoundDetail;
