import React, { useContext, useEffect, useState } from "react";
import { EventHero } from "../assets/images";

const MozamNewsHero = () => {

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
        src={EventHero}
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
          <h1
            className=" text-center mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold"
           
          >
             <span class=" text-gray-900">Mozam News {" "} </span>
            <span className="text-gray-600 inline-block mt-3">and Events</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MozamNewsHero