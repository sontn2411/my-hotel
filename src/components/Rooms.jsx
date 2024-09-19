import "../scss/components/room.scss";
import data from '../data/data.json';
import SliderCustom from "./slider/SlideCustom";

const Rooms = () => {
  const { rooms } = data;

  return (
    <div className="wrapRoom">
      <div className="roomContainer">
          <SliderCustom data={rooms}  mainTitle='Phòng nghỉ 1'/>

          <SliderCustom data={rooms}  mainTitle='Phòng nghỉ 2'  leftContent/>
          
      </div>
    </div>
  );
};

export default Rooms;
