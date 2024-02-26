import { useContext } from "react";
import { Event1, Event2, Event3, Event4 } from "../assets/images";
import { LanguageContext } from "../language/LanguageContext";
import { newsEventsContent } from "../constants/newsContent";

const MozamEvents = () => {
  const { language } = useContext(LanguageContext);


  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid lg:grid-cols-2 gap-6">
          <a class="group relative block rounded-xl" href="#">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src={Event1}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  {newsEventsContent[language].eventOneHeader}
                </h3>
                <p class="mt-2 text-white/[.8]">
                {newsEventsContent[language].eventOneSubHeader}
                </p>
              </div>
            </div>
          </a>

          <a class="group relative block rounded-xl" href="#">
            <div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src={Event2}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                {newsEventsContent[language].eventTwoHeader}
                </h3>
                <p class="mt-2 text-white/[.8]">
                {newsEventsContent[language].eventTwoSubHeader}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid lg:grid-cols-2 gap-6">
          <a class="group relative block rounded-xl" href="#">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src={Event3}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  {newsEventsContent[language].facebookEventContent}
                </h3>
              </div>
            </div>
          </a>

          <a class="group relative block rounded-xl" href="#">
            <div class="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                class="w-full h-full absolute top-0 start-0 object-cover"
                src={Event4}
                alt="Image Description"
              />
            </div>

            <div class="absolute bottom-0 inset-x-0 z-10">
              <div class="flex flex-col h-full p-4 sm:p-6">
                <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                  {newsEventsContent[language].instagramEventContent}
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MozamEvents;
