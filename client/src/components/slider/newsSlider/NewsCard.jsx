import React from "react";

import classNames from "classnames";
import { Box, Typography, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./style";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const NewsCard = ({ news }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.card, "card")}>
      <img
        src={news.image}
        className={classNames(classes.image, "card-img-top")}
        alt="img"
      />

      <div className="card-body">
        <h5
          className={classNames(classes.newsTitle, "card-title")}
          style={{ color: "#002247" }}
        >
          {news.title}
        </h5>

        <Typography variant="body1">{news.text}</Typography>
      </div>
      <hr className={classes.hr} />
      <Box className={classNames(classes.horizontalBetween, "p-3")}>
        <Box className={classes.horizontalBetween}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
            style={{ marginRight: "1rem" }}
          />
          <Typography variant="subtitle1" style={{ color: "#495057" }}>
            {news.seller}
          </Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3454d1",
            color: "white",
            borderRadius: "0px",
          }}
          endIcon={<ChevronRightIcon />}
        >
          Read More
        </Button>
      </Box>
    </div>
  );
};

export default NewsCard;
