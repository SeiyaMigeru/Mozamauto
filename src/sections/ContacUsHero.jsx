import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from '../language/LanguageContext';
import { contactUsHeroContent } from '../constants/contactUsContent';
import { ContactHero } from "../assets/images";

const ContacUsHero = () => {
  const { language } = useContext(LanguageContext);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className={`flex items-center justify-center ${fadeIn ? "fadeIn" : ""}`}
    >
      <div className="relative h-[90vh] overflow-hidden w-full">
        <img
          src={ContactHero}
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
              dangerouslySetInnerHTML={{
                __html: contactUsHeroContent[language].header,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContacUsHero