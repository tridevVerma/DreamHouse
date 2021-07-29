import React from "react";
import { submenuData } from "../../asset/submenuData";
import { Box, Popover, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionLists: {
    listStyleType: "none",
    padding: "0px",
  },

  paper: {
    display: "flex",
    padding: "1.5rem",
    paddingRight: "0rem",
    backgroundColor: "#eee",
  },
}));

const Submenu = ({ id, closeSubmenu, open, anchorEl, NavColor }) => {
  const classes = useStyles();

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeSubmenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{
          root: classes.root,
          paper: classes.paper,
        }}
        style={{ zIndex: NavColor === "white" ? 1100 : 1050 }}
      >
        {submenuData.map((section, index) => {
          return (
            <Box
              key={index}
              style={{
                minWidth: "180px",
                textTransform: "capitalize",
                marginRight: "2rem",
              }}
            >
              <Typography variant="h6">{section.subtitle}</Typography>

              <hr
                style={{
                  color: "#999",
                  marginTop: "0.4rem",
                  marginBottom: "0.4rem",
                }}
              />
              <ul className={classes.sectionLists}>
                {section.links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Typography variant="subtitle1">{link}</Typography>
                    </li>
                  );
                })}
              </ul>
            </Box>
          );
        })}
      </Popover>
    </div>
  );
};

export default Submenu;
