import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { userLogout } from "../../actions/userLogout";
import { useDispatch } from "react-redux";

import { Dialog } from "@material-ui/core";

import { openLoginDialog } from "../../actions/openLoginDialog";
import { closeLoginDialog } from "../../actions/closeLoginDialog";
import Login from "../login/Login";

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

  const dispatch = useDispatch();
  const signInDialog = useSelector((state) => state.loginDialog);
  const data = useSelector((state) => state.currentUser.user);
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [showLogout, setshowLogout] = React.useState(false);
  const openDialog = () => {
    dispatch(openLoginDialog());
  };

  const closeDialog = useCallback(() => {
    dispatch(closeLoginDialog());
  }, [dispatch]);

  const logout = () => {
    dispatch(userLogout());
  };

  React.useEffect(() => {
    setLoginDialog(signInDialog);
    if (data.name) {
      closeDialog();
    }
  }, [data.name, signInDialog, closeDialog]);
  return (
    <>
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

            {data.name ? (
              <Button
                size="large"
                color="inherit"
                onClick={() => logout()}
                className={classes.logoutBtn}
                onMouseOver={() => setshowLogout(true)}
                onMouseOut={() => setshowLogout(false)}
              >
                {showLogout ? "Logout" : data.name}
              </Button>
            ) : (
              <Button size="large" color="inherit" onClick={() => openDialog()}>
                Login
              </Button>
            )}
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
      <Dialog
        open={loginDialog}
        maxWidth="md"
        fullWidth
        onClose={() => logout()}
      >
        <Login />
      </Dialog>
    </>
  );
};

export default WhiteNavDrawer;
