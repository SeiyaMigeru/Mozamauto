import { arrowRight } from "../assets/icons";
import { truck1 } from "../assets/images";
import Button from "../components/Button";
import TruckCard from "../components/TruckCard";
import { trucks, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigTruckImage, setTruckImage] = useState(truck1);

  return (
    <section
      className="w-full  flex xl:flex-row flex-col justify-center
      min-h-screen gap-10 max-container p-2"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full
          max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-stone-500 mt-3">
          Rugged. Reliable. Ready for Anything
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max:sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-stone-500 inline-block mt-3">
            Heavy Duty
          </span>{" "}
          Trucks
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover the road ahead with <b>Mozamauto</b>. Our collection of
          powerful trucks is your ticket to unmatched performance, combining
          toughness and innovation
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div
          className="flex justify-start items-start flex-wrap
         w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex-1 relative flex justify-center items-center
        xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigTruckImage}
          alt="Truck Collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {trucks.map((truck) => (
            <div key={truck}>
              <TruckCard
                imgURL={truck}
                changeTruckImage={(truck) => setTruckImage(truck)}
                bigTruckImage={bigTruckImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
