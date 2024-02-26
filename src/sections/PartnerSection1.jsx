import React, { useContext } from 'react'
import { ShacmanP1, ShacmanP2, ShacmanP3, ShacmanP4,
        FirenzaP1, FirenzaP2, FirenzaP3, FirenzaP4 } from '../assets/images'
import { LanguageContext } from '../language/LanguageContext';
import { partnersSectionContent } from '../pages/partnersContent';

const PartnerSection1 = () => {
  const { language } = useContext(LanguageContext);

  return (

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          {partnersSectionContent[language].shacmanHeader}
        </h2>
        <p class="mt-3 text-black ">
          {partnersSectionContent[language].shacmanSubHeader}
        </p>
      </div>
    
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src={ShacmanP1} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={ShacmanP2} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={ShacmanP3} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={ShacmanP4} alt="Image Description"/>
        </div>

      </div>

      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center pt-10 mt-40">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          {partnersSectionContent[language].firenzaHeader}
        </h2>
        <p class="mt-3 text-black ">
          {partnersSectionContent[language].firenzaSubHeader}
        </p>
      </div>
    
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8 mb-20">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src={FirenzaP1} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={FirenzaP2} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={FirenzaP3} alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={FirenzaP4} alt="Image Description"/>
        </div>

      </div>

    </div>

  )
}

export default PartnerSection1