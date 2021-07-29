import React from "react";
import { Container } from "@material-ui/core";
import PeopleSlider from "../slider/peopleSaysSlider/PeopleSlider";

const PeopleSaysSection = ({ backgroundColor, heading, subHeading }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Container maxWidth="lg">
        <PeopleSlider heading={heading} subHeading={subHeading} />
      </Container>
    </div>
  );
};

export default PeopleSaysSection;
