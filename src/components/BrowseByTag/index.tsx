import {
  BrowseByTagContainer,
  Circle,
  ContentCarousel,
  NavigateMarks,
} from "./style";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import Mark from "../../assets/marks.png";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const BrowseByTag = () => {
  const swiperParams = {
    slidesPerView: 5,
    navigation: true,
  };
  return (
    <BrowseByTagContainer>
      <NavigateMarks>Navegue por marcas</NavigateMarks>
      <ContentCarousel>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src={Mark} />
            </Circle>
          </SwiperSlide>
        </Swiper>
      </ContentCarousel>
    </BrowseByTagContainer>
  );
};
