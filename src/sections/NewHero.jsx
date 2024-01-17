import React, { useEffect, useState } from "react";
import { BGHero } from "../assets/images";

const NewHero = () => {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      setFadeIn(true);
    }, []);
  
    return (
      <div className={`flex items-center justify-center mt-10 ${fadeIn ? 'fadeIn' : ''}`}>
        <div className="relative w-[90%]">
          <img src={BGHero} alt="Background Hero" className="mx-auto h-auto rounded-3xl" />
          <div className="absolute inset-0 bg-stone-700 opacity-70 rounded-3xl"></div>
          <div className={`absolute inset-0 flex justify-between p-10 slideUp ${fadeIn ? 'slideUp' : ''}`}>
            <div className="flex flex-col items-center justify-center">
              <p className="text-white font-montserrat text-8xl font-bold z-10">
                Driven To <br />
                Perfection
              </p>
              <a
              href="/Products"
                className="w-1/2 mt-10 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent
                   bg-stone-600 text-white hover:bg-stone-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Shop Now
              </a>
            </div>
            <div className={`flex items-center slideUp ${fadeIn ? 'slideUp' : ''}`}>
              <p className=" font-montserrat text-white text-lg leading-8 sm:max-w-md">
                Discover the road ahead with <b>Mozamauto</b>. Our collection
                of powerful trucks is your ticket to unmatched performance,
                combining toughness and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewHero;
  