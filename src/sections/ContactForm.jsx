import React from "react";
import { useState, useEffect} from "react";
import { sendContactUsForm } from "../functions/sendMail";


const ContactForm = ({formTitle, detailsLabel, submitFormLabel, destination}) => {

  

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    company_contact: "",
    details: "",
    destination: destination
  });

  useEffect(() => {
    console.log(formData);
  }, []);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  

  const submitForm = (event) => {
    event.preventDefault();

    console.log(formData);

    sendContactUsForm(formData);
    
  }


  return (
    <div class=" bg-white flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
      <h2 class="text-xl font-semibold text-gray-800 ">{formTitle} </h2>

      <form>
        <div class="mt-6 grid gap-4 lg:gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                for="hs-firstname-hire-us-1"
                class="block mb-2 text-sm text-gray-700 font-medium "
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="hs-firstname-hire-us-1"
                onChange={onChange}
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>

            <div>
              <label
                for="hs-lastname-hire-us-1"
                class="block mb-2 text-sm text-gray-700 font-medium "
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="hs-lastname-hire-us-1"
                onChange={onChange}
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
          </div>

          <div>
            <label
              for="hs-work-email-hire-us-1"
              class="block mb-2 text-sm text-gray-700 font-medium "
            >
              Work Email
            </label>
            <input
              type="email"
              name="email"
              id="hs-work-email-hire-us-1"
              autocomplete="email"
              onChange={onChange}
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                for="hs-company-hire-us-1"
                class="block mb-2 text-sm text-gray-700 font-medium "
              >
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                id="hs-company-hire-us-1"
                onChange={onChange}
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>

            <div>
              <label
                for="hs-company-website-hire-us-1"
                class="block mb-2 text-sm text-gray-700 font-medium "
              >
                Contact Number
              </label>
              <input
                type="text"
                name="company_contact"
                id="hs-company-website-hire-us-1"
                onChange={onChange}
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
              />
            </div>
          </div>

          <div>
            <label
              for="hs-about-hire-us-1"
              class="block mb-2 text-sm text-gray-700 font-medium "
            >
            {detailsLabel}
            </label>
            <textarea
              id="hs-about-hire-us-1"
              name="details"
              rows="4"
              onChange={onChange}
              class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
            ></textarea>
          </div>
        </div>

        <div class="mt-6 grid">
          <button
            onClick={submitForm}
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-stone-600 text-white hover:bg-stone-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {submitFormLabel}
          </button>
        </div>
      </form>

      <div class="mt-3 text-center">
        <p class="text-sm text-gray-500">
        We'll get back to you within 24-48 hours.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
