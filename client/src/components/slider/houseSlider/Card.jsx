import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { propertyDetails } from "../../../actions/propertyDetails";

import classNames from "classnames";
import { Box, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./style";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

const Card = ({ house }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const showDetails = () => {
    dispatch(propertyDetails(house.propertyID));
    history.push("/details");
  };
  const houseData = [
    {
      title: "baths",
      name: "bathrooms",
      icon: <BathtubIcon className={classes.icon} />,
    },
    {
      title: "beds",
      name: "bedrooms",
      icon: <HotelIcon className={classes.icon} />,
    },
    {
      title: "rooms",
      name: "rooms",
      icon: <MeetingRoomIcon className={classes.icon} />,
    },
    {
      title: "area",
      name: "area",
      icon: <AspectRatioIcon className={classes.icon} />,
    },
  ];
  return (
    <div
      className={classNames(classes.card, "card")}
      onClick={() => showDetails()}
    >
      <Typography variant="subtitle2" className={classes.ribbon}>
        {house.tag}
      </Typography>
      <img
        src={house.image}
        className={classNames(classes.image, "card-img-top")}
        alt="img"
      />

      <div className="card-body">
        <Typography variant="subtitle2" className={classes.type} gutterBottom>
          {house.type}
        </Typography>
        <h5 className="card-title" style={{ color: "#002247" }}>
          {house.title}
        </h5>

        <Typography
          variant="subtitle1"
          className={classNames(classes.verticalCenter, "card-text")}
          gutterBottom
        >
          <LocationOnIcon className={classes.icon} />
          {house.location}
        </Typography>
        <Box className={classNames(classes.verticalCenter, "my-3")}>
          {houseData.map((luxury, index) => (
            <Box key={index} style={{ marginRight: "1rem" }}>
              <Typography variant="subtitle1" className={classes.houseTitle}>
                {luxury.title}
              </Typography>
              <Box className={classes.verticalCenter}>
                {luxury.icon}
                <span>
                  {house[luxury.name]}
                  {index === houseData.length - 1 ? " Sq Ft" : ""}
                </span>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
      <hr className={classes.hr} />
      <Box className={classNames(classes.horizontalBetween, "p-3")}>
        <Box className={classes.horizontalBetween}>
          <Avatar
            alt="seller image"
            src={house.sellerImage}
            style={{ marginRight: "1rem" }}
          />
          <Typography variant="subtitle1" style={{ color: "#495057" }}>
            {house.seller}
          </Typography>
        </Box>
        <Typography variant="h5" className={classes.price}>
          &#8377; {house.price}
        </Typography>
      </Box>
    </div>
  );
};

export default Card;
