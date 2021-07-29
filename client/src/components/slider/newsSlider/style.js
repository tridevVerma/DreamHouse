import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: "90%",
    display: "block",
    margin: "auto",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
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
  newsTitle: {
    textTransform: "capitalize",
    color: "#495057",
  },
}));
