import React from "react";
import { Container, Typography } from "@material-ui/core";
const Description = ({ desc }) => {
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "#002247" }}>
        Description
      </Typography>

      <hr style={{ color: "#999", height: "1px" }} />

      <Typography variant="body1">{desc}</Typography>
    </Container>
  );
};

export default Description;
