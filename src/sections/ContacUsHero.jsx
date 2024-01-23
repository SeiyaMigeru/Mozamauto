import React, { useContext } from 'react'
import { LanguageContext } from '../language/LanguageContext';
import { contactUsHeroContent } from '../constants/contactUsContent';

const ContacUsHero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
    className="w-full  flex xl:flex-row flex-col justify-center
   min-h-[50vh] gap-10 max-container p-2"
  >
    <div
      className="relative xl:w-3/5 flex flex-col justify-center items-center w-full
        max-xl:padding-x pt-28 text-center"
    >
      <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold" dangerouslySetInnerHTML={{__html: contactUsHeroContent[language].header}} />
    </div>
  </section>
  )
}

export default ContacUsHero