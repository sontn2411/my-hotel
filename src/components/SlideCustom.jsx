import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "../scss/components/sliderCustom.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const SliderCustom = ({ data, mainTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRenderNextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    const title = data[nextIndex].title;
    const descSort = data[nextIndex].desc_sort;

    return (
      <div className="d-flex align-items-center btnNextContent">
        <div className="d-flex flex-column">
          <span className="fs-3">{title}</span>
          <span>{descSort}</span>
        </div>
        <div className="ps-3 pe-5 fs-4">
          <FaArrowRightLong />
        </div>
      </div>
    );
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const sliceString = (str) => {
    if (str.length > 200) {
      return `${str.slice(0, 200)}...`;
    }
    return str;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
          el: ".customPagination",
          bulletClass: "customBullet",
          bulletActiveClass: "customBulletActive",
        }}
        navigation={{
          nextEl: ".customNext",
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="sliderSwiper"
        onSlideChange={handleSlideChange}
      >
        {data.map((room) => {
          return (
            <SwiperSlide  key={room.id}>
            <img src={room.image} alt={room.title} /> 
            <div className="sliderItemInfo">
              <div className="bgItemInfo"></div>
              <span className="infoMainTitle">{mainTitle}</span>
              <span className="title">{room.title}</span>
              <span className="desc_sort">{room.desc_sort}</span>
              <span className="desc_long">{sliceString(room.desc_long)}</span>
            </div>
          </SwiperSlide>
          )
        })}

        {/* <div className="customPagination"></div>
        <div className="customNext">{getRenderNextSlide()}</div> */}
      </Swiper>
    </>
  );
};

SliderCustom.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainTitle: PropTypes.string.isRequired,
};

export default SliderCustom;
