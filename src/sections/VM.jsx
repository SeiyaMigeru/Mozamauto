import React, { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";
import { visionMissionContent } from "../constants/aboutUsContent";
import { Vission, Mission } from "../assets/images";

const VM = () => {
  const {language} = useContext(LanguageContext);

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
              src={Vission}
              alt="Image Description"
            />
          </div>

          <div class="lg:col-span-4">
            <blockquote>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold text-gray-400">{visionMissionContent[language].visionHeader}</h1>
              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal " dangerouslySetInnerHTML={{__html: visionMissionContent[language].visionContent}} />
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
              <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold text-gray-400">{visionMissionContent[language].missionHeader}</h1>

              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal" dangerouslySetInnerHTML={{__html: visionMissionContent[language].missionContent}} />
            </blockquote>
          </div>
          <div class="hidden lg:block lg:col-span-2">
            <img
              class="rounded-xl"
              src={Mission}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VM;
