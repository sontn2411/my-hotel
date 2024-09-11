import { Link } from "react-router-dom";
import "../../scss/generic/header.scss";
import iconCall from "../../assets/icons/call.png";
import iconCallHover from "../../assets/icons/callHover.png";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";


  
const Header = () => {
  return (
    <div className="wrapperHeader">
      <div className="headerContainer">
        {/* logo */}
        <div className="headerLogo">
          <Link to="/">
            <h3>Logo</h3>
          </Link>
        </div>

        {/* menu */}
        <div className="headerMenu">
          {/* <ul>
            <li>Giới thiệu</li>
            <li>Phòng</li>
            <li>Ưu đãi</li>
          </ul> */}

          <Menu />
        </div>

        {/* call */}
        <div className="headerCall">
          <a href="tel:02581234456">
            <img src={iconCallHover} alt="call" width="20px" />
            <span>+84 258 1 234 456 </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
