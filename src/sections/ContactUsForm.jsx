import { useContext, useState } from "react";
import ContactUsForm1 from "./ContactUsForm1";
import ContactUsForm2 from "./ContactUsForm2";
import ContactUsForm3 from "./ContactUsForm3";
import ContactUsForm4 from "./ContactUsForm4";
import ContactForm from "./ContactForm";
import { LanguageContext } from "../language/LanguageContext";
import { formSelectorContent, formsContent } from "../constants/contactUsContent";

const ContactUsForm = ({ submitForm }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { language } = useContext(LanguageContext);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="relative p-6 md:p-16">
        <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl ">
              {formSelectorContent[language].mainHeading}
            </h2>

            <nav
              class="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className={`hs-tab ${
                  activeTab === 1
                    ? "bg-gray-300 text-blue-600"
                    : "bg-white text-blue-600"
                } shadow-md hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl active`}
                onClick={() => handleTabClick(1)}
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span class="flex">
                  <svg
                    class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span class="grow ms-6">
                    <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                      {formSelectorContent[language].informationHeading}
                    </span>
                    <span class="block mt-1 text-gray-800 ">
                      {formSelectorContent[language].informationCaption}
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`hs-tab ${
                  activeTab === 2
                    ? "bg-gray-300 text-blue-600"
                    : "bg-white text-blue-600"
                } shadow-md hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl active`}
                onClick={() => handleTabClick(2)}
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span class="flex">
                  <svg
                    class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span class="grow ms-6">
                    <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                      {formSelectorContent[language].serviceHeading}
                    </span>
                    <span class="block mt-1 text-gray-800 ">
                      {formSelectorContent[language].serviceCaption}
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`hs-tab ${
                  activeTab === 3
                    ? "bg-gray-300 text-blue-600"
                    : "bg-white text-blue-600"
                } shadow-md hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl active`}
                onClick={() => handleTabClick(3)}
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span class="flex">
                  <svg
                    class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span class="grow ms-6">
                    <span
                      class={`block text-lg font-semibold ${
                        activeTab === 3 ? "" : "text-blue-600"
                      }`}
                    >
                      {formSelectorContent[language].partsHeading}
                    </span>
                    <span class="block mt-1 text-gray-800">
                      {formSelectorContent[language].partsCaption}
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`hs-tab ${
                  activeTab === 4
                    ? "bg-gray-300 text-blue-600"
                    : "bg-white text-blue-600"
                } shadow-md hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl active`}
                onClick={() => handleTabClick(4)}
                id="tabs-with-card-item-4"
                data-hs-tab="#tabs-with-card-4"
                aria-controls="tabs-with-card-4"
                role="tab"
              >
                <span class="flex">
                  <svg
                    class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span class="grow ms-6">
                    <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
                      {formSelectorContent[language].salesHeading}
                    </span>
                    <span class="block mt-1 text-gray-800 ">
                      {formSelectorContent[language].salesCaption}
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div class="lg:col-span-6">
            <div class="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  className={activeTab === 1 ? "" : "hidden"}
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <ContactForm
                    submitForm={submitForm}
                    formTitle=  {formsContent[language].information.formTitle}
                    destination={"information"}
                    detailsLabel={formsContent[language].information.detailsLabel}
                    submitFormLabel={formsContent[language].information.submitFormLabel}
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  class="hidden"
                  className={activeTab === 2 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <ContactForm
                    submitForm={submitForm}
                    formTitle={formsContent[language].service.formTitle}
                    destination={"service"}
                    detailsLabel={formsContent[language].service.detailsLabel}
                    submitFormLabel={formsContent[language].service.submitFormLabel}
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  class="hidden"
                  className={activeTab === 3 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <ContactForm
                    submitForm={submitForm}
                    formTitle={formsContent[language].parts.formTitle}
                    destination={"partSales"}
                    detailsLabel={formsContent[language].parts.detailsLabel}
                    submitFormLabel={formsContent[language].parts.submitFormLabel}
                  />
                </div>

                <div
                  id="tabs-with-card-4"
                  class="hidden"
                  className={activeTab === 4 ? "" : "hidden"}
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-4"
                >
                  <ContactForm
                    submitForm={submitForm}
                    formTitle={formsContent[language].sales.formTitle}
                    destination={"sales"}
                    detailsLabel={formsContent[language].sales.detailsLabel}
                    submitFormLabel={formsContent[language].sales.submitFormLabel}
                  />
                </div>
              </div>

              <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  class="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
