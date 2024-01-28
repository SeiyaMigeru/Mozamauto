import { useContext, useState, useEffect } from "react";
import DatePicker from "../components/DatePicker";
import { LanguageContext } from "../language/LanguageContext";
import {
  calendarContent,
  datePickerFormContent,
} from "../constants/appointmentContent";
import { getAppointments } from "../functions/sendMail";

const Calendar = ({submitForm}) => {
  const { language } = useContext(LanguageContext);
  const [chosenDate, setChosenDate] = useState(new Date());
  const [isFormValid, setIsFormValid] = useState(false);
  

  const [formData, setFormData] = useState({
    company_name: "",
    company_contact: "",
    email: "",
    details: "",
    date: chosenDate
  });

  useEffect(() => {
    const originalYear = chosenDate.getFullYear();
    const originalMonth = chosenDate.getMonth() + 1; // Adding 1 since months are 0-indexed
    const originalDay = chosenDate.getDate();

    const formattedDate = `${originalYear}-${originalMonth.toString().padStart(2, '0')}-${originalDay.toString().padStart(2, '0')}`
    setFormData(prevState => ({ ...prevState, date: formattedDate }));
  }, [chosenDate]);

  useEffect(() => {
    console.log(formData.date)
  }, [formData]);


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
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight ">
            {calendarContent[language].header}
          </h1>
          <p class="mt-1 md:text-lg text-gray-800 ">
            {calendarContent[language].subHeader}
          </p>

          <div class="mt-8">
            <h2 class="text-lg font-semibold text-gray-800 ">
              {calendarContent[language].expect}
            </h2>

            <ul class="mt-2 space-y-2">
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 mt-0.5 h-5 w-5 text-gray-600 "
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-600 ">
                  {calendarContent[language].troubleFree}
                </span>
              </li>

              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 mt-0.5 h-5 w-5 text-gray-600 "
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-600 ">
                  {calendarContent[language].fast}
                </span>
              </li>

              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 mt-0.5 h-5 w-5 text-gray-600 "
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-600 ">
                  {calendarContent[language].masterful}
                </span>
              </li>
            </ul>
          </div>

          <div class="mt-10 flex items-center gap-x-5">
            <div class="flex -space-x-2">
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              <span class="inline-flex justify-center items-center h-8 w-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
            </div>

            <span class="text-sm text-gray-500">
              {calendarContent[language].trusted}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
            <h2 className="text-xl font-semibold text-gray-800 ">
              {datePickerFormContent[language].choseDate}
            </h2>

            <form>
              <div className="mt-6 grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1  gap-4 lg:gap-6">
                  <DatePicker setChosenDate={setChosenDate} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-company-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      {datePickerFormContent[language].companyName}
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      id="hs-company-hire-us-1"
                      onChange={onChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-company-website-hire-us-1"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      {datePickerFormContent[language].number}
                    </label>
                    <input
                      type="text"
                      name="company_contact"
                      id="hs-company-website-hire-us-1"
                      onChange={onChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-1"
                    className="block mb-2 text-sm text-gray-700 font-medium "
                  >
                    {datePickerFormContent[language].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="hs-work-email-hire-us-1"
                    autoComplete="email"
                    placeholder="johndoe@gmail.com"
                    onChange={onChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="hs-about-hire-us-1"
                    className="block mb-2 text-sm text-gray-700 font-medium "
                  ></label>
                  <textarea
                    id="hs-about-hire-us-1"
                    name="details"
                    rows="4"
                    placeholder={datePickerFormContent[language].comments}
                    onChange={onChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  onClick={handleClick}
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none "
                  disabled={!isFormValid}
                >
                  {datePickerFormContent[language].bookButton}
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                {datePickerFormContent[language].wellGetBack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
