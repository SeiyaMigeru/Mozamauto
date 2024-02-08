import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../language/LanguageContext";
import { eventsHome } from "../constants/homeContent";
import { eventHome } from "../assets/images";
import Button from "../components/Button";

const CustomerReviews = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { language } = useContext(LanguageContext);
  const handleButtonClick = () => {
    navigate("/MozamNews");
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex items-center justify-center ${fadeIn ? "fadeIn" : ""}`}
    >
      <div className="relative h-[70vh] overflow-hidden w-full">
        <img
          src={eventHome}
          alt="Background Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div
          className={`absolute inset-0 flex justify-start slideUp  p-10 ${
            fadeIn ? "slideUp" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <h2
              className="font-palanquin text-4xl text-white capitalize font-bold lg:max-w-lg"
              dangerouslySetInnerHTML={{
                __html: eventsHome[language].header,
              }}
            />
            <p
              className="  mt-4 lg:max-w-lg font-montserrat text-white text-lg leading-7"
              dangerouslySetInnerHTML={{
                __html: eventsHome[language].caption,
              }}
            />
            <div className="">
              {" "}
              <div className="mt-11">
                <a href="/mozamnews">
                  <Button
                    onClick={handleButtonClick}
                    label={eventsHome[language].shopLink}
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

export default CustomerReviews;
