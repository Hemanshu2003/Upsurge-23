// import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SliderComponent.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import { EffectCoverflow, Pagination, Navigation, EffectCards } from 'swiper';

import slide_image_1 from '../../assets/images/download.jpeg';
import slide_image_2 from '../../assets/images/download.jpeg';
import slide_image_3 from '../../assets/images/download.jpeg';
import slide_image_4 from '../../assets/images/download.jpeg';
import slide_image_5 from '../../assets/images/download.jpeg';
import slide_image_6 from '../../assets/images/download.jpeg';
import slide_image_7 from '../../assets/images/download.jpeg';
import slide_image_8 from '../../assets/images/download.jpeg';
import slide_image_9 from '../../assets/images/download.jpeg';
import slide_image_10 from '../../assets/images/download.jpeg';

export default function SliderComponent() {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   const newIndex = swiper.realIndex;
  //   setActiveIndex(newIndex);
  // };

  return (
    <div className="slider-section" id="events">
      <h1 className="events_heading">Upsurge Events</h1>
      <Swiper
        // autoplay={{delay :500}
        slideToClickedSlide={true}
        autoHeight={true}
        // effect={"coverflow"}
        effect={'cards'}
        // effect={"creative"}
        // effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // }}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, EffectCards, Pagination, Navigation]}
        className="swiper_container"
        // onSlideChangeTransitionEnd={handleSlideChange}
        onActiveIndexChange={(swiper) => {
          const slides = document.querySelectorAll('.swiper-slide');
          slides.forEach((slide) =>
            slide.classList.remove('swiper-slide-active')
          );
          slides[swiper.realIndex].classList.add('swiper-slide-active');
        }}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 1</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 2</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 3</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 4</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 5</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 6</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 7</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 8</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 9</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
          <div className="slide_content">
            <h1 className="slide_heading">Event 10</h1>
            <p>
              Hello this is a awesome slider with a nice heading and a nice
              description of the card this looks good and thats it for now add
              more later
            </p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="btn">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
