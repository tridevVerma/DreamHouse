import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
const Location = () => {
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Typography variant="h6" style={{ fontWeight: "bold", color: "#002247" }}>
        Location
      </Typography>

      <hr style={{ color: "#999", height: "1px" }} />

      <Box style={{ width: "100%", height: "40vh" }}>
        <iframe
          title="Saket Metro-Station Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.639474401219!2d77.19931971542744!3d28.520492795893027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b1a0c6336b%3A0xdd65ced276c9866c!2ssaket%20metro%20station!5e0!3m2!1sen!2sin!4v1627420900331!5m2!1sen!2sin"
          style={{ border: "0px", width: "100%", height: "100%" }}
          allowFullScreen={""}
          loading="lazy"
        />
      </Box>
    </Container>
  );
};

export default Location;
