import React, { useCallback } from "react";
import { useStyles } from "./style";
import Submenu from "./Submenu";

import classNames from "classnames";
import { Button, Typography, Grow, Dialog } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogout } from "../../actions/userLogout";
import { useDispatch } from "react-redux";

import { openLoginDialog } from "../../actions/openLoginDialog";
import { closeLoginDialog } from "../../actions/closeLoginDialog";
import Login from "../login/Login";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";

const TransparentNavbar = ({ NavColor }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openSubmenu = (event) => {
    closeSubmenu.current();
    setAnchorEl(event.currentTarget);
    event.currentTarget.parentElement.style.backgroundColor = "#eee";
    event.currentTarget.parentElement.style.color = "#000";
  };

  const closeSubmenu = React.useRef(() => {});
  closeSubmenu.current = () => {
    if (anchorEl) {
      anchorEl.parentElement.style.backgroundColor = "transparent";
      anchorEl.parentElement.style.color = "white";
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const history = useHistory();
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
    history.push("/");
  };

  React.useEffect(() => {
    setLoginDialog(signInDialog);
    if (data.name) {
      closeDialog();
    }
  }, [data.name, signInDialog, closeDialog]);

  return (
    <>
      <Grow in={NavColor === "transparent"}>
        <nav
          className={classNames(
            classes.nav,

            "navbar navbar-expand-lg bg-transparent fixed-top"
          )}
        >
          <div className="container-xl h-100">
            <Link
              className="navbar-brand py-0 mx-0 d-flex align-items-center"
              to="/"
            >
              <HomeIcon
                style={{
                  fontSize: "2.5rem",
                  marginRight: "0.5rem",
                  color: "white",
                }}
              />
              <Typography
                variant="h4"
                style={{ color: "white" }}
                className={classes.logoName}
              >
                Dream House
              </Typography>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse h-100"
              id="navbarSupportedContent"
            >
              <ul
                className={classNames(
                  classes.linksUL,
                  "navbar-nav mx-auto mb-2 mb-lg-0 w-75 h-100 justify-content-around"
                )}
              >
                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    aria-current="page"
                    to="/"
                    onClick={openSubmenu}
                  >
                    Buy
                  </Link>
                  <ExpandMoreIcon className={classes.moreIcon} />
                </li>

                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    to="/"
                    onClick={openSubmenu}
                  >
                    Sell
                  </Link>
                  <ExpandMoreIcon className={classes.moreIcon} />
                </li>
                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    to="/projects"
                  >
                    Properties
                  </Link>
                </li>
                {data.signupAs === "seller" ? (
                  <li className={classNames(classes.navItem, "nav-item")}>
                    <Link
                      className={classNames(classes.navLinks, "nav-link")}
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {data.name ? (
                <Button
                  variant="text"
                  className={classes.loginLogoutBtn}
                  startIcon={<AddCircleIcon style={{ fontSize: "14px" }} />}
                  onMouseOver={() => setshowLogout(true)}
                  onMouseOut={() => setshowLogout(false)}
                  onClick={() => logout()}
                >
                  {showLogout ? "Logout" : data.name}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={classes.myBtn}
                  startIcon={<AddCircleIcon style={{ fontSize: "14px" }} />}
                  onClick={() => openDialog()}
                >
                  SignIn
                </Button>
              )}
            </div>
          </div>
        </nav>
      </Grow>
      <Submenu
        id={id}
        closeSubmenu={closeSubmenu.current}
        open={open}
        anchorEl={anchorEl}
        NavColor="transparent"
      />
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

export default TransparentNavbar;
