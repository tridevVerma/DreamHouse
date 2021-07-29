import React from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

import { contactLinks, quickLinks } from "./data";
import classNames from "classnames";

import { Box, Typography, Button, Input } from "@material-ui/core";

//social icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import HomeIcon from "@material-ui/icons/Home";

const Footer = () => {
  const classes = useStyles();

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

  //social Icons

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
    {
      icon: (
        <YouTubeIcon
          style={{
            backgroundColor: "#cc181e",
          }}
          className={classes.socialIcons}
          onMouseEnter={(event) => changeSocialIconColor(event, "#cc181e")}
          onMouseLeave={(event) => resetSocialIconColor(event, "#cc181e")}
        />
      ),
      address: "https://www.youtube.com/",
    },
  ];

  return (
    <Box className={classes.bg}>
      <div className={classNames(classes.container, "container")}>
        <div className="row gy-4">
          <div className="col-md-4 col-lg-4 col-10 mx-auto">
            <Box className="d-flex align-items-center">
              <HomeIcon
                style={{
                  fontSize: "2.5rem",
                  marginRight: "0.5rem",
                  color: "white",
                }}
              />
              <Typography variant="h4" style={{ color: "white" }}>
                Dream House
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              Rethouse Real Estate is a premium Property template based on
              Bootstrap 4. Rethouse Real Estate helped thousands of clients to
              find the right property for their needs.
            </Typography>
            <Box>
              {contactLinks.map((link, index) => (
                <Box
                  key={index}
                  style={{
                    color: "#ced4da",
                    marginBottom: "1rem",
                    display: "flex",
                  }}
                >
                  {link.icon}
                  <Typography variant="subtitle2">{link.text}</Typography>
                </Box>
              ))}
            </Box>
          </div>
          <div className="col-md-4 col-lg-4 col-10 mx-auto">
            <Typography variant="h4" className={classes.heading}>
              Quick Links
            </Typography>
            <Box className="row">
              {quickLinks.map((link, index) => (
                <Typography
                  variant="subtitle1"
                  key={index}
                  className="col-md-10 col-lg-6 col-6 "
                  style={{ textTransform: "capitalize" }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </div>
          <div className="col-md-4 col-lg-4 col-10 mx-auto">
            <Typography variant="h4" className={classes.heading}>
              Follow Us
            </Typography>
            <Box>
              <Typography variant="subtitle1">
                Follow us and stay in touch to get the latest news
              </Typography>
              <Box mt={2} mb={4}>
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
            </Box>
            <Typography variant="h4" className={classes.heading}>
              Newsletter
            </Typography>
            <Box>
              <Typography variant="subtitle1">
                Don’t miss to subscribe to our news feeds, kindly fill the form
                below
              </Typography>
              <Box my={2}>
                <Input
                  type="email"
                  fullWidth={true}
                  required={true}
                  placeholder="Your Email Here...."
                  style={{
                    backgroundColor: "white",
                    padding: "0.75rem",
                    fontSize: "14px",
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth={true}
                  className={classes.myBtn}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0px",
          backgroundColor: "#000",
          width: "100%",
          padding: "1rem",
          zIndex: 10,
        }}
      >
        <div className={classNames(classes.bottomFooter, "container")}>
          <Typography
            variant="subtitle1"
            style={{ color: "white", fontSize: "12px" }}
            className="order-lg-0 order-1"
          >
            &copy; 2020 Rethouse Real Estate - Premium real estate & theme &
            theme by{" "}
            <span>
              <Link to={{ pathname: "https://www.google.com" }} target="_blank">
                RETENVI.COM
              </Link>
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white", fontSize: "12px" }}
            className="order-lg-1 order-0"
          >
            {["Privacy", "Contact", "About", "Faq"].map((item, index) => {
              return (
                <span key={index} style={{ marginRight: "1rem" }}>
                  <Link to="/" className={classes.footerNavigation}>
                    {item} /
                  </Link>
                </span>
              );
            })}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
