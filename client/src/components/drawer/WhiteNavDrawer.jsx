import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Typography,
  Slide,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const WhiteNavDrawer = ({ NavColor, setOpen }) => {
  const classes = useStyles();
  return (
    <Slide
      direction="down"
      in={NavColor === "white"}
      mountOnEnter
      unmountOnExit
    >
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
    </Slide>
  );
};

export default WhiteNavDrawer;
