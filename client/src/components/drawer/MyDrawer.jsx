import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import WhiteNavDrawer from "./WhiteNavDrawer";
import TransparentNavDrawer from "./TransparentNavDrawer";
import { SwipeableDrawer, List, ListItem } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";

const MyDrawer = ({ NavColor }) => {
  const classes = useStyles();
  const [Open, setOpen] = React.useState(false);
  const data = useSelector((state) => state.currentUser.user);
  return (
    <>
      {NavColor === "white" ? (
        <WhiteNavDrawer NavColor={NavColor} setOpen={setOpen} />
      ) : (
        <TransparentNavDrawer NavColor={NavColor} setOpen={setOpen} />
      )}

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
          {data.signupAs === "seller" ? (
            <ListItem button={true} onClick={() => setOpen(false)}>
              <Link to="/services" className={classes.links}>
                Services
              </Link>
            </ListItem>
          ) : (
            ""
          )}

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
