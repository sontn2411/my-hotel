import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
const MenuItems = ({ item }) => {

  const [showChilMenu , setShowChilMenu] = useState(false)

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });


  return (
    <li className={`itemMenuHeader ${item.childrens ? "menuSub" : ""}`}>
      <a href="#" className="linkMenuHeader">
        <span>{item.icon && <img src={item.icon} alt={item.name} />}</span>
        <span className=""> {item.name} </span>

        {isTabletOrMobile &&  (item.childrens && <span onClick={()=>setShowChilMenu(!showChilMenu)} className='showMenuMobi'>{showChilMenu ? <IoIosArrowUp /> :  <FaAngleDown />  }</span>)}
      </a>

      {item.childrens &&
        (isTabletOrMobile ? (
          <div className={`${showChilMenu ? "d-none" : "d-block"}`}> 
          <ul className="" >
              {item.childrens.map(subItem =>     <MenuItems key={subItem.id} item={subItem} /> )
              }
          </ul>
      </div>
        ) : (
          <div className="wrapMenuHeader">
            <ul className="listMenuHeader">
              {item.childrens.map((subItem) => (
                <MenuItems key={subItem.id} item={subItem} />
              ))}
            </ul>
          </div>
        ))}
    </li>
  );
};

export default MenuItems;

MenuItems.propTypes = {
  item: PropTypes.object.isRequired,
};
