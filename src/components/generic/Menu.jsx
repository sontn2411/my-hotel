import MenuItems from "./MenuItems";

const menuItems = [
  {
    id: 1,
    name: "Home",
    childrens: [],
  },
  {
    id: 2,
    name: "About",
    childrens: [
      { id: 2.1, name: "About 1", childrens: [] },
      {
        id: 2.2,
        name: "About 2",
        childrens: [
          {
            id: 2.21,
            name: "about 1.2",
            childrens: [
              {
                id: 2.211,
                name: "about 1.2.1",
                childrens: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Contact",
    childrens: [{ id: 3.1, name: "contact 1", childrens: [] }],
  },
];

const Menu = () => {
  return (
    <ul className="listMenuHeader">
      {menuItems.map((item) => (
        <MenuItems key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
