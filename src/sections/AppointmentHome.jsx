import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../language/LanguageContext";
import { AppointmentHero } from "../assets/images";
import { superQualityContent } from "../constants/homeContent";
import Button from "../components/Button";

const AppointmentHome = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { language } = useContext(LanguageContext);
  const handleButtonClick = () => {
    navigate("/Products");
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div
      className={`flex items-center justify-center ${
        fadeIn ? "fadeIn" : ""
      }`}
    >
      <div className="relative h-[80vh] overflow-hidden w-full">
        <img
          src={AppointmentHero}
          alt="Background Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-30"></div>
        <div
          className={`absolute inset-0 flex justify-end p-10 slideUp ${
            fadeIn ? "slideUp" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center mt-24">
            <h2
              className="font-palanquin text-4xl text-white capitalize font-bold lg:max-w-lg"
              dangerouslySetInnerHTML={{
                __html: superQualityContent[language].header,
              }}
            />
            <p
              className="  mt-4 lg:max-w-lg font-montserrat text-white text-lg leading-7"
              dangerouslySetInnerHTML={{
                __html: superQualityContent[language].caption,
              }}
            />
            <div className="">
              {" "}
              <div className="mt-11">
                <a href="/appointment">
                  <Button
                    onClick={handleButtonClick}
                    label={superQualityContent[language].shopLink}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHome;
