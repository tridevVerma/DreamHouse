import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: "90%",
    display: "block",
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  ribbon: {
    textTransform: "capitalize",
    display: "block",
    backgroundColor: "#3454d1",
    color: "white",
    padding: "0.25em 3em",
    position: "absolute",
    top: "20px",
    left: "-40px",
    fontSize: "14px",
    transform: "translate3d(0, 0, 1px) rotate(-45deg)",
  },
  type: {
    display: "inline-block",
    backgroundColor: "#3454d1",
    color: "white",
    padding: "0.25em 0.4em",
  },
  hr: {
    color: "#999",
    width: "100%",
    marginTop: "0rem",
    marginBottom: "0rem",
  },
  verticalCenter: {
    display: "flex",
    alignItems: "center",
    color: "#495057",
  },
  horizontalBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    fontSize: "1rem",
    marginRight: "0.6rem",
  },
  houseTitle: {
    textTransform: "capitalize",
    color: "#495057",
  },
  price: {
    color: "#002247",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
}));
