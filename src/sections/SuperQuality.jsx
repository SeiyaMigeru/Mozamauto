import { useContext } from "react";
import { part } from "../assets/images";
import Button from "../components/Button";
import { LanguageContext } from "../language/LanguageContext";
import { superQualityContent } from "../constants/content";

const SuperQuality = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="flex justify-between items-center max-lg:flex-col
      gap-10 w-full max-container"> 
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" dangerouslySetInnerHTML={{__html: superQualityContent[language].header}} />
        <p className=" mt-4 lg:max-w-lg info-text" dangerouslySetInnerHTML={{__html: superQualityContent[language].caption}} />
        <div className="mt-11"><Button label={superQualityContent[language].shopLink}/></div>
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