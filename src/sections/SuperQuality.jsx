import { useContext } from "react";
import { truck1 } from "../assets/images";
import TruckCard from "../components/TruckCard";
import { trucks, statistics } from "../constants";
import { useState } from "react";
import Button from "../components/Button";
import { LanguageContext } from "../language/LanguageContext";
import { superQualityContent } from "../constants/homeContent";
import { useNavigate } from "react-router-dom";

const SuperQuality = () => {
  const { language } = useContext(LanguageContext);
  const [bigTruckImage, setTruckImage] = useState(truck1);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Products");
  };

  return (
    <section
      className="flex justify-between items-center max-lg:flex-col
      gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          dangerouslySetInnerHTML={{
            __html: superQualityContent[language].header,
          }}
        />
        <p
          className=" mt-4 lg:max-w-lg info-text"
          dangerouslySetInnerHTML={{
            __html: superQualityContent[language].caption,
          }}
        />
        <div className="mt-11">
          {" "}
          <div className="mt-11">
            <Button
              onClick={handleButtonClick}
              label={superQualityContent[language].shopLink}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center xl:min-h-[80vh] max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigTruckImage}
          alt="Truck Collection"
          width={610}
          height={502}
          className="object-contain relative z-1"
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

export default SuperQuality;
