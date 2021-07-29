import React from "react";

import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Footer from "../footer/Footer";
import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Services = ({ NavColor }) => {
  const classes = useStyles();

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
            Services
          </Typography>
        </Container>
      </div>
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

export default Services;
