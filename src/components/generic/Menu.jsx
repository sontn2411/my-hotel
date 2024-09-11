import React, { useState } from "react";
import MenuItem from "./MenuItem";

const menuItemsData = [
  {
    id: 1,
    title: "home",
    childrens: [
      { id: 1.1, title: "home 1.1", childrens: [
        {id : 1.11, title : "home 1.1.1" , childrens : [] }
      ] },
      { id: 1.2, title: "home 1.2", childrens: [] },
    ],
  },
  {
    id: 2,
    title: "About",
    childrens: [
      // { id: 2.1, title: "abount 1.1", childrens: [] }
    ],
  },
  { id: 3, title: "contact", childrens: [] },
];

const Menu = () => {



  return (
    <ul className=" d-flex" style={{gap:'1rem'}}>
      {menuItemsData.map((menu, index) => {
        return (
         <MenuItem key={menu.id} item={menu} />
        );
      })}
    </ul>
  );
};

export default Menu;
