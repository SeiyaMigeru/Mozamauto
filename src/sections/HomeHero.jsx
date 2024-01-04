import React from "react";
import { BGHero, SAMPLE } from "../assets/images";

const HomeHero = () => {
  return (
    <section
      className="w-full  flex xl:flex-row flex-col justify-center
    min-h-screen gap-10 max-container p-2"
    >
        <img src={BGHero}/>
    </section>
  );
};

export default HomeHero;
