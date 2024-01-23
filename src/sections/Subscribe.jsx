import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Share your ideas with us.
        <span className="text-stone-500">That is how we improve.</span>
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center flex-col gap-5 p-4 justify-between">
        <div className="w-full">
          <label
            for="hs-about-hire-us-1"
            class="block mb-2 text-sm text-gray-700 font-medium "
          ></label>
          <textarea
            id="hs-about-hire-us-1"
            name="details"
            rows="4"
            placeholder="Concerns & Suggestions"
            class="py-3 px-4 block w-full border-gray-200 rounded-3xl text-sm outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none "
          ></textarea>
        </div>
        <div className="flex rounded-3xl outline outline-1 focus:outline-2 focus:outline-stone-500 focus:ring-stone-500 disabled:opacity-50 disabled:pointer-events-none  w-full justify-between p-3">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="w-[50%] focus:outline-none focus:ring-0"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Email Us" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
