import React from "react";
import CardServices from "./CardServices";
import { register, SwiperContainer, SwiperSlide } from "swiper/element";

const CardServicesContainer = (props) => {
  const services = [1, 2, 3, 4, 5, 6];

  register();

  return (
    <div>
      <h1>Take a Look At Our Services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        consequatur veniam quo blanditiis impedit. Sint tempore officiis sed
        assumenda ea, quasi sapiente debitis tempora libero commodi repellendus
        praesentium ipsam quis.
      </p>
      <swiper-container slides-per-view="1" speed="500" loop="true">
        {services?.map((room, index) => {
          return (
            <swiper-slide key={index}>
              <CardServices />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default CardServicesContainer;
