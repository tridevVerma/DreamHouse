import React from "react";

import AgentNav from "./AgentNav";
import MyDrawer from "../drawer/MyDrawer";
import Footer from "../footer/Footer";

import { useStyles } from "./style";
import { Container, Typography } from "@material-ui/core";

// import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Services = ({ NavColor }) => {
  const classes = useStyles();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <AgentNav NavColor={NavColor} />
      <MyDrawer NavColor={NavColor} />
      <div className={classes.bg}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h1" color="initial" className={classes.title}>
            Agent's Profile
          </Typography>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Services;
