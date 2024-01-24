import { LanguageContext } from "../language/LanguageContext";
import { subscribeContent } from "../constants/homeContent";
import { useContext, useEffect, useState  } from "react";

const Subscribe = () => {
  const {language} = useContext(LanguageContext);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const textarea = document.getElementById("hs-about-hire-us-1");
    const emailInput = document.querySelector(".email-input");

    textarea.addEventListener("input", toggleButtonState);
    emailInput.addEventListener("input", toggleButtonState);

    function toggleButtonState() {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
      const isTextareaValid = textarea.value.trim() !== "";
    
      const formIsValid = isEmailValid && isTextareaValid;
      setIsFormValid(formIsValid);
    }

    // Cleanup event listeners when component unmounts
    return () => {
      textarea.removeEventListener("input", toggleButtonState);
      emailInput.removeEventListener("input", toggleButtonState);
    };
  }, []);

  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold" dangerouslySetInnerHTML={{__html: subscribeContent[language].share}} />

      <div className="lg:max-w-[40%] w-full flex items-center flex-col gap-5 p-4 justify-between">
      <div className="w-full">
        <label
          htmlFor="hs-about-hire-us-1"
          className="block mb-2 text-sm text-gray-700 font-medium"
        ></label>
        <textarea
          id="hs-about-hire-us-1"
          name="details"
          rows="4"
          placeholder="Concerns & Suggestions"
          className="py-3 px-4 block w-full border-gray-200 rounded-3xl text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none"
        ></textarea>
      </div>
      <div className="flex rounded-3xl outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 w-full justify-between p-3">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-[50%] focus:outline-none focus:ring-0 email-input"
        />
      <div className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${isFormValid ? 'bg-gray-500 hover:bg-gray-800' : 'bg-gray-400'}`}>
        <button
          type="button"
          className="email-button text-white"
          disabled={!isFormValid}
        >
          Email Us
        </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
