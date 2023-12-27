import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        We Would Love To Hear Your
        <span className="text-stone-500"> Thoughts & Suggestions</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded">
        <input type="text" placeholder="example@gmail.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Email Us" fullWidth/>
        </div>
      </div>

    </section>
  )
}

export default Subscribe