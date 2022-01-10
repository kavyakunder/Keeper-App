import React from "react";
import { FaLightbulb } from "react-icons/fa";

function Header() {
  return (
    <header style={{ display: "flex" }}>
      <FaLightbulb
        color={"white"}
        fontSize={"35px"}
        style={{ marginTop: "6px" }}
      />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
