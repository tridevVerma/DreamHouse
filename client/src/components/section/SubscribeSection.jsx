import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: "1",
    },
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  myBtn: {
    backgroundColor: "#3454d1",
    padding: "0.75rem 2rem",
    color: "white",
    fontWeight: "bold",
    marginTop: "2rem",

    border: "none",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#2a43a7",
    },
  },
}));
const SubscribeSection = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box className={classes.contentBox}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          signup & build your dream house
        </Typography>
        <Typography variant="body1">
          We'll Help You To Grow Your Career And Growth, Please Contact Team
          Walls Real Estate And Get This Offer Promo
        </Typography>
        <Button
          variant="contained"
          className={classes.myBtn}
          endIcon={<ChevronRightIcon />}
        >
          request a quote
        </Button>
      </Box>
    </Container>
  );
};

export default SubscribeSection;
