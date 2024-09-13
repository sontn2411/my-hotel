import "@/scss/components/generic/header.scss";
import Menu from "./Menu";
import { logo } from "@/assets";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";



const Header = () => {
  return (
    <div className="wrapHeader">
      <div className="headerContent">
        {/* contact */}
        <div className="topHeader">
          <div className="wrapHeaderContact">
            <div className="container headerContainerContact">
              {/* adress */}
              <a href="" className="linkHeader">
                <FaLocationDot />
                <span>
                  20A Trần Quang Khải, phường Lộc Thọ, thành phố Nha Trang, tỉnh
                  Khánh Hòa, Việt Nam
                </span>
              </a>
              {/*phone  */}
              <a href="tel:+123456789" className="linkHeader">
                <FaPhoneAlt />
                +84 258 38 33 888
              </a>
            </div>
          </div>
        </div>

        <div className="botHeader">
            {/* item header */}
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
                <div className="itemContent" >
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

          {/* menu  */}
          <div className="wrapMenuMainHeader">
            <div className="wrapMenuHeader">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
