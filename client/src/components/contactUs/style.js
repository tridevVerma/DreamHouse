import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2014/08/01/15/51/city-407703_960_720.jpg")',
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
  textFields: {
    marginBottom: "1rem",
    backgroundColor: "white !important",
  },
  myBtn: {
    backgroundColor: "#3454d1",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2a43a7",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
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
