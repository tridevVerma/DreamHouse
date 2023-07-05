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
  Box,
  Link,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ContactUs = ({ NavColor }) => {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeSocialIconColor = (event, color) => {
    event.currentTarget.style.backgroundColor = "transparent";
    event.currentTarget.style.color = color;
    event.currentTarget.style.padding = "0.2rem";
  };

  const resetSocialIconColor = (event, color) => {
    event.currentTarget.style.backgroundColor = color;
    event.currentTarget.style.color = "#fff";
    event.currentTarget.style.padding = "0.4rem";
  };

  const socialIcons = [
    {
      icon: (
        <FacebookIcon
          style={{
            backgroundColor: "#3b5999",
          }}
          className={classes.socialIcons}
          onMouseEnter={(event) => changeSocialIconColor(event, "#3b5999")}
          onMouseLeave={(event) => resetSocialIconColor(event, "#3b5999")}
        />
      ),
      address: "https://www.facebook.com/",
    },
    {
      icon: (
        <TwitterIcon
          style={{
            backgroundColor: "#55acee",
          }}
          className={classes.socialIcons}
          onMouseEnter={(event) => changeSocialIconColor(event, "#55acee")}
          onMouseLeave={(event) => resetSocialIconColor(event, "#55acee")}
        />
      ),
      address: "https://twitter.com/?lang=en",
    },
    {
      icon: (
        <LinkedInIcon
          style={{
            backgroundColor: "#0077b5",
          }}
          className={classes.socialIcons}
          onMouseEnter={(event) => changeSocialIconColor(event, "#0077b5")}
          onMouseLeave={(event) => resetSocialIconColor(event, "#0077b5")}
        />
      ),
      address: "https://www.linkedin.com/home",
    },
    {
      icon: (
        <InstagramIcon
          style={{
            backgroundColor: "#d91cac",
          }}
          className={classes.socialIcons}
          onMouseEnter={(event) => changeSocialIconColor(event, "#d91cac")}
          onMouseLeave={(event) => resetSocialIconColor(event, "#d91cac")}
        />
      ),
      address: "https://www.instagram.com/",
    },
  ];

  return (
    <>
      <Navbar NavColor={NavColor} />
      <MyDrawer NavColor={NavColor} />

      <div className={classes.bg}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h1" color="initial" className={classes.title}>
            Contact Agent
          </Typography>
        </Container>
      </div>

      <div className="container my-5">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://thumbs.dreamstime.com/z/man-programmer-working-his-laptop-coding-programming-63779805.jpg"
              alt="profile_img"
              className={classes.profile_img}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.profile_info}>
            <Typography variant="h4" color="initial">
              Tridev Verma
            </Typography>
            <Typography variant="body1" color="initial">
              <span className={classes.heading}>Title : </span> Developers
            </Typography>
            <Typography variant="body1" color="initial">
              <span className={classes.heading}>Email : </span> tv@gmail.com
            </Typography>
            <Typography variant="body1" color="initial">
              <span className={classes.heading}>Mobile No : </span> 8851691799
            </Typography>
            <Typography variant="body1" color="initial">
              <span className={classes.heading}>Office Address : </span>{" "}
              Haiderpur, Delhi-110011
            </Typography>

            <Box mt={2} mb={4} className={classes.icons_box}>
              {socialIcons.map((link, index) => (
                <Link
                  to={{ pathname: link.address }}
                  target="_blank"
                  key={index}
                  style={{
                    color: "#fff",
                    marginRight: "1rem",
                  }}
                >
                  {link.icon}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="container my-5">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{}}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Name"
                    type="text"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Email"
                    type="email"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Mobile No."
                    type="number"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    placeholder="Your Subject"
                    type="text"
                    required={true}
                    variant="outlined"
                    className={classes.textFields}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Your Message"
                    multiline
                    minRows={6}
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
