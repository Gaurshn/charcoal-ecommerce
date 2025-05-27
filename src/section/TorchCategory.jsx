import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mountain from "../assets/mountain.png";

export default function TorchCategory() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="category"
      className="w-full lg:h-[500px] lg:px-10 px-5 py-5"
      style={{
        backgroundImage: `url(${mountain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[400px] flex flex-row lg:flex-row items-center">
        <p className="lg:block hidden lg:text-2xl text-left font-serif font-extrabold">
          At Moz charcoal, we’re the trusted choice <br />
          for stove suppliers, retailers, and fitters who <br />
          value dependable quality, great service, and a <br />
          hassle-free experience. Our kiln-dried logs are <br />
          Woodsure clean, efficient burning <br />— ideal for all types of solid
          fuel stoves. <br /> <br />
          <br />
          Produced in Maputo, Wales and delivered across the UK
        </p>

        <p className="lg:hidden block text-l text-center">
          At Moz charcoal, we’re the trusted choice for stove suppliers,
          retailers, and fitters who value dependable quality, great service,
          and a hassle-free experience. Our kiln-dried logs are Woodsure
          certified, offering clean, efficient burning
        </p>
      </div>
    </div>
  );
}
