import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials({
  breakpoints,
  slidesPerView,
  spaceBetween,
  children,
}) {
  return (
    <div>
      <Swiper
        breakpoints={breakpoints}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        showsPagination={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {children}
      </Swiper>
    </div>
  );
}
