import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const MyBanner = ({}) => {
  return (
    <div className="MyBanner">
      <Swiper
        className="MyBanner__swiper"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide className="MyBanner__slideItem">Temp Slide 1 </SwiperSlide>
        <SwiperSlide className="MyBanner__slideItem">Temp Slide 2</SwiperSlide>
        <SwiperSlide className="MyBanner__slideItem">Temp Slide 3</SwiperSlide>
        <SwiperSlide className="MyBanner__slideItem">Temp Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MyBanner;
