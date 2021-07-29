import React from "react";
import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Filter from "./Filter";
import { useStyles } from "./style";

// import { data } from "../../asset/allPropertiesData";
import Card from "./Card";

import { Container, Typography, Grid, Box } from "@material-ui/core";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Projects = ({ NavColor, title, data }) => {
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
            {title}
          </Typography>
        </Container>
      </div>

      <div className="container my-5">
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Filter />
          </Grid>
          <Grid item md={9} xs={12}>
            <Grid container spacing={4}>
              {data.length > 0 ? (
                data.map((house, index) => {
                  return (
                    <Grid item lg={6} xs={12} key={index}>
                      <Card house={house} className={classes.card} />
                    </Grid>
                  );
                })
              ) : (
                <Box className={classes.notFoundBox}>
                  <Typography
                    variant="h2"
                    align="center"
                    className={classes.notFoundText}
                  >
                    Sorry....😢
                  </Typography>
                  <Typography
                    variant="h2"
                    align="center"
                    className={classes.notFoundText}
                  >
                    There are no Properties Available to your corresponding
                    filtered searches
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
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

export default Projects;
