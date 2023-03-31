import { CloseIcon, Menu, OpenIcon } from "./syles";
import { useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {active ? (
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <OpenIcon onClick={(e) => setActive(false)}></OpenIcon>
        </div>
      ) : (
        <>
          <Menu>
            <div className="menu_close">
              <CloseIcon onClick={(e) => setActive(true)}></CloseIcon>
            </div>
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
          </Menu>
        </>
      )}
    </>
  );
};
