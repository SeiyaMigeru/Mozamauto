import React from "react";

const VM = () => {
  return (
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div aria-hidden="true" class="flex absolute start-0 -z-[1]">
          <div class="bg-slate-700 opacity-20 blur-3xl w-[1036px] h-[300px] "></div>
        </div>

        <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
          <div class="hidden lg:block lg:col-span-2">
            <img
              class="rounded-xl"
              src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>

          <div class="lg:col-span-4">
            <blockquote>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold text-gray-400">Vision</h1>
              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal ">
              Our objective is to become a robust, creative, and innovative company with 
              national recognition for the quality of our products and professionalism in offering our services.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div aria-hidden="true" class="flex absolute start-0 -z-[1]">
          <div class= " bg-slate-800 opacity-20 blur-3xl w-[1036px] h-[300px] "></div>
        </div>

        <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
          <div class="lg:col-span-4">
            <blockquote>
              <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold text-gray-400">Mission</h1>

              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal ">
              It is our mission to provide services to our clients (companies and organizations in general) with quality, efficiency, responsibility, and integrity, 
              while maintaining professional secrecy and meeting their highest expectations, meeting deadlines for the success of their businesses,
              making them more productive and profitable, through the provision of light and heavy vehicles and passenger transport, among other things.
              </p>
            </blockquote>
          </div>
          <div class="hidden lg:block lg:col-span-2">
            <img
              class="rounded-xl"
              src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VM;
