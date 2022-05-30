import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { propertyDetails } from "../../actions/propertyDetails";
import { removeProperty } from "../../actions/removeProperty";
import { sellerProperties } from "../../actions/sellerProperties";
import { getAllProperties } from "../../actions/loadAllProperties";

import classNames from "classnames";
import { Box, Typography, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./style";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = ({ house }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.currentUser.user);

  const showDetails = () => {
    dispatch(propertyDetails(house.propertyID));
    history.push("/details");
  };

  const remove = async () => {
    await dispatch(removeProperty(house.propertyID));
    dispatch(sellerProperties(data.name));
    dispatch(getAllProperties());
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
    <div className={classNames(classes.card, "card")}>
      <Typography variant="subtitle2" className={classes.ribbon}>
        {house.tag}
      </Typography>
      <img
        src={house.mainImage}
        className={classNames(classes.image, "card-img-top")}
        alt="img"
        onClick={showDetails}
      />

      <div className="card-body">
        <Box className={classes.remove}>
          <Typography variant="subtitle2" className={classes.type} gutterBottom>
            {house.type}
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            endIcon={<DeleteIcon />}
            className={classes.removeBtn}
            onClick={() => {
              remove();
            }}
          >
            Remove
          </Button>
        </Box>

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
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
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
