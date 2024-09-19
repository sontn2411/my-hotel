import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa6"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideImage = ({ data }) => {
  return (
    <Swiper
    navigation={{
        nextEl: ".customNextImg",
        prevEl: ".customPrevImg",
      }}
      modules={[Navigation, EffectFade]}
      className="mySwiper"
      effect={"fade"}
      loop={true}
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
    >
      {data.map((i) => {
        return (
          <SwiperSlide modules={[EffectFade]} effect={"fade"} key={i}>
            <img src={i} />
          </SwiperSlide>
        );
      })}
      <div className="customBtnSlideImg">
            <div className="customNextImg">
                <FaArrowLeft />
            </div>
            <div className="customPrevImg">
                <FaArrowRight />
            </div>
      </div>
    </Swiper>
  );
};

export default SlideImage;
