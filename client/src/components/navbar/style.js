import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  (theme) => ({
    nav: {
      paddingTop: "0rem",
      paddingBottom: "0rem",
      height: "80px",
      zIndex: theme.zIndex.appBar,
      backgroundColor: "white",
      [theme.breakpoints.down(theme.breakpoints.values.md + 32)]: {
        display: "none",
      },
    },
    whiteNav: {
      backgroundColor: "pink !important",
    },
    logoName: {
      [theme.breakpoints.down(theme.breakpoints.values.md + 181)]: {
        fontSize: "1.8rem",
      },
    },

    linksUL: {
      [theme.breakpoints.down(theme.breakpoints.values.md + 181)]: {
        width: "100% !important",
      },
    },

    navItem: {
      display: "flex",
      alignItems: "center",
      color: "white",
      margin: "1rem",
      borderRadius: "4px",
      "&:hover": {
        color: "black",
      },
    },
    navLinks: {
      fontWeight: "bold",
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "black",
      },
      "&:focus": {
        color: "black",
      },
    },
    moreIcon: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "inherit",
    },
    myBtn: {
      fontSize: "14px",
      backgroundColor: "#3454d1",
      padding: "0.75rem 2rem",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "2px",
      "&:hover": {
        backgroundColor: "#2a43a7",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md + 181)]: {
        padding: "0.5rem 1rem",
      },
    },
  }),
  { index: 1 }
);
