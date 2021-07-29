import React from "react";
import Slider from "react-slick";

import PeopleCard from "./PeopleCard";
import { data } from "./data";

import classNames from "classnames";
import { Box, Typography, Hidden, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  centerIt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingBox: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardTitle: {
    display: "inline-block",
    fontWeight: "bold",
    marginLeft: "1rem",
    marginRight: "1rem",
    textAlign: "center",
    color: "#002247",
  },
  subHeading: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
}));
const PeopleSlider = ({ heading, subHeading }) => {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Box className={classes.centerIt}>
        <Box className={classNames(classes.centerIt, classes.headingBox)}>
          <Hidden smDown>
            <Box style={{ flexGrow: 1 }}>
              <hr />
            </Box>
          </Hidden>

          <Typography variant="h4" className={classes.cardTitle}>
            {heading}
          </Typography>
          <Hidden smDown>
            <Box style={{ flexGrow: 1 }}>
              <hr />
            </Box>
          </Hidden>
        </Box>
      </Box>

      <Typography
        variant="subtitle1"
        align="center"
        className={classes.subHeading}
      >
        {subHeading}
      </Typography>
      <Slider {...settings}>
        {data.map((info, index) => {
          return <PeopleCard key={index} personInfo={info} />;
        })}
      </Slider>
    </div>
  );
};

export default PeopleSlider;
