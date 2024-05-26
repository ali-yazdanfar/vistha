// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Testimonial from "./Testimonial";

import "./Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Testimonials() {
    return (
        <div className=" bg-white py-[60px]">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <Testimonial img="images/testi-1.svg " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial img="images/testi-2.svg " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial img="images/testi-3.svg " />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
