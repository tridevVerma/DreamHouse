import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    height: "35vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 5,
    },
  },
  container: {
    zIndex: 10,
    color: "white",
    position: "relative",
  },
  title: {
    textAlign: "center",
    fontSize: "6rem",
    [theme.breakpoints.down(theme.breakpoints.values.sm - 80)]: {
      fontSize: "4rem",
    },
  },
  imagesDiv: {
    width: "100%",
    height: "60vh",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0%",
      left: "0%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)",
    },
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
  images: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  contentBox: {
    position: "absolute",
    bottom: "10%",
    left: "5%",
    zIndex: 25,
    color: "white",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  type: {
    display: "inline-block",
    backgroundColor: "#3454d1",
    color: "white",
    padding: "0.25em 0.4em",
    textTransform: "Capitalize",
  },
  sliderTitle: {
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "#002247",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  headingStyle: {
    fontWeight: "bold",
    color: "#002247",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  textStyle: {
    color: "#002247",
    textTransform: "capitalize",
  },
  goToTopBtn: {
    position: "fixed",
    right: "20px",
    bottom: "30px",
    zIndex: 5000,
    backgroundColor: "black",
    opacity: "0.5",
    border: "none",
    borderRadius: "0px",
    padding: "0px",
    width: "40px",
    height: "40px",
    boxShadow: theme.shadows[6],
  },
}));
