import React, { useCallback } from "react";
import axios from "axios";
import URL from "../../backendURL";

import { useStyles } from "./style";

import classNames from "classnames";

import { Button, Container, Box } from "@material-ui/core";

import Grow from "@mui/material/Grow";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogout } from "../../actions/userLogout";
import { useDispatch } from "react-redux";

import { openLoginDialog } from "../../actions/openLoginDialog";
import { closeLoginDialog } from "../../actions/closeLoginDialog";
import Login from "../login/Login";
import { getAllProperties } from "../../actions/loadAllProperties";
import { sellerProperties } from "../../actions/sellerProperties";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@mui/icons-material/Close";

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

const TransparentNav = ({ NavColor }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const signInDialog = useSelector((state) => state.loginDialog);
  const data = useSelector((state) => state.currentUser.user);
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [showLogout, setshowLogout] = React.useState(false);
  const openDialog = () => {
    dispatch(openLoginDialog());
  };

  const closeDialog = useCallback(() => {
    dispatch(closeLoginDialog());
  }, [dispatch]);

  const logout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  React.useEffect(() => {
    setLoginDialog(signInDialog);
    if (data.name) {
      closeDialog();
    }
  }, [data.name, signInDialog, closeDialog]);

  return (
    <>
      <Grow in={NavColor === "transparent"}>
        <nav
          className={classNames(
            classes.nav,

            "navbar navbar-expand-lg bg-transparent fixed-top"
          )}
        >
          <div className="container-xl h-100">
            <Link
              className="navbar-brand py-0 mx-0 d-flex align-items-center"
              to="/"
            >
              <HomeIcon
                style={{
                  fontSize: "2.5rem",
                  marginRight: "0.5rem",
                  color: "white",
                }}
              />
              <Typography
                variant="h4"
                style={{ color: "white" }}
                className={classes.logoName}
              >
                Dream House
              </Typography>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse h-100"
              id="navbarSupportedContent"
            >
              <ul
                className={classNames(
                  classes.linksUL,
                  "navbar-nav mx-auto mb-2 mb-lg-0 w-75 h-100 justify-content-around"
                )}
              >
                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    aria-current="page"
                    to="/myProperties"
                  >
                    My Properties
                  </Link>
                </li>

                <li className={classNames(classes.navItem, "nav-item")}>
                  <Link
                    className={classNames(classes.navLinks, "nav-link")}
                    aria-current="page"
                    to="/myProfile"
                  >
                    My Profile
                  </Link>
                </li>
                <li className={classNames(classes.navItem, "nav-item")}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleIcon style={{ fontSize: "14px" }} />}
                    className={classes.addProperty}
                    onClick={handleClickOpen}
                  >
                    Add Property
                  </Button>
                </li>
              </ul>

              {data.name ? (
                <Button
                  variant="text"
                  className={classes.loginLogoutBtn}
                  onMouseOver={() => setshowLogout(true)}
                  onMouseOut={() => setshowLogout(false)}
                  onClick={() => logout()}
                >
                  {showLogout ? "Logout" : data.name}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={classes.myBtn}
                  startIcon={<AddCircleIcon style={{ fontSize: "14px" }} />}
                  onClick={() => openDialog()}
                >
                  SignIn
                </Button>
              )}
            </div>
          </div>
        </nav>
      </Grow>

      <Dialog
        open={loginDialog}
        maxWidth="md"
        fullWidth
        onClose={() => logout()}
      >
        <Login />
      </Dialog>

      <Dialog
        fullScreen
        open={open}
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

export default TransparentNav;
