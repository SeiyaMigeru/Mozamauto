import  DatePicker  from "../components/DatePicker";

const Calendar = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight ">
            Hire us
          </h1>
          <p class="mt-1 md:text-lg text-gray-800 ">
            We help brands and platforms turn big ideas into beautiful digital
            products and experiences.
          </p>

          <div class="mt-8">
            <h2 class="text-lg font-semibold text-gray-800 ">
              What can I expect?
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
                <span class="text-gray-600 ">Industry-leading design</span>
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
                <span class="text-gray-600 ">Developer community support</span>
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
                <span class="text-gray-600 ">Simple and affordable</span>
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
              Trusted by over 37k customer
            </span>
          </div>
        </div>

        <div class="relative">
          <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
            <h2 class="text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>

            <form>
              <div class="mt-6 grid gap-4 lg:gap-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <DatePicker/>
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
                    name="hs-work-email-hire-us-1"
                    id="hs-work-email-hire-us-1"
                    autocomplete="email"
                    placeholder="johndoe@gmail.com"
                    class="py-3 px-4 block w-full outline outline-1 outline-gray-200 rounded-lg text-sm focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
                  />
                </div>

              </div>

              <div class="mt-6 grid">
                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-stone-600 text-white hover:bg-stone-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  Send inquiry
                </button>
              </div>
            </form>

            <div class="mt-3 text-center">
              <p class="text-sm text-gray-500">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
