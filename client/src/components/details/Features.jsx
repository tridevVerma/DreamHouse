import React from "react";
import { Container, Box, Typography, Grid, Checkbox } from "@material-ui/core";
import { useStyles } from "./style";

const featuresData = [
  "air conditioning",
  "pets allow",
  "window covering",
  "swimming pool",
  "free WIFI",
  "central heating",
  "gym",
  "car parking",
  "spa & massage",
  "alarm",
  "near metro station",
];
const Features = () => {
  const classes = useStyles();
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "#002247" }}>
        Features
      </Typography>

      <hr style={{ color: "#999", height: "1px" }} />

      <Grid container>
        <Grid item md={4} sm={6} xs={12}>
          {featuresData.slice(0, 4).map((feature, index) => {
            return (
              <Box key={index} className="d-flex align-items-center">
                <Checkbox
                  defaultChecked
                  style={{ color: "#3454d1" }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textStyle}
                >
                  {feature}
                </Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          {featuresData.slice(4, 8).map((feature, index) => {
            return (
              <Box key={index} className="d-flex align-items-center">
                <Checkbox
                  defaultChecked
                  style={{ color: "#3454d1" }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textStyle}
                >
                  {feature}
                </Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          {featuresData.slice(8).map((feature, index) => {
            return (
              <Box key={index} className="d-flex align-items-center">
                <Checkbox
                  defaultChecked
                  style={{ color: "#3454d1" }}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textStyle}
                >
                  {feature}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
