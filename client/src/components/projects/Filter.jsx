import React, { useState } from "react";
import { Slider, withStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";

import { getAllProperties } from "../../actions/loadAllProperties";
import { filterByProperties } from "../../actions/filterByProperties";

import { data } from "./data";
import { locations } from "../../asset/locationsData";

import {
  Paper,
  Box,
  Typography,
  Switch,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PrettoSlider = withStyles({
  root: {
    color: "#3454d1",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 12,
    borderRadius: 0,
  },
  rail: {
    height: 12,
    borderRadius: 0,
  },
})(Slider);

const Filter = () => {
  const classes = useStyles();

  let initialPropertyNames = {};
  let initialPropertyValues = {};

  const [Open, setOpen] = useState(initialPropertyNames);
  const [state, setState] = useState(initialPropertyValues);

  const selectPropertyField = (event) => {
    setOpen((prev) => {
      return {
        ...Open,
        [event.currentTarget.id]: !prev[event.currentTarget.id],
      };
    });
  };

  const selectPropertyType = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //price slider

  const valuetext = (value) => {
    return `&#8377;${value}`;
  };

  const [price, setPrice] = useState([100000, 10000000]);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  //Location
  const [Location, setLocation] = useState("");

  const dispatch = useDispatch();
  const tag = useSelector((state) => state.tag.value);
  const history = useHistory();

  //submitting data to filter

  const applyFilter = () => {
    const queriesArr = Object.keys(state).filter(
      (filterQuery) => state[filterQuery] === true
    );
    queriesArr.push(`checkedpricemin${price[0]}`);
    queriesArr.push(`checkedpricemax${price[1]}`);

    if (Location) queriesArr.push(`checked${Location}`);

    if (tag) queriesArr.push(`checkedtag${tag}`);
    dispatch(getAllProperties());
    dispatch(filterByProperties(queriesArr));
    history.push(`/projects/filters`);
  };

  React.useState(() => {
    let allValues = [];
    let allNames = [];
    for (let feature in data) {
      let arr = data[feature].map((value) => {
        if (typeof value === "string")
          return {
            ["checked" + value.toLowerCase().replaceAll(" ", "")]: false,
          };
        else
          return {
            ["checked" +
            feature.toLowerCase().replaceAll(" ", "") +
            value]: false,
          };
      });

      let name = { [feature.toLowerCase().replaceAll(" ", "")]: false };
      allNames.push(name);
      let object = Object.assign({}, ...arr);
      allValues.push(object);
    }
    initialPropertyNames = Object.assign({}, ...allNames);
    initialPropertyValues = Object.assign({}, ...allValues);
  }, []);

  return (
    <Paper variant="outlined" style={{ borderRadius: "2px" }}>
      <Box
        style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}
        p={3}
      >
        <Typography variant="h5">Property Filter</Typography>
      </Box>
      <List>
        {Object.keys(data).map((key, index) => {
          let identifier = key.toLowerCase().replaceAll(" ", "");
          return (
            <Box key={index}>
              <ListItem button onClick={selectPropertyField} id={identifier}>
                <ListItemText
                  primary={key}
                  style={{ textTransform: "capitalize" }}
                />
                {Open[key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse
                in={Open[identifier]}
                style={{ maxHeight: "250px", overflow: "auto" }}
              >
                {data[key].map((item, index) => {
                  let query = "";
                  if (typeof item === "string")
                    query = item.replaceAll(" ", "");
                  else query = identifier + item;
                  return (
                    <ListItem key={index}>
                      <ListItemText
                        primary={item}
                        style={{ textTransform: "capitalize" }}
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          checked={state[query]}
                          onChange={selectPropertyType}
                          name={"checked" + query}
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </Collapse>
            </Box>
          );
        })}
      </List>

      <Box px={2} style={{ marginBottom: "4rem" }}>
        <label htmlFor="browser">Choose your location here:</label>
        <input
          list="states"
          name="browser"
          id="browser"
          style={{
            width: "100%",
            backgroundColor: "#fff",
            height: "3rem",
            padding: "0.5rem 1rem",
            marginTop: "0.5rem",
          }}
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <datalist id="states">
          {locations.map((place, index) => (
            <option key={index} value={place} />
          ))}
        </datalist>
      </Box>
      <Box my={5} px={3}>
        <PrettoSlider
          value={price}
          onChange={handlePriceChange}
          aria-labelledby="range-slider"
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          max={10000000}
          min={100000}
          step={100000}
          scale={(x) => x / 100000}
        />
        <Typography variant="body1" align="center">
          Select Price (1 Lac to 1 Cr)
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        style={{ borderRadius: "0px" }}
        className={classes.myBtn}
        onClick={applyFilter}
      >
        Search Property
      </Button>
    </Paper>
  );
};

export default Filter;
