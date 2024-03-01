import React, { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";
import { brandsContent } from "../constants/aboutUsContent";
import { Bank1, Bank2, Bank3, Bank4, Bank5 } from "../assets/images";

const Brands = () => {
  const {language} = useContext(LanguageContext);

  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 class="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 ">
          {brandsContent[language].header}
        </h2>
      </div>

      <div class="flex justify-center flex-wrap gap-6 sm:gap-12 lg:gap-24">
    <img src={Bank1} width={200} class="w-full sm:w-auto lg:w-1/5"/>
    <img src={Bank2} width={200} class="w-full sm:w-auto lg:w-1/5"/>
    <img src={Bank3} width={200} class="w-full sm:w-auto lg:w-1/5"/>
    <img src={Bank4} width={200} class="w-full sm:w-auto lg:w-1/5"/>
    <img src={Bank5} width={200} class="w-full sm:w-auto lg:w-1/5"/>
</div>

    </div>
  );
};

export default Brands;
