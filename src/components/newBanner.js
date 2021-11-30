import React from "react";
import myImage from '../images/banner.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Parallax,Pagination,Navigation
  } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Parallax,Pagination,Navigation]);

const Banner = () =>{
    return(
        <>
            {/* <img src={myImage} style={{width: "100%"}} alt="" /> */}
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1500}
            parallax={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="slide-wrap">
                        <p data-swiper-parallax="-100%">hello</p>
                        <img src={myImage} style={{width: "100%"}} alt="" />
                        <img data-swiper-parallax="50%" src={myImage} style={{width: "100%"}} alt="" className="parallax-image"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrap">
                        <p data-swiper-parallax="-100%">hello</p>
                        <img src={myImage} style={{width: "100%"}} alt="" />
                        <img data-swiper-parallax="50%" src={myImage} style={{width: "100%"}} alt="" className="parallax-image"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrap">
                        <p data-swiper-parallax="-100%">hello</p>
                        <img src={myImage} style={{width: "100%"}} alt="" />
                        <img data-swiper-parallax="50%" src={myImage} style={{width: "100%"}} alt="" className="parallax-image"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrap">
                        <p data-swiper-parallax="-100%">hello</p>
                        <img src={myImage} style={{width: "100%"}} alt="" />
                        <img data-swiper-parallax="50%" src={myImage} style={{width: "100%"}} alt="" className="parallax-image"/>
                    </div>
                </SwiperSlide>

                
                
            </Swiper>
        </>
    )
}
export default Banner;