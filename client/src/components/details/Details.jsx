import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Footer from "../footer/Footer";
import MainSlider from "./MainSlider";
import SingleLineImageList from "./SingleLineImageList";
import Description from "./Description";
import PropertyDetails from "./PropertyDetails";
import Features from "./Features";
import FloorPlans from "./FloorPlans";
import Location from "./Location";
import { useStyles } from "./style";
import { Container, Typography, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Details = ({ NavColor }) => {
  const details = useSelector((state) => state.detailedProperty.data);
  const classes = useStyles();

  const imageSliderData = [
    details.mainImage,
    details.image1,
    details.image2,
    details.image3,
    details.image4,
  ];

  const imagesListData = [
    {
      img: details.image1,
      title: "Balcony",
    },
    {
      img: details.image2,
      title: "Kitchen",
    },
    {
      img: details.image3,
      title: "Hall",
    },
    {
      img: details.image4,
      title: "Bedroom",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar NavColor={NavColor} />
      <MyDrawer NavColor={NavColor} />

      <div className={classes.bg}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h1" color="initial" className={classes.title}>
            Property Details
          </Typography>
        </Container>
      </div>

      <Box my={10}>
        <MainSlider
          data={imageSliderData}
          title={details.title}
          type={details.type}
        />
        <SingleLineImageList itemData={imagesListData} />

        <Container className={classes.headingContainer}>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.headingStyle}
            >
              {details.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {details.location}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.headingStyle}
            >
              &#8377; {details.price}
            </Typography>
            <Rating
              name="read-only"
              value={4}
              style={{ color: "#3454d1" }}
              readOnly
            />
          </Box>
        </Container>

        <Description desc={details.desc} />
        <PropertyDetails {...details} />
        <Features />
        <FloorPlans />
        <Location />
      </Box>

      <Footer />
      <button
        className={classes.goToTopBtn}
        style={{ display: NavColor === "white" ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <ExpandLessIcon style={{ color: "white", fontSize: "2rem" }} />
      </button>
    </>
  );
};

export default Details;
