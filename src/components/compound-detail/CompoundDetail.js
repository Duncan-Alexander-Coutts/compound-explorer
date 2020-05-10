import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Grid,
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
          title={props.compound.molecularFormula}
          subheader={`ID: ${props.compound.id}`}
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
              value={props.compound.molecularWeight}
            />
            <MeasurementDisplay title="ALogP" value={props.compound.aLogP} />
            <MeasurementDisplay title="Rings" value={props.compound.numRings} />
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
      {/* <CardContent className={classes.assayResultsContainer}>
        <AssayResults results={props.compound.assayResults} />
      </CardContent> */}
    </Card>
  );
};

CompoundDetail.propTypes = {
  compound: PropTypes.object,
};

export default CompoundDetail;
