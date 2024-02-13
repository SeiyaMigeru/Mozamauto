import React from 'react'
import { ShacmanP1, ShacmanP2, ShacmanP3, ShacmanP4,
        FirenzaP1, FirenzaP2, FirenzaP3, FirenzaP4 } from '../assets/images'

const PartnerSection1 = () => {
  return (

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          SHACMAN
        </h2>
        <p class="mt-3 text-white ">
        Shaanxi Automobile Group Co., Ltd., trading as Shacman was founded in 1968. A Chinese bus and truck manufacturer with headquarters in Xi'an, Shaanxi, China.
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
          FIRENZA
        </h2>
        <p class="mt-3 text-white ">
        Sumo Firenza, a proprietary brand of tyres from Stamford Tyres International, originated from the need to provide a quality yet affordable driving experience to value-seeking customers.
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