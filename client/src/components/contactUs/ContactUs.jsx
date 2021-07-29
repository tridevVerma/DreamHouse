import React from "react";

import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Footer from "../footer/Footer";
import { useStyles } from "./style";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ContactUs = ({ NavColor }) => {
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
            Contact Us
          </Typography>
        </Container>
      </div>

      <div className="container my-5">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{}}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Name Here.."
                    type="text"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Email Here.."
                    type="email"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Website Here.."
                    type="url"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Subject Here.."
                    type="text"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Your Message Here.."
                    multiline
                    rows={6}
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                    style={{ marginBottom: "0rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    className={classes.myBtn}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              border: "2px solid #ddd",
            }}
          >
            <iframe
              title="Saket Metro-Station Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.639474401219!2d77.19931971542744!3d28.520492795893027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b1a0c6336b%3A0xdd65ced276c9866c!2ssaket%20metro%20station!5e0!3m2!1sen!2sin!4v1627420900331!5m2!1sen!2sin"
              style={{ border: "0px", width: "100%", height: "100%" }}
              allowFullScreen={""}
              loading="lazy"
            />
          </Grid>
        </Grid>
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

export default ContactUs;
