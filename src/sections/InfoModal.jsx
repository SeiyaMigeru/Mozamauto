import React, { useEffect, useState } from "react";

const InfoModal = ({ isOpen, onClose, truck }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

const handleInputChange = () => {
  console.log("Input changed");
  const form = document.getElementById("order-form");
  setFormIsValid(form.checkValidity());
};

const handleSubmit = (event) => {
  console.log("Form submitted");
  event.preventDefault();
  // You can add additional logic here if needed.
};

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 modal-overlay ${
        modalVisible ? "visible" : ""
      }`}
    >
      <div className="bg-white p-6 w-1/2 rounded-md shadow-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-montserrat text-xl font-bold">{truck.name}</h2>
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
              src={truck.img}
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
                Information Desk
              </h2>

              <form id="order-form" onSubmit={handleSubmit}>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="work-email"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="work-email"
                      id="work-email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-number"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]*" 
                      name="contact-number"
                      id="contact-number"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="about-details"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Details
                    </label>
                    <textarea
                      id="about-details"
                      name="about-details"
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500"
                      required
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="justify-center flex mt-4">
              <button
                type="submit"
                form="order-form"
                className={`py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${
                  formIsValid
                    ? "bg-gray-600 text-white hover:bg-gray-700"
                    : "bg-gray-300 text-gray-700"
                } `}
                disabled={!formIsValid}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
