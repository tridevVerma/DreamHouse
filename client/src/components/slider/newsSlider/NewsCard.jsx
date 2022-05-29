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
            alt="publisher"
            src="https://economictimes.indiatimes.com/blogs/wp-content/uploads/2014/09/Commentary.png"
            style={{ marginRight: "1rem" }}
          />
          <Typography variant="subtitle1" style={{ color: "#495057" }}>
            {news.seller}
          </Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#018DB7",
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
