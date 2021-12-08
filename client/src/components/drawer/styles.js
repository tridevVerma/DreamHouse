import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  (theme) => ({
    drawer: {
      zIndex: theme.zIndex.appBar,
      boxShadow: "none",
      [theme.breakpoints.up(theme.breakpoints.values.md + 32)]: {
        display: "none",
      },
    },
    sidebar: {
      width: "200px",
      [theme.breakpoints.up("sm")]: {
        width: "250px",
      },
    },
    logoName: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    links: {
      textDecoration: "none",
      width: "100%",
      fontSize: "1.2rem",
      color: "black",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    logoutBtn: {
      "&:hover": {
        backgroundColor: "tomato",
      },
    },
  }),
  { index: 1 }
);
