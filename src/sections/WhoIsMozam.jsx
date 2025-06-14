import React, { useContext } from 'react'
import { LanguageContext } from '../language/LanguageContext'
import { whoIsMozamContent } from '../constants/aboutUsContent';
import { WhoIsMozam } from '../assets/images';

const WhoisMozam = () => {
  const {language} = useContext(LanguageContext);

  return (

    

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img class="rounded-xl" src={WhoIsMozam} alt="Image Description"/>
        </div>

    
        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">

            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 " dangerouslySetInnerHTML={{__html: whoIsMozamContent[language].header}} />
              <p class="text-gray-500" dangerouslySetInnerHTML={{__html: whoIsMozamContent[language].content}} />
            </div>

    

            <ul role="list" class="space-y-2 sm:space-y-4">
              <li class="flex space-x-3">
                <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
    
                <span class="text-sm sm:text-base text-gray-500" dangerouslySetInnerHTML={{__html: whoIsMozamContent[language].outstanding}} />
              </li>
    
              <li class="flex space-x-3">
                <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
    
                <span class="text-sm sm:text-base text-gray-500" dangerouslySetInnerHTML={{__html: whoIsMozamContent[language].highQuality}} />
              </li>
    
              <li class="flex space-x-3">
                <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
    
                <span class="text-sm sm:text-base text-gray-500" dangerouslySetInnerHTML={{__html: whoIsMozamContent[language].passionate}} />
              </li>
            </ul>

          </div>
        </div>

      </div>

    </div>


  )
}

export default WhoisMozam