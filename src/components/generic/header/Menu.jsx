import { homeIcon } from "@/assets";
import MenuItems from "./MenuItems";
import {
  contactIcon,
  experienceIcon,
  foodIcon,
  promotionIcon,
  roomIcon,
  conferenceIcon, utilitieIcon
} from "@/assets";


const menuDataItems = [
  {
    id: 1,
    name: "Trang chủ",
    icon: homeIcon,
    childrens: [
      { id: 1.1, name: "Home 1", childrens: [{ id: 1.11, name: "home 1.1" }] },
      { id: 1.2, name: "home 2" },
    ],
  },
  {
    id: 2,
    name: "Phòng nghỉ",
    icon: roomIcon,
    childrens: [
      {
        id: 2.1 , name : "room 1" , childrens : [],
      } ,
      {
        id : 2.2 , name : "room 2" , childrens : []
      }
    ],
  },
  {
    id: 3,
    name: "Ẩm thực",
    icon: foodIcon,
  },
  {
    id: 4,
    name: "Hội nghị & sự kiện",
    icon: conferenceIcon,
  },
  {
    id: 5,
    name: "Tiện ích",
    icon: utilitieIcon,
  },
  {
    id: 6,
    name: "Ưu đãi",
    icon: promotionIcon,
  },
  {
    id: 7,
    name: "Trải nghiệm",
    icon: experienceIcon,
  },
  {
    id: 8,
    name: "Liên hệ",
    icon: contactIcon,
  },
];

const Menu = () => {
  return (
    <div className="container containerHeader ">
      <ul className="listMenuHeader">
        {menuDataItems.map((item) => {
          return <MenuItems key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
