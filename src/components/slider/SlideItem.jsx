import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideItem = ({data}) => {
  return (
    <>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map(i =>{

            return (
                <SwiperSlide    modules={[EffectFade]}   effect={'fade'} key={i}>
                  <img src={i} />
                </SwiperSlide>
            )
        })}
      </Swiper>
   </>
  );
};

export default SlideItem;
