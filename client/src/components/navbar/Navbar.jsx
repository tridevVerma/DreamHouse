import React from "react";
import WhiteNavbar from "./WhiteNavbar";
import TransparentNavbar from "./TransparentNavbar";

const Navbar = ({ NavColor }) => {
  return (
    <>
      {NavColor === "white" ? (
        <WhiteNavbar NavColor={NavColor} />
      ) : (
        <TransparentNavbar NavColor={NavColor} />
      )}
    </>
  );
};

export default Navbar;
