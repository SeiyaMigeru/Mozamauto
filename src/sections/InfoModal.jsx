import React, { useContext, useEffect, useState } from "react";
import { FirenzaTire2 } from "../assets/images";
import { LanguageContext } from "../language/LanguageContext";
import { infoModalContent } from "../constants/modalContent";

const InfoModal = ({ onClose, product, submitForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    company_name: "",
    company_contact: "",
    details: "",
    product_name: product.name
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const { language } = useContext(LanguageContext);


  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
    let value = e.target.value;

    // If the field is company_contact and the value is not numeric, replace non-numeric characters
    if (e.target.name === "company_contact" && !/^\d*$/.test(value)) {
      value = value.replace(/\D/g, ""); // Remove non-numeric characters
    }
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
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 modal-overlay visible"
    >
      <div className="bg-white p-6 w-1/2 rounded-md shadow-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-montserrat text-xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white px-2 rounded-md"
          >
            X
          </button>
        </div>
        <div className="flex">
          <div className="flex-1 flex flex-col">
            <img
              className="m-4 self-center"
              src={product.image === "" ? FirenzaTire2 : product.image}
              width={200}
              height={200}
            />
            <div className="m-4 border-t-2 border-gray-500">
              <h3 className="font-semibold font-palanquin mt-2">Info</h3>
            </div>
          </div>

          <div className="flex-[.75]">
            <div className="bg-white flex flex-col border rounded-xl p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {infoModalContent[language].header}
              </h2>

              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="work-email"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      {infoModalContent[language].email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="work-email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      {infoModalContent[language].companyName}
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      id="company-name"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-number"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      {infoModalContent[language].number}
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]*"
                      name="company_contact"
                      id="contact-number"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={onChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      {infoModalContent[language].details}
                    </label>
                    <textarea
                      id="about-details"
                      name="details"
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={onChange}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="justify-center flex mt-4">
              <button
              onClick={handleClick}
                type="submit"
                form="order-form"
                className={`py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${isFormValid
                    ? "bg-gray-600 text-white hover:bg-gray-700"
                    : "bg-gray-300 text-gray-700"
                  } `}
                disabled={!isFormValid}
              >
                {infoModalContent[language].confirm}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
