import { Link } from "react-router-dom";
import "../../scss/components/generic/header.scss";
import iconCallHover from "../../assets/icons/callHover.png";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="wrapperHeader">
      <div className="headerContainer">
        {/* logo */}
        <div className="headerLogo">
          <Link className="headerLogoLink" to="/">
            <h3>Logo</h3>
          </Link>
        </div>

        {/* menu */}
        <div className="wrapMenuMainHeader ">
          <div className="wrapMenuHeader">
            <Menu />
          </div>
        </div>
        {/* call */}
        <div className="headerCall">
          <a className="headerCallLink" href="tel:02581234456">
            <img src={iconCallHover} alt="call" width="20px" />
            <span>+84 258 1 234 456 </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
