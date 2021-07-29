import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProperties } from "../../actions/loadAllProperties";

// import { data } from "../../asset/allPropertiesData";

import { Container } from "@material-ui/core";
import CardSlider from "../slider/houseSlider/CardSlider";

const Section = ({ backgroundColor, heading, subHeading, tag }) => {
  const allProperties = useSelector((state) => state.allProperties.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch]);

  let tagFilteredData = allProperties.filter((house) => house.tag === tag);
  if (tagFilteredData.length > 5) {
    tagFilteredData = tagFilteredData.slice(0, 5);
  }
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
        <CardSlider
          heading={heading}
          subHeading={subHeading}
          data={tagFilteredData}
          tag={tag}
        />
      </Container>
    </div>
  );
};

export default Section;
