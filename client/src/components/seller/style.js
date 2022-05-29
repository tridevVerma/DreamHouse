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
  addProperty: {},
  card: {
    width: "100%",
    display: "block",
    position: "relative",
    overflow: "hidden",
    boxShadow: theme.shadows[5],
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  ribbon: {
    textTransform: "capitalize",
    display: "block",
    backgroundColor: "#3454d1",
    color: "white",
    padding: "0.25em 3em",
    position: "absolute",
    top: "20px",
    left: "-40px",
    fontSize: "14px",
    transform: "translate3d(0, 0, 1px) rotate(-45deg)",
  },
  type: {
    display: "inline-block",
    backgroundColor: "#3454d1",
    color: "white",
    padding: "0.25em 0.4em",
  },
  remove: {
    widht: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  removeBtn: {
    color: "white",
    borderRadius: "0px",
    fontSize: "0.8rem",
  },
  hr: {
    color: "#999",
    width: "100%",
    marginTop: "0rem",
    marginBottom: "0rem",
  },
  verticalCenter: {
    display: "flex",
    alignItems: "center",
    color: "#495057",
  },
  horizontalBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    fontSize: "1rem",
    marginRight: "0.6rem",
  },
  houseTitle: {
    textTransform: "capitalize",
    color: "#495057",
  },
  price: {
    color: "#002247",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  notFoundBox: {
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem",
  },
  notFoundText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
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
    letterSpacing: "2px",
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
  loginLogoutBtn: {
    fontSize: "14px",
    backgroundColor: "#3454d1",
    padding: "0.75rem 2rem",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "2px",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "tomato",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md + 181)]: {
      padding: "0.5rem 1rem",
    },
  },
  profile_img: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  profile_info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    position: "relative",
  },
  heading: {
    fontWeight: "bold",
  },
  icons_box: {
    display: "flex",
  },
  socialIcons: {
    width: "2rem",
    height: "2rem",
    padding: "0.4rem",
    margin: "auto 1rem",
  },
}));
