import React from "react";
import WhiteNav from "./WhiteNav";
import TransparentNav from "./TransparentNav";

const AgentNav = ({ NavColor }) => {
  return (
    <>
      {NavColor === "white" ? (
        <WhiteNav NavColor={NavColor} />
      ) : (
        <TransparentNav NavColor={NavColor} />
      )}
    </>
  );
};

export default AgentNav;
