import React from "react";
import { useStyles } from "./style";
import Submenu from "./Submenu";

import classNames from "classnames";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";

const WhiteNavbar = () => {
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
      anchorEl.parentElement.style.backgroundColor = "white";
      anchorEl.parentElement.style.color = "black";
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <nav
        className={classNames(
          classes.nav,
          "navbar navbar-expand-lg navbar-light shadow fixed-top"
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
                color: "black",
              }}
            />
            <Typography variant="h4" className={classes.logoName}>
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
                  Rent
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
                  Projects
                </Link>
              </li>
              <li className={classNames(classes.navItem, "nav-item")}>
                <Link
                  className={classNames(classes.navLinks, "nav-link")}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className={classNames(classes.navItem, "nav-item")}>
                <Link
                  className={classNames(classes.navLinks, "nav-link")}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <Button
              variant="contained"
              className={classes.myBtn}
              startIcon={<AddCircleIcon style={{ fontSize: "14px" }} />}
            >
              Search
            </Button>
          </div>
        </div>
      </nav>

      <Submenu
        id={id}
        closeSubmenu={closeSubmenu.current}
        open={open}
        anchorEl={anchorEl}
        NavColor="white"
      />
    </>
  );
};

export default WhiteNavbar;
