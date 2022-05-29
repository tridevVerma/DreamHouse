import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getSeller } from "../../actions/getSeller";

import { Container, Typography, Box, Button } from "@material-ui/core";
const Description = ({ desc, name }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getSellerInfo = () => {
    dispatch(getSeller(name));
    history.push("/profile");
  };
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Box className="d-flex justify-content-between align-items-center">
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", color: "#002247" }}
        >
          Description
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => getSellerInfo()}
        >
          Contact Agent
        </Button>
      </Box>

      <hr style={{ color: "#999", height: "1px" }} />

      <Typography variant="body1">{desc}</Typography>
    </Container>
  );
};

export default Description;
