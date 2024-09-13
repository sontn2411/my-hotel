import { useEffect, useState } from "react";
import "@/scss/components/slider.scss";
import slider1 from "@/assets/images/slider1.jpg";
import slider2 from "@/assets/images/slider2.jpg";

const data = [
  {
    id: 1,
    title: "Không gian thoáng mát",
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

    return () => clearInterval(interval);
  }, []);

  // handler btn
  const handleNext = () => {
    setIndexSlide((prevIndex) =>
      prevIndex >= data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndexSlide((prevIndex) =>
      prevIndex <= 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="wrapSlider">
      <div
        className="sliderContainer"
        style={{ transform: `translateX(-${indexSlide * 100}%)` }}
      >
        {/* slider */}
        {data.map((slide, i) => (
          <div key={i} className="sliderItem">
            <img
              src={slide.img}
              alt={slide.title}
              width="100%"
              height="600px"
            />
            <span className="sliderItemTitle">{slide.title}</span>
          </div>
        ))}
      </div>

      {/* btn slider */}
      <button className="SliderBtnPrev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="SliderBtnNext" onClick={handleNext}>
        &#10095;
      </button>

      {/*slider buller  */}
      <div className="sliderBullet">
        {Array.from({ length: data.length }).map((_, i) => (
          <div
            key={i}
            className={`bullet ${indexSlide === i ? "active" : ""}`}
            onClick={() => setIndexSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
