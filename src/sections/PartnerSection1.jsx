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
        <p class="mt-3 text-gray-800 ">
          The powerful and flexible theme for all kinds of businesses.
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


      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center pt-10">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          LOVOL
        </h2>
        <p class="mt-3 text-gray-800 ">
          The powerful and flexible theme for all kinds of businesses.
        </p>
      </div>
    
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80" alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" alt="Image Description"/>
        </div>

    
        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="Image Description"/>
        </div>

      </div>

      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center pt-10">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold ">
          FIRENZA
        </h2>
        <p class="mt-3 text-gray-800 ">
          The powerful and flexible theme for all kinds of businesses.
        </p>
      </div>
    
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
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