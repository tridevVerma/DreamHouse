import React from "react";

import { useSelector } from "react-redux";

import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Footer from "../footer/Footer";

import { useStyles } from "./style";

import { Grid, Typography, Container, Box, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Profile = (props) => {
  const classes = useStyles();

  const user = useSelector((state) => state.currentUser.user);
  const data = useSelector((state) => state.sellerData.data);

  console.log("data is ");
  console.log(data);
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

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <Navbar NavColor={props.NavColor} />
      <MyDrawer NavColor={props.NavColor} />
      <div className={classes.bg}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h1" color="initial" className={classes.title}>
            Agent's Profile
          </Typography>
        </Container>
      </div>
      {user.name ? (
        <div className="container my-5">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={data.image}
                alt="profile_img"
                className={classes.profile_img}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.profile_info}>
              <Typography variant="h4" color="initial">
                {data.name}
              </Typography>
              <Typography variant="body1" color="initial">
                <span className={classes.heading}>Title : </span> {data.title}
              </Typography>
              <Typography variant="body1" color="initial">
                <span className={classes.heading}>Email : </span>
                {data.email}
              </Typography>
              <Typography variant="body1" color="initial">
                <span className={classes.heading}>Mobile No : </span>{" "}
                {data.mobileno}
              </Typography>
              <Typography variant="body1" color="initial">
                <span className={classes.heading}>Office No: </span>{" "}
                {data.officePhno}
              </Typography>
              <Typography variant="body1" color="initial">
                <span className={classes.heading}>Office Address : </span>
                {data.officeAddress}
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
            You Have to Login First....
          </Typography>
        </Box>
      )}

      <Footer />
    </>
  );
};

export default Profile;
