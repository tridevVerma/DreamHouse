import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2014/08/01/15/51/city-407703_960_720.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "auto",
    position: "relative",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    "&:after": {
      content: '""',
      position: "absolute",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: 5,
    },
  },
  container: {
    zIndex: 10,
    color: "#adb5bd",
    position: "relative",
  },
  heading: {
    color: "white",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  socialIcons: {
    width: "2rem",
    height: "2rem",
    padding: "0.4rem",
  },
  myBtn: {
    backgroundColor: "#3454d1",
    fontSize: "14px",
    padding: "0.75rem",
    color: "white",
    fontWeight: "bold",
    marginTop: "1rem",
    border: "none",
    borderRadius: "0px",
  },
  bottomFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
      flexDirection: "column",
    },
  },
  footerNavigation: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#fd7e14",
    },
  },
}));
