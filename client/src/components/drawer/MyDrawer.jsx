import React from "react";
import axios from "axios";
import URL from "../../backendURL";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { useStyles } from "./styles";
import WhiteNavDrawer from "./WhiteNavDrawer";
import TransparentNavDrawer from "./TransparentNavDrawer";
import {
  SwipeableDrawer,
  List,
  ListItem,
  Typography,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";

import { getAllProperties } from "../../actions/loadAllProperties";
import { sellerProperties } from "../../actions/sellerProperties";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const tagOptions = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "recent",
    label: "Recent",
  },
];

const statusOptions = [
  {
    value: "sale",
    label: "Sale",
  },
  {
    value: "rent",
    label: "Rent",
  },
];

const typeOptions = [
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "luxury",
    label: "Luxury",
  },
  {
    value: "land",
    label: "Land",
  },
];

const MyDrawer = ({ NavColor }) => {
  const classes = useStyles();
  const [Open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.currentUser.user);

  const [openServices, setServicesOpen] = React.useState(true);

  const [openAddPropertyDialog, setAddPropertyDialog] = React.useState(false);

  const handleClickOpen = () => {
    setAddPropertyDialog(false);
  };

  const handleClose = () => {
    setAddPropertyDialog(false);
  };

  const [property, setProperty] = React.useState({
    propertyID: "",
    mainImage: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    garage: "",
    year: "",
    desc: "",
    tag: "",
    status: "",
    type: "",
    title: "",
    location: "",
    bathrooms: "",
    bedrooms: "",
    rooms: "",
    area: "",
    seller: data.name,
    sellerImage: "",
    price: "",
  });

  const [tag, setTag] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [type, setType] = React.useState("");

  const handleTagChange = (event) => {
    setTag(event.target.value);
    setProperty({ ...property, tag: event.target.value });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setProperty({ ...property, status: event.target.value });
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setProperty({ ...property, type: event.target.value });
  };

  const createNewProperty = async (e) => {
    e.preventDefault();

    try {
      console.log("userDATA");
      console.log(property);
      await axios.post(URL + "/seller", property);
      alert("New Property Created");
      dispatch(getAllProperties());
      dispatch(sellerProperties(data.name));
    } catch (error) {
      console.log(error.response.data);
    }
    handleClose();
  };

  const handleServices = () => {
    setServicesOpen(!openServices);
  };

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
          {data.signupAs === "seller" ? (
            <>
              <ListItem button={true} onClick={() => handleServices()}>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "normal",
                    textDecoration: "none",
                    width: "100%",

                    color: "black",
                  }}
                >
                  Services
                </Typography>
                {!openServices ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={!openServices} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Link to="/myProperties" className={classes.servicesLinks}>
                      My Properties
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Link to="/myProfile" className={classes.servicesLinks}>
                      My Profile
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon style={{ minWidth: "38px" }}>
                      <AddCircleIcon />
                    </ListItemIcon>
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        textDecoration: "none",
                        width: "100%",
                        color: "black",
                      }}
                      onClick={handleClickOpen}
                    >
                      Add Property
                    </Typography>
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          ) : (
            ""
          )}
          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/projects" className={classes.links}>
              Projects
            </Link>
          </ListItem>

          <ListItem button={true} onClick={() => setOpen(false)}>
            <Link to="/contact" className={classes.links}>
              Contact Us
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Dialog
        fullScreen
        open={openAddPropertyDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar style={{ width: "100%" }}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Property Details
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={(e) => createNewProperty(e)}
            >
              save
            </Button>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="md"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <form onSubmit={(e) => createNewProperty(e)}>
            <TextField
              required
              fullWidth
              disabled
              margin="dense"
              label="Seller's Name"
              id="sellerName"
              defaultValue={data.name}
            />
            <TextField
              required
              fullWidth
              margin="dense"
              label="PropertyID"
              id="propertyID"
              value={property.propertyID}
              onChange={(e) =>
                setProperty({ ...property, propertyID: e.target.value })
              }
            />

            <TextField
              required
              fullWidth
              margin="dense"
              label="Title"
              id="title"
              value={property.title}
              onChange={(e) =>
                setProperty({ ...property, title: e.target.value })
              }
            />
            <TextField
              required
              fullWidth
              margin="dense"
              label="Location"
              id="location"
              value={property.location}
              onChange={(e) =>
                setProperty({ ...property, location: e.target.value })
              }
            />

            <TextField
              required
              fullWidth
              margin="dense"
              label="Year"
              placeholder="yy-mm-dd"
              id="fullWidth"
              value={property.year}
              onChange={(e) =>
                setProperty({ ...property, year: e.target.value })
              }
            />

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="price"
                label="Price"
                type="number"
                margin="dense"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.price}
                onChange={(e) =>
                  setProperty({ ...property, price: e.target.value })
                }
              />
              <TextField
                required
                id="garage"
                label="Garage"
                type="number"
                margin="dense"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.garage}
                onChange={(e) =>
                  setProperty({ ...property, garage: e.target.value })
                }
              />
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="tag"
                select
                label="Tag"
                margin="dense"
                value={tag}
                fullWidth
                onChange={handleTagChange}
              >
                {tagOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="status"
                select
                label="Status"
                margin="dense"
                fullWidth
                value={status}
                onChange={handleStatusChange}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="type"
                select
                label="Type"
                margin="dense"
                fullWidth
                value={type}
                onChange={handleTypeChange}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="bathrooms"
                label="Bathrooms"
                type="number"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.bathrooms}
                onChange={(e) =>
                  setProperty({ ...property, bathrooms: e.target.value })
                }
              />
              <TextField
                required
                id="Bedrooms"
                label="Bedrooms"
                type="number"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.bedrooms}
                onChange={(e) =>
                  setProperty({ ...property, bedrooms: e.target.value })
                }
              />

              <TextField
                required
                id="rooms"
                label="rooms"
                type="number"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.rooms}
                onChange={(e) =>
                  setProperty({ ...property, rooms: e.target.value })
                }
              />
              <TextField
                required
                id="area"
                label="area"
                type="number"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                value={property.area}
                onChange={(e) =>
                  setProperty({ ...property, area: e.target.value })
                }
              />
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                required
                fullWidth
                margin="dense"
                label="Image-1"
                id="image1"
                value={property.image1}
                onChange={(e) =>
                  setProperty({ ...property, image1: e.target.value })
                }
              />
              <TextField
                required
                fullWidth
                margin="dense"
                label="Image-2"
                id="image2"
                value={property.image2}
                onChange={(e) =>
                  setProperty({ ...property, image2: e.target.value })
                }
              />
              <TextField
                required
                fullWidth
                margin="dense"
                label="Image-3"
                id="image3"
                value={property.image3}
                onChange={(e) =>
                  setProperty({ ...property, image3: e.target.value })
                }
              />
              <TextField
                required
                fullWidth
                margin="dense"
                label="Image-4"
                id="image4"
                value={property.image4}
                onChange={(e) =>
                  setProperty({ ...property, image4: e.target.value })
                }
              />
              <TextField
                required
                fullWidth
                margin="dense"
                label="Main-Image"
                id="mainImage"
                value={property.mainImage}
                onChange={(e) =>
                  setProperty({ ...property, mainImage: e.target.value })
                }
              />
            </Box>

            <TextField
              required
              fullWidth
              margin="dense"
              label="Seller Image"
              id="sellerImage"
              value={property.sellerImage}
              onChange={(e) =>
                setProperty({ ...property, sellerImage: e.target.value })
              }
            />

            <TextField
              required
              fullWidth
              margin="dense"
              label="Description"
              id="desc"
              value={property.desc}
              onChange={(e) =>
                setProperty({ ...property, desc: e.target.value })
              }
            />
          </form>
        </Container>
      </Dialog>
    </>
  );
};

export default MyDrawer;
