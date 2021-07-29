import React from "react";
import Slider from "react-slick";
import { useStyles } from "./style";
import { Container, Box, Avatar, Typography, Hidden } from "@material-ui/core";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        left: "40px",
        display: "block",
        background: "transparent",
        transform: "scale(2.5)",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        right: "40px",
        display: "block",
        background: "transparent",
        transform: "scale(2.5)",
      }}
      onClick={onClick}
    />
  );
}

const MainSlider = ({ data, title, type }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container maxWidth="lg" style={{ position: "relative" }}>
      <Box className={classes.contentBox}>
        <Hidden smDown>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className={classes.large}
          />
        </Hidden>

        <Box>
          <Typography variant="subtitle2" className={classes.type} gutterBottom>
            {type}
          </Typography>
          <Typography variant="h4" className={classes.sliderTitle}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Slider {...settings}>
        {data.map((image, index) => {
          return (
            <div key={index} className={classes.imagesDiv}>
              <img src={image} alt="slider-img" className={classes.images} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default MainSlider;
