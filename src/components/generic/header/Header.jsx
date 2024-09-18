import "@/scss/components/generic/header.scss";
import Menu from "./Menu";
import  logo  from "../../../assets/logo-adamas-boutique-hotel.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import Social from "./Social";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isAnimationMenu, setIsAnimationMenu] = useState(false)


  const handleShowMenu = () => {
    setIsAnimationMenu(!isAnimationMenu)
    if(showMenu){
      setTimeout(()=>setShowMenu(false) ,500)
    }else {
      setShowMenu(true)
    }
  };


  const handleScroll = () => {
    const scrollThreshold = isTabletOrMobile ? 10 : 126;
    setIsFixed(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    if (!isTabletOrMobile) {
      setShowMenu(false);
    }
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu, isTabletOrMobile]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTabletOrMobile]);


  return (
    <div className="wrapHeader">
      <div className="headerContent">
        {/* contact */}
        {!isTabletOrMobile && (
          <div className="topHeader">
            <Contact />
          </div>
        )}

        <div className="botHeader">
          {/* item header */}
          <div className={`wrapItemHeader ${isFixed ? "fixed-top" : ""}`}>
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
                <div className="itemContent">
                  {!isTabletOrMobile && <Social />}
                  <div className="menuBurgerHeader">
                    <span onClick={handleShowMenu}>
                      {showMenu ? (
                        isTabletOrMobile ? (
                          <IoMdClose />
                        ) : (
                          <CiMenuBurger />
                        )
                      ) : (
                        <CiMenuBurger />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* menu  */}
          {(!isTabletOrMobile || showMenu) && (
            <div
              className={`${
                isTabletOrMobile
                  ? "wrapMenuMainHeaderMobile"
                  : "wrapMenuMainHeader"
              }`}
            >
              {isTabletOrMobile && <div onClick={handleShowMenu} className={`wrapMenuHeaderMobile ${isAnimationMenu ? "fadeInRight" : "fadeOutRight"}`}></div>}
              <div className={`wrapMenuHeader ${isTabletOrMobile && (isAnimationMenu   ? "fadeInLeft" : "fadeOutLeft")  }  ${isFixed ? "fixed-top" : ""}`}>
                <Menu />
                {isTabletOrMobile && (
                  <>
                    <Contact />
                    <Social />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
