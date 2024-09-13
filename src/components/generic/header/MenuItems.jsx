import PropTypes from 'prop-types';


const MenuItems = ({ item }) => {
  return (
    <li className={`itemMenuHeader ${item.childrens ? "menuSub" : ""}`}>
      <a href="#" className="linkMenuHeader">
        <span>
            <img src={item.icon} alt={item.name}  width='32px'/>
        </span>
        <span className=""> {item.name} </span>
      </a>

    </li>
  );
};

export default MenuItems;

MenuItems.propTypes = {
    item: PropTypes.object.isRequired,  
}