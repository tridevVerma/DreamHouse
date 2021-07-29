import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
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
}));
const MyDrawer = ({ NavColor }) => {
  const classes = useStyles();
  const [Open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        className={classNames(
          classes.drawer,
          NavColor === "white" ? "bg-light text-dark" : "bg-transparent"
        )}
      >
        <Toolbar>
          <Box display="flex" alignItems="center" style={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeIcon
                style={{
                  fontSize: "2rem",
                  marginRight: "0.5rem",
                  color: NavColor === "white" ? "black" : "white",
                }}
              />
              {NavColor === "white" ? (
                <Typography
                  variant="h4"
                  style={{ color: "black" }}
                  className={classes.logoName}
                >
                  Dream House
                </Typography>
              ) : (
                <Typography
                  variant="h4"
                  style={{ color: "white" }}
                  className={classes.logoName}
                >
                  Dream House
                </Typography>
              )}
            </Link>
          </Box>

          <Button size="large" color="inherit">
            Login
          </Button>
          <IconButton
            color="inherit"
            className={classes.iconSpacing}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={Open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        anchor="right"
      >
        <List disablePadding className={classes.sidebar}>
          <ListItem
            button={true}
            style={{
              backgroundColor: "#3454d1",
              color: "white",
              padding: "1rem",
            }}
            onClick={() => setOpen(false)}
          >
            <Link to="/" style={{ color: "white" }} className={classes.links}>
              Welcome
            </Link>
            <HomeIcon />
          </ListItem>
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/" className={classes.links}>
              Buy
            </Link>
            <ExpandMoreIcon />
          </ListItem>

          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/" className={classes.links}>
              Rent
            </Link>
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/" className={classes.links}>
              Sell
            </Link>
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/projects" className={classes.links}>
              Projects
            </Link>
          </ListItem>
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/services" className={classes.links}>
              Services
            </Link>
          </ListItem>
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/contact" className={classes.links}>
              Contact Us
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default MyDrawer;
