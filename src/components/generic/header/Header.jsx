import { Link } from "react-router-dom";
import "@/scss/components/generic/header.scss";
import iconCallHover from "@/assets/icons/callHover.png";
import Menu from "./Menu";
import Contact from "./Contact";
import { logo } from "@/assets";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
    <div className="wrapHeader">
      <div className="headerContent">
        <div className="topHeader">
          <Contact />
        </div>

        <div className="botHeader">
          <div className="wrapItemHeader">
            <div className="itemHeader">
              <div className="container containerItem">
                <div className="wrapBookingHeader">
                  <a href="" className="linkItem btnBooking">
                    Đặt Phòng
                    <FaArrowRightLong />
                  </a>
                </div>
                <div className="logoHeader">
                  <a href="linkItem">
                    <img src={logo} className="imagLogo" alt="logo" />
                  </a>
                </div>
                <div className="d-flex " style={{ gap: "14px" }}>
                  <div className="socialHeader">
                    <a href="" className="linkItem">
                      <FaFacebookF />
                    </a>
                    <a href="" className="linkItem">
                      <FaInstagram />
                    </a>
                    <a href="" className="linkItem">
                      <FaTripadvisor />
                    </a>
                  </div>
                  <div className="languageHeader">
                    <span>VI / EN</span>
                  </div>
                  <div className="menuBurgerHeader">
                    <span>
                      <CiMenuBurger />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapMenuMainHeader">
            <div className=" wrapMenuHeader">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
