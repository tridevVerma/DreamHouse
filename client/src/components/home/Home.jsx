import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByProperties } from "../../actions/filterByProperties";
import { filterByTag } from "../../actions/filterByTag";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";

import Navbar from "../navbar/Navbar";
import MyDrawer from "../drawer/MyDrawer";
import Section from "../section/Section";
import PeopleSaysSection from "../section/PeopleSaysSection";
import SubscribeSection from "../section/SubscribeSection";
import NewsSection from "../section/NewsSection";
import Footer from "../footer/Footer";

import { locations } from "../../asset/locationsData";

import {
  Typography,
  Box,
  Container,
  Button,
  List,
  ListItem,
  ListSubheader,
  Collapse,
  ClickAwayListener,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const listItems = [
  "All Categories",
  "Commercial",
  "Residential",
  "Land",
  "Luxury",
];

const Home = ({ NavColor }) => {
  const classes = useStyles();

  const [OpenSelect, setOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //locations
  const [Location, setLocation] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const filterByType = () => {
    let query = [];
    if (Location) query.push(`checked${Location}`);

    if (selectedIndex !== 0) {
      query.push(`checked` + listItems[selectedIndex].toLowerCase());
    }
    dispatch(filterByTag(""));
    dispatch(filterByProperties(query));
    history.push(`/projects/filters`);
  };

  return (
    <>
      <Navbar NavColor={NavColor} />
      <MyDrawer NavColor={NavColor} />
      <div className={classes.bg}>
        <Container maxWidth="xl" className={classes.mainContent}>
          <Typography variant="h1" className={classes.mainContentHeading}>
            Find Your Dream House
          </Typography>
          <Typography variant="subtitle1" className={classes.mainContentPara}>
            Your Property, Our Priority and From as low as $10 per day with
            limited time offer discounts
          </Typography>
          <Box className={classes.searchSelectBtnBox}>
            <Box className={classes.searchPlaceBox}>
              <input
                list="states"
                name="browser"
                id="browser"
                placeholder="Search by address or state..."
                className={classes.searchPlace}
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <datalist id="states">
                {locations.map((place, index) => (
                  <option key={index} value={place} />
                ))}
              </datalist>
            </Box>

            <ClickAwayListener onClickAway={() => setOpenSelect(false)}>
              <List
                subheader={
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ListSubheader style={{ fontSize: "1rem", padding: "0px" }}>
                      {listItems[selectedIndex]}
                    </ListSubheader>

                    <ArrowDropDownIcon style={{ color: "black" }} />
                  </Box>
                }
                className={classes.select}
                onClick={() => setOpenSelect((OpenSelect) => !OpenSelect)}
              >
                <Collapse in={OpenSelect} className={classes.collapse}>
                  {listItems.map((item, index) => (
                    <ListItem
                      key={index}
                      selected={selectedIndex === index}
                      onMouseOver={(event) => handleListItemClick(event, index)}
                    >
                      {item}
                    </ListItem>
                  ))}
                </Collapse>
              </List>
            </ClickAwayListener>
            <Button
              variant="contained"
              className={classes.myBtn}
              startIcon={<SearchIcon />}
              onClick={filterByType}
            >
              search
            </Button>
          </Box>
        </Container>
      </div>
      <button
        className={classes.goToTopBtn}
        style={{ display: NavColor === "white" ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <ExpandLessIcon style={{ color: "white", fontSize: "2rem" }} />
      </button>

      <Section
        backgroundColor="#fff"
        heading="Featured Properties"
        subHeading="Handpicked Exclusive Properties By Our Team."
        tag="featured"
      />

      <Section
        backgroundColor="#f9f9f8"
        heading="Recent Properties"
        subHeading="We Provide Full Service at Every Step."
        tag="recent"
      />

      <PeopleSaysSection
        backgroundColor="#fff"
        heading="What People Says"
        subHeading="People Says About Walls Property."
      />

      <SubscribeSection />

      <NewsSection
        backgroundColor="#fff"
        heading="Latest News"
        subHeading="Find Of The Most Popular Real Estate Company All Around Indonesia."
      />
      <Footer />
    </>
  );
};

export default Home;
