import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        interval={5500}
        showStatus={false}
      >
        <img src="/images/technology-2.jpg" alt="technology" />
        <img src="/images/travel-2.jpg" alt="travel" />
        <img src="/images/nft-2.png" alt="" />
      </Carousel>
    </div>
  );
};

export default Slider;
