import React, { useState } from "react";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
} from "../assets/images"; // Update with the correct image paths

const PartnerSection3 = () => {
  const partners = [
    Partner1,
    Partner2,
    Partner7,
    Partner4,
    Partner5,
    Partner6,
    Partner3,
    Partner8,
  ];
  const [showFirstHalf, setShowFirstHalf] = useState(true);

  const toggleHalf = () => {
    setShowFirstHalf((prev) => !prev);
  };

  const visiblePartners = showFirstHalf
    ? partners.slice(0, 4)
    : partners.slice(4);

  return (
    <div className="flex flex-col items-center max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
        <h2 className="text-white">
        Trusted by recognized <b>Chinese Brands</b> to deliver quality products.
        </h2>
      </div>

      <div className="grid w-4/5 grid-cols-4 gap-4">
        {visiblePartners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className={`w-full h-auto ${
              showFirstHalf ? "animate-fade-in" : "animate-fade-out"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={toggleHalf}
          className={`w-4 h-4 mx-1 rounded-full ${
            showFirstHalf ? "bg-gray-800" : "bg-gray-300"
          }`}
        ></button>
        <button
          onClick={toggleHalf}
          className={`w-4 h-4 mx-1 rounded-full ${
            showFirstHalf ? "bg-gray-300" : "bg-gray-800"
          }`}
        ></button>
      </div>
    </div>
  );
};

export default PartnerSection3;
