import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sweddishtorch from "../assets/sweddishtorch.png";
import soapandbrush from "../assets/soapandbrush.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div id="Hero" className="w-full  flex justify-center item-center ">
      <Slider className="w-full " {...settings}>
        <div>
          <div
            className="w-full lg:px-20 lg:h-[700px] h-[500px] flex flex-col justify-center items-start  gap-4 bg-cover bg-center"
            style={{
              backgroundImage: `url(${soapandbrush})`,
            }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-white px-2  text-2xl lg:text-4xl"
            >
              🖤 Cleanse Deep. Live Pure.
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-m px-2 lg:text-2xl"
            >
              Activated Charcoal Essentials for a Natural Detox.
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-orange-900 px-6 py-3 rounded-lg text-black font-semibold px-2 ml-2"
            >
              Shop now!
            </button>
          </div>
        </div>
        <div>
          <div
            className="w-full lg:px-20 lg:h-[700px] h-[500px] flex flex-col justify-center items-start  gap-4 bg-cover bg-center"
            style={{
              backgroundImage: `url(${sweddishtorch})`,
            }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-white px-2 text-2xl lg:text-4xl"
            >
              The Swedish Torch
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-m px-2 lg:text-2xl"
            >
              Nature’s Original Campfire.
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="50"
              className="bg-orange-900 px-6 py-3 rounded-lg text-black font-semibold ml-2"
            >
              Shop now!
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
