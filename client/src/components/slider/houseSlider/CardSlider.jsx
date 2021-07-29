import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { filterByProperties } from "../../../actions/filterByProperties";
import { filterByTag } from "../../../actions/filterByTag";
import Card from "./Card";

import Slider from "react-slick";
import classNames from "classnames";
import { Box, Typography, Hidden, Button, makeStyles } from "@material-ui/core";

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
  myBtn: {
    backgroundColor: "#3454d1",
    color: "#fff",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "#2a43a7",
    },
  },
}));

const CardSlider = ({ heading, subHeading, data, tag }) => {
  const classes = useStyles();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const filterTag = () => {
    dispatch(filterByProperties([`checkedtag${tag}`]));
    dispatch(filterByTag(tag));
    history.push(`/projects/filters`);
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

      <Box className={classes.centerIt}>
        <Button
          onClick={filterTag}
          variant="contained"
          className={classes.myBtn}
        >
          Show All
        </Button>
      </Box>

      <Slider {...settings}>
        {data.map((house, index) => {
          return <Card key={index} house={house} />;
        })}
      </Slider>
    </div>
  );
};

export default CardSlider;
