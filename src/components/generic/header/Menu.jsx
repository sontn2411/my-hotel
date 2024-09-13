import { homeIcon } from "@/assets";
import MenuItems from "./MenuItems";
import { contactIcon, experienceIcon, foodIcon, promotionIcon, roomIcon } from "@/assets";
import { conferenceIcon, utilitieIcon } from "../../../assets";


const menuDataItems = [
  {
    id : 1 ,
    name : "Trang chủ",
    icon : homeIcon
  } ,
  {
    id:2 ,
    name : 'Phòng nghỉ',
    icon : roomIcon
  },
  {
    id: 3, 
    name : "Ẩm thực",
    icon : foodIcon
  },
  {
    id: 4, 
    name : "Hội nghị & sự kiện" ,
    icon : conferenceIcon
  },
  {
    id: 5 ,
    name : "Tiện ích" ,
    icon : utilitieIcon,
  },
  {
    id : 6 ,
    name : "Ưu đãi", 
    icon : promotionIcon
  },
  {
    id:7 , 
    name : "Trải nghiệm",
    icon : experienceIcon
  },
  {
    id : 8 ,
    name : "Liên hệ", 
    icon : contactIcon
  }
]


const Menu = () => {
  return (
    <div className="container containerHeader ">
         <ul className="listMenuHeader">
        {menuDataItems.map(item =>{

          return (
            <MenuItems item={item} />
          )
        })}
    </ul>
    </div>
  );
};

export default Menu;
