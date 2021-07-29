import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const floorData = [
  {
    title: "First Floor",
    image:
      "https://image.freepik.com/free-vector/blueprint-design-plan-house_23-2148316617.jpg",
  },
  {
    title: "Second Floor",
    image:
      "https://image.freepik.com/free-vector/detailed-blueprint-project-house_23-2148324208.jpg",
  },
  {
    title: "Garage",
    image:
      "https://www.cadpro.com/wp-content/uploads/2017/03/Detached-Garage-Plans-1.png",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FloorPlans() {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "#002247" }}>
        Floor Plans
      </Typography>

      <hr style={{ color: "#999", height: "1px" }} />
      {floorData.map((floor, index) => {
        return (
          <Accordion key={index} square={true} style={{ marginBottom: "1rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{floor.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={floor.image}
                alt="floor-img"
                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
