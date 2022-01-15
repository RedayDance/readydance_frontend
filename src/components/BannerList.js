import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerList = ({ text, addBtn, list }) => {
  return (
    <div className="MySwiperList">
      <h4>{text}</h4>
      <div className="MySwiperList__bar__btn">{addBtn}</div>

      <Swiper
        className="MySwiperList__swiper"
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {list.map((it) => (
          <SwiperSlide key={it.id} className="MySwiperList__slideItem">
            <img
              width="130px"
              src={process.env.PUBLIC_URL + `assets/danceacademy_logo.png`}
            />
            <div className="MySwiperList__rate">⭐️{it.rate}</div>
            <div className="MySwiperList__name">{it.name}</div>
            <div className="MySwiperList__description">{it.location}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BannerList;