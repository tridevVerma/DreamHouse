import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  (theme) => ({
    bg: {
      position: "relative",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "100vh",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        paddingTop: "-5rem",
      },
      zIndex: theme.zIndex.mobileStepper,

      "&::after": {
        content: '""',
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: theme.zIndex.speedDial,
      },
    },
    mainContent: {
      zIndex: theme.zIndex.speedDial + 1,
      color: "white",
      width: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mainContentHeading: {
      fontWeight: "bold",
      fontSize: "4rem",
      letterSpacing: "2px",
      marginBottom: "1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem",
      },
    },
    mainContentPara: {
      fontSize: "1.2rem",
      marginBottom: "1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    searchSelectBtnBox: {
      width: "60%",
      backgroundColor: "pink",
      display: "flex",
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        flexDirection: "column",
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "95%",
      },
    },
    searchPlaceBox: {
      width: "40%",
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        width: "100%",
      },
    },
    searchPlace: {
      border: "0px",
      borderRadius: "0px",
      outline: "none",
      backgroundColor: "white",
      height: "60px",
      width: "100%",
      padding: "0.5rem 1rem",
      borderRight: "1px solid #ddd",
    },

    select: {
      position: "relative",
      border: "0px",
      borderRadius: "0px",
      padding: "0.5rem 1rem",
      outline: "none",
      height: "60px",
      width: "30%",
      backgroundColor: "white",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        width: "100%",
      },
    },
    collapse: {
      position: "absolute",
      backgroundColor: "white",
      color: "black",
      width: "100%",
      top: "60px",
      left: "0px",
      borderTop: "1px solid #ddd",
    },
    myBtn: {
      fontSize: "14px",
      backgroundColor: "#3454d1",
      padding: "0.5rem 1rem",
      color: "white",
      fontWeight: "bold",
      border: "0px",
      borderRadius: "2px",
      height: "60px",
      width: "30%",
      "&:hover": {
        backgroundColor: "#2a43a7",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        position: "static",
        width: "100%",
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
  }),
  { index: 1 }
);
