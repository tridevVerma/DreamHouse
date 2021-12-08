import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80")',
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
