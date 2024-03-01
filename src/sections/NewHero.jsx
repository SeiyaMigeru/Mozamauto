import React, { useContext, useEffect, useState } from "react";
import { BGHero } from "../assets/images";
import { LanguageContext } from "../language/LanguageContext";
import { heroContent } from "../constants/homeContent";
import { NewHeroBG } from "../assets/images";

const NewHero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex items-center justify-center ${
        fadeIn ? "fadeIn" : ""
      }`}
    >
      <div className="relative h-[100vh] overflow-hidden w-full">
        <img src={NewHeroBG} alt="Background Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-700 opacity-30"></div>
        <div
          className={`absolute inset-0 flex justify-end p-10 slideUp ${
            fadeIn ? "slideUp" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-10 mt-[10rem]">
            <p
              className="text-white font-montserrat text-4xl md:text-8xl font-bold"
              dangerouslySetInnerHTML={{
                __html: heroContent[language].tagline,
              }}
            />
            <p
              className=" font-montserrat text-white text-md sm:text:lg leading-8 sm:max-w-md"
              dangerouslySetInnerHTML={{
                __html: heroContent[language].additionalText,
              }}
            />
            <a
              href="/Products"
              className="w-1/2 mt-10 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent
                   bg-gray-600 text-white hover:bg-gray-700"
              dangerouslySetInnerHTML={{
                __html: heroContent[language].shopLink,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
