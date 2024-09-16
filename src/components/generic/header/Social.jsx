import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Social = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" }); 
  return (
    <>
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
      {!isTabletOrMobile &&  <div className="languageHeader">
        <span>VI / EN</span>
      </div>}
    </>
  );
};

export default Social;
