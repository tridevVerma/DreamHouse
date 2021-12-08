import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    height: "50vh",
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
