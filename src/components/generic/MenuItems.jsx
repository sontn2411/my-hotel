import PropTypes from 'prop-types';


const MenuItems = ({ item }) => {
  return (
    <li className={`itemMenuHeader ${item.childrens ? "menuSub" : ""}`}>
      <a href="#" className="linkMenuHeader">
        <span className=""> {item.name} </span>
      </a>

      {/* sub menu */}
      {item.childrens.length > 0 && (
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