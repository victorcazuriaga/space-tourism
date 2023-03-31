import { Nav } from "./styles";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "../Sidebar";

export const Navbar = () => {
  const midiaQueryMobile = useMediaQuery({
    query: "(max-width:480px)",
  });

  return (
    <>
      {midiaQueryMobile ? (
        <>
          <Sidebar />
        </>
      ) : (
        <Nav>
          <div id="linebar"></div>
          <a>
            <span> 00 </span> HOME
          </a>
          <a>
            {" "}
            <span> 01 </span> DESTINATION
          </a>
          <a>
            {" "}
            <span> 02 </span>
            CREW
          </a>
          <a>
            <span> 03 </span>
            TECHNOLOGY
          </a>
        </Nav>
      )}
    </>
  );
};
