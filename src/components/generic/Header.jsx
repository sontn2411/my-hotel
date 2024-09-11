import { Link } from "react-router-dom";
import "../../scss/generic/header.scss";
import iconCall from "../../assets/icons/call.png";
import iconCallHover from "../../assets/icons/callHover.png";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const menu = [
    {
      id: 1,
      name: "item 1",
      children: [
        { id: 1.1, name: "item 1.1", children: [] },
        {
          id: 1.2,
          name: "item 1.2",
          children: [
            { id: 1.21, name: "item 1.2.1 ", children: [] },
            { id: 1.22, name: "item 1.2.2", children: [] },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "item 2",
      children: [
        { id: 2.1, name: "item 2.1", children: [] },
        { id: 2.2, name: "item 2.2", children: [] },
      ],
    },
    { id: 3, name: "item 3", children: [] },
  ];
  
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
          <ul>
            <li>Giới thiệu</li>
            <li>Phòng</li>
            <li>Ưu đãi</li>
          </ul>
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
