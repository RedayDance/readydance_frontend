import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const MyBanner = ({items}) => {

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
        {items.map((it)=>(
          <SwiperSlide key={it.id} className="MyBanner__slideItem">
          <img
          width={"80%"}
          src={process.env.PUBLIC_URL + it.url}
        /> </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MyBanner;
