import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "../../scss/components/sliderCustom.scss";
import { FaArrowRightLong ,FaArrowLeft } from "react-icons/fa6";
import SlideContent from "./SlideContent";
import SlideImage from "./SlideImage";
import { useMediaQuery } from "react-responsive";
;

const SliderCustom = ({ data, mainTitle, leftContent }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const isTabletOrMobile =  useMediaQuery({query : '(max-width:991px)'})

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
        <div className={`ps-3  fs-4 px-4`}>
          {leftContent ?  isTabletOrMobile ? <FaArrowRightLong /> :<FaArrowLeft />  : <FaArrowRightLong /> }
          
        </div>
      </div>
    );
  };
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        navigation={{
          nextEl: ".customNext",
        }}
        pagination={{
          clickable: true,
          el: ".customPagination",
          bulletClass: "customBullet",
          bulletActiveClass: "customBulletActive",
        }}
        
        modules={[Navigation, EffectFade, Pagination]}
        className={`mySwiper ${leftContent ? "left" : ""}` }
        onSlideChange={handleSlideChange}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        {data.map((i) => {
          return (
            <SwiperSlide className="mySwiperContent" key={i.id}>
              <div className="bgSlide"></div>
              <div className={`row ${isTabletOrMobile ? "" : "flex-nowrap"} ${leftContent ? "flex-row-reverse" : ""}`} style={{gap: '2rem'}}>
                <div className="col-7" style={{ height: "550px" }}>
                  <SlideImage data={i.image} />
                </div>
                <div className={`col d-flex ${leftContent ? " justify-content-end " : "justify-content-start"}`} >
                  <SlideContent data={i} mainTitle={mainTitle} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

      <div className="customPagination"></div>
      <div className="customNext">{getRenderNextSlide()}</div>
      </Swiper>
    </>
  );
};

SliderCustom.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainTitle: PropTypes.string.isRequired,
  leftContent : PropTypes.bool.isRequired,
};

export default SliderCustom;
