import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./style";
const PropertyDetails = ({
  propertyID,
  price,
  area,
  bedrooms,
  bathrooms,
  rooms,
  garage,
  year,
  type,
  status,
}) => {
  const classes = useStyles();
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "#002247" }}>
        Property Details
      </Typography>

      <hr style={{ color: "#999", height: "1px" }} />

      <Grid container>
        <Grid item sm={6} xs={12}>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Property ID : </span>
            {propertyID}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Price : </span>
            {price}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Property Size : </span>
            {area} Sq Ft
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Bedrooms : </span>
            {bedrooms}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Bathrooms : </span>
            {bathrooms}{" "}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Rooms : </span>
            {rooms}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Garage : </span>
            {garage}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Year Built : </span>
            {year}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Property Type : </span>
            {type}
          </Typography>
          <Typography
            variant="body1"
            className={classes.textStyle}
            gutterBottom
          >
            <span style={{ fontWeight: "bold" }}>Property Status : </span>For{" "}
            {status}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyDetails;
