import "../scss/components/room.scss";
import data from '../data/data.json';
import SliderCustom from "./SlideCustom";

const Rooms = () => {
  const { rooms } = data;

  return (
    <div className="wrapRoom">
      <div className="roomContainer">
          <SliderCustom data={rooms}  mainTitle='Phòng nghỉ'/>
      </div>
    </div>
  );
};

export default Rooms;
