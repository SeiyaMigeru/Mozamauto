import { part } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col
      gap-10 w-full max-container"> 
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span>We Offer</span>
          <br />
          <span className="text-stone-500 inline-block mt-3">Outstanding</span> Truck Parts
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
        Elevate your journey with confidence, knowing that you've equipped your truck with the best-in-class gear available. 
        Explore our top products and transform your truck into the ultimate driving machine.
        </p>
        <div className="mt-11"><Button label="View Details"/></div>
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