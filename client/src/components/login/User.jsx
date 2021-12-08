import React from "react";
import { Box, Typography } from "@material-ui/core";

const User = ({ title, para }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#dbdbdb" }}>
        {para}
      </Typography>
    </Box>
  );
};

export default User;
