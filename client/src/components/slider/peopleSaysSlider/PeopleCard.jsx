import React from "react";
import classNames from "classnames";
import { Avatar, Paper, Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    position: "relative",
    height: "20vh",
    [theme.breakpoints.down("md")]: {
      height: "22vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
  },
  paper: {
    width: "90%",
    display: "block",
    margin: "auto",
    position: "relative",
    padding: "2rem",
    boxShadow: theme.shadows[3],
  },
  comment: {
    fontSize: "14px",
    marginBottom: "1rem",
  },
  authorInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "-40px",
    left: "0px",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: "1rem",
  },
}));
const PeopleCard = ({ personInfo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.containerBox}>
      <Paper className={classNames(classes.paper)}>
        <Typography variant="subtitle1" className={classes.comment}>
          {personInfo.comment}
        </Typography>
        <Box className={classes.authorInfo}>
          <Avatar
            alt="Person-img"
            src={personInfo.image}
            className={classes.largeAvatar}
          />
          <Paper elevation={2} style={{ padding: "1rem" }}>
            <Typography variant="subtitle2" style={{ color: "#3454d1" }}>
              {personInfo.author}
            </Typography>
            <Typography variant="subtitle2" style={{ fontWeight: "normal" }}>
              {personInfo.postAndCompany}
            </Typography>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default PeopleCard;
