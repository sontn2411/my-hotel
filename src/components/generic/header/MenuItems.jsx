import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';


const MenuItems = ({ item }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <li className={`itemMenuHeader ${item.childrens ? "menuSub" : ""}`}>
      <a href="#" className="linkMenuHeader">
        <span>
            {item.icon &&   <img src={item.icon}  alt={item.name} />}
        </span>
        <span className=""> {item.name} </span>

        {/* {isTabletOrMobile &&  (item.childrens && <span className='test'>Show</span>)} */}
  
      </a>

      {item.childrens && (
        <div className="wrapMenuHeader">
          <ul className="listMenuHeader">
            {item.childrens.map((subItem) => (
              <MenuItems key={subItem.id} item={subItem} />
            ))}
          </ul>
        </div>
      )}

    </li>
  );
};

export default MenuItems;

MenuItems.propTypes = {
    item: PropTypes.object.isRequired,  
}