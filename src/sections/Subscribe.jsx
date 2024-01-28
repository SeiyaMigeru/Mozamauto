import { LanguageContext } from "../language/LanguageContext";
import { subscribeContent } from "../constants/homeContent";
import { useContext, useEffect, useState  } from "react";

const Subscribe = ({submitForm}) => {
  const {language} = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    email: "",
    details: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const validateForm = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isFormEmpty = Object.values(formData).some((value) => value === "");
    setIsFormValid(!isFormEmpty && isEmailValid);
  };

  const handleClick = (event) => {
    event.preventDefault();

    console.log(formData);

    if (isFormValid) {
      submitForm(formData);
    }
  };

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
          onChange={onChange}
          id="hs-about-hire-us-1"
          name="details"
          rows="4"
          placeholder="Concerns & Suggestions"
          className="py-3 px-4 block w-full border-gray-200 rounded-3xl text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none"
        ></textarea>
      </div>
      <div className="flex rounded-3xl outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 w-full justify-between p-3">
        <input
        onChange={onChange}
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-[50%] focus:outline-none focus:ring-0 email-input"
        />
      <div className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${isFormValid ? 'bg-gray-500 hover:bg-gray-800' : 'bg-gray-400'}`}>
        <button
        onClick={handleClick}
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
