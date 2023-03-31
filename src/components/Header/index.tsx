import { BoxHeader, Teste } from "./style";
import { logoSvg } from "../../assets/shared/import";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <>
      <BoxHeader>
        <div className="logo">
          <img src={logoSvg} />
        </div>
        <div className="line"></div>
        <div className="menu">
          <Navbar />
        </div>
      </BoxHeader>
    </>
  );
};
