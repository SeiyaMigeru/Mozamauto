import React from 'react'

const PartnersHero = () => {
  return (
    <section
      className="w-full  flex xl:flex-row flex-col justify-center
     min-h-[50vh] gap-10 max-container p-2"
    >
      <div
        className="relative xl:w-3/5 flex flex-col justify-center items-center w-full
          max-xl:padding-x pt-28 text-center"
      >
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold">
          Partners Of {" "} <span className="text-stone-500 inline-block mt-3">Mozamauto</span>
        </h1>
      </div>
    </section>
  )
}

export default PartnersHero
