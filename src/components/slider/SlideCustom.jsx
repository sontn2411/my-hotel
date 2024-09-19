import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "../../scss/components/sliderCustom.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import SlideItem from "./SlideItem";


const datas = [
  {
    id: 1,
    title: "Không gian thoáng mát",
    img: ["https://picsum.photos/id/237/800/600", "https://picsum.photos/id/239/800/600", "https://picsum.photos/id/240/800/600"],
  },
  {
    id: 2,
    title: "Dịch vụ chu đáo",
    img: ["https://picsum.photos/id/241/800/600" , "https://picsum.photos/id/242/800/600" , "https://picsum.photos/id/243/800/600"],
  },
  {
    id: 3,
    title: "Tiện nghi và phòng tắm",
    img: ["https://picsum.photos/id/244/800/600", "https://picsum.photos/id/245/800/600", "https://picsum.photos/id/246/800/600"],
  },
  {
    id: 4,
    title: "Phòng đơn trung cư",
    img: ["https://picsum.photos/id/247/800/600", "https://picsum.photos/id/248/800/600", "https://picsum.photos/id/249/800/600"],
  },
]



const SliderCustom = ({ data, mainTitle }) => {
  


  return (
    <>
    <Swiper     effect={'fade'} navigation={true} modules={[Navigation , EffectFade]} className="mySwiper">
        {datas.map( i =>{


          return (
            <SwiperSlide key={i.id}>
              <div className="row">
                    <div className="col" style={{width: '500px' , height: '700px'}}>
                        {/* <img src={i.img} alt="" />  */}
                        <SlideItem data={i.img} />
                    </div>

                    <div className="col">
                      <h3>{i.title}</h3>
            
                    </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </>
  );
};

SliderCustom.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainTitle: PropTypes.string.isRequired,
};

export default SliderCustom;
