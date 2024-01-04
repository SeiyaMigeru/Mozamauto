import { part } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col
      gap-10 w-full max-container"> 
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span>Try the</span>
          <br />
          <span className="text-stone-500 inline-block mt-3">Excellence of our</span> Truck Parts
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
        Elevate your adventure with confidence, knowing that your vehicle is outfitted with the best-in-class equipment available. 
        Explore our best-selling items. Be <span className="text-lg font-palanquin font-bold">DRIVEN TO PERFECTION.</span>
        </p>
        <div className="mt-11"><Button label="Shop Now"/></div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img
          src={part}
          alt="Truck Parts"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality