import React from 'react'

const ProductsHero = () => {
  return (
    <section
      className="w-full  flex xl:flex-row flex-col justify-center
     min-h-[50vh] gap-10 max-container p-2"
    >
      <div
        className="relative xl:w-3/5 flex flex-col justify-center items-start w-full
          max-xl:padding-x pt-28 text-center"
      >
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold">
          <span className="text-gray-500 inline-block mt-3">Mozam Auto</span>
           {" "} Trucks & Parts
        </h1>

        <h2 class="font-tahoma text-lg text-gray-800">
        We take pride in offering a wide variety of premium products, each of which is a testament to quality and endurance.
        </h2>
      </div>
    </section>
  )
}

export default ProductsHero
