import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProductCard from "../components/ProductCard";

// Add more products here...

export default function Category() {
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
      className="w-full bg-gray-900 flex flex-col lg:flex-col lg:px-5 px-5 pt-[10px]"
    >
      <div className=" flex lg:flex-row justify-between lg:px-2 lg:py-2">
        <h2 className="text-xl lg:text-3xl text-orange-900 ">
          Best charcoal for BBQ
        </h2>
        <h2 className="text-sm lg:text-xl text-line text-orange-900">
          View All{" "}
        </h2>
      </div>

      <div className="w-full lg:h-[500px] flex flex-col lg:flex-row mb-1">
        {/* Left section - image and description */}
        <div className="w-full lg:w-[30%] lg:h[500px] lg:mr-2">
          {/* <img src={lumpstack} className="rounded-2xl lg:px-1 mt-1" /> */}
          <div className="bg--gray-50 text-white py-4 text-left rounded-2xl  lg:mt-40">
            <h1 className="text-sm lg:text-2xl mb-5 font-serif font-bold">
              Premium Lump charcoal
            </h1>
            <h3 className="text-sm lg:text-xl mb-2 font-serif">
              Experience Restaurant-Grade Performance with High Heat, Low Ash
              Lump Charcoal. UK-wide delivery.
            </h3>
          </div>
        </div>

        {/* Right section - product cards */}
        <div className="w-full lg:w-[70%] flex lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 py-2 overflow-x-auto">
          {/* {products.map((product) => (
            <div className="min-w-[250px]">
              <ProductCard
                key={product.id}
                name={product.name}
                img={product.image}
                description={product.description}
                weight={product.weight}
                price={product.price}
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
