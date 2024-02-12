import React, { useContext, useEffect, useState } from "react";
import { ProductHero } from "../assets/images";

const ProductsHero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`flex items-center justify-center ${fadeIn ? "fadeIn" : ""}`}
    >
      <div className="relative h-[70vh] overflow-hidden w-full mt-28">
        <img
          src={ProductHero}
          alt="Background Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-300 opacity-60"></div>
        <div
          className={`absolute inset-0 flex justify-center slideUp  p-10 ${
            fadeIn ? "slideUp" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-center mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold">
              <span class=" text-gray-900">Mozam Auto </span>
              <span className="text-gray-600 inline-block mt-3">
                {" "}
                Trucks & Parts
              </span>
              <h2 class="font-tahoma text-lg text-gray-800">
                We take pride in offering a wide variety of premium products,
                each of which is a testament to quality and endurance.
              </h2>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
