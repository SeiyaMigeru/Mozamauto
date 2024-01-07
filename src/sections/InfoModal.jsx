import React, { useEffect, useState } from "react";

const InfoModal = ({ isOpen, onClose, truck }) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);


  if (!isOpen) {
    return null;
  }

  return (
    <div
  className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-overlay ${
    modalVisible ? "visible" : ""
  }`}
>
      <div className="bg-white p-6 w-1/2 rounded-md shadow-md max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className=" font-montserrat text-xl font-bold">{truck.name}</h2>
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

          <div className=" flex-[.75]">
            <div class=" bg-white flex flex-col border rounded-xl p-4">
              <h2 class="text-xl font-semibold text-gray-800 ">
                Information Desk
              </h2>

              <form>
                <div class="mt-6 grid gap-4 lg:gap-6">
                  <div>
                    <label
                      for="hs-work-email-hire-us-1"
                      class="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      autocomplete="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
                    />
                  </div>
                  <div>
                    <label
                      for="hs-work-email-hire-us-1"
                      class="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Company Name
                    </label>
                    <input
                      type="email"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      autocomplete="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
                    />
                  </div>
                  <div>
                    <label
                      for="hs-work-email-hire-us-1"
                      class="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Contact Number
                    </label>
                    <input
                      type="email"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      autocomplete="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500  disabled:opacity-50 disabled:pointer-events-none "
                    />
                  </div>

                  <div>
                    <label
                      for="hs-about-hire-us-1"
                      class="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Details
                    </label>
                    <textarea
                      id="hs-about-hire-us-1"
                      name="hs-about-hire-us-1"
                      rows="4"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="justify-center flex mt-4">
          <button
            type="submit"
            class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-stone-600 text-white hover:bg-stone-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
