import MenuItems from "./MenuItems";
import data from '../../../data/data.json'



const Menu = () => {

  const {menu_main} = data

  return (
    <div className="container containerHeader ">
      <ul className="listMenuHeader">
        {menu_main.map((item) => {
          return <MenuItems key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
