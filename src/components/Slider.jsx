import { useEffect, useState } from "react";
import './slider.scss';
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";

const data = [
  {
    id: 1,
    title: "Không gian thoái mát",
    img: slider1,
  },
  {
    id: 2,
    title: "Dịch vụ chu đáo",
    img: slider2,
  },
];

const Slider = () => {
  const [indexSlide, setIndexSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexSlide((prevIndex) => {
        if (prevIndex >= data.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    //clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapperSlider">
      <div className="sliderContainer">
        {data && (
          <div className="silderItem">
            <img
              src={data[indexSlide].img}
              alt={data[indexSlide].title}
              width="100%"
              height="750px"
            />
            <span className="silderItemTitle">
                {data[indexSlide].title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
