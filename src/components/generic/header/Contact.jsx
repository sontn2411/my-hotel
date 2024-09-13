import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="wrapHeaderContact">
      <div className="container headerContainerContact">
        {/* adress */}
        <a href="" className="linkHeader">
        <FaLocationDot />
        <span>20A Trần Quang Khải, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh
        Hòa, Việt Nam</span>
        </a>
        {/*phone  */}
        <a href="" className="linkHeader">
            <FaPhoneAlt />
          +84 258 38 33 888
        </a>
      </div>
    </div>
  );
};

export default Contact;
