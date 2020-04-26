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
import AssayResults from "./AssayResults";

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
  smiles: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(),
  },
  copySmilesButton: {
    marginLeft: theme.spacing(),
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
            <Grid className={classes.measurement} xs={4} item>
              <Typography style={{ fontWeight: "bold" }}>Weight</Typography>
              <Typography>{props.compound.molecular_weight}</Typography>
            </Grid>
            <Grid className={classes.measurement} xs={4} item>
              <Typography style={{ fontWeight: "bold" }}>ALogP</Typography>
              <Typography>{props.compound.ALogP}</Typography>
            </Grid>
            <Grid className={classes.measurement} xs={4} item>
              <Typography style={{ fontWeight: "bold" }}>Rings</Typography>
              <Typography>{props.compound.num_rings}</Typography>
            </Grid>
            <Grid
              className={`${classes.measurement} ${classes.smiles}`}
              xs={12}
              item
            >
              <Typography style={{ fontWeight: "bold" }}>Smiles</Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography noWrap>{props.compound.smiles}</Typography>
                <Button className={classes.copySmilesButton} variant="outlined">
                  Copy
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <CardContent style={{ height: "50%", marginLeft: 8, marginRight: 8 }}>
        <AssayResults results={props.compound.assay_results} />
      </CardContent>
    </Card>
  );
};

CompoundDetail.propTypes = {
  compound: PropTypes.object,
};

export default CompoundDetail;
