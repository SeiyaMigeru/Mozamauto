import { ShacmanCert, LovolCert, FirenzaCert } from "../assets/images";
import { trucks, statistics } from "../constants";
import { useContext, useState } from "react";
import TruckCard from "../components/TruckCard";
import { LanguageContext } from "../language/LanguageContext";
import { partnersSectionContent } from "../pages/partnersContent";

const PartnerSection2 = () => {
  const [bigTruckImage, setTruckImage] = useState(ShacmanCert);
  const { language } = useContext(LanguageContext);

  return (
    <div class="px-4 py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto overflow-hidden">
      <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold uppercase text-center pb-10">{partnersSectionContent[language].certificates}</h2>
      <div
        className="flex-1 relative flex justify-center items-center
         max-xl:py-60 bg-cover bg-center pb-36"
      >
        <img
          src={bigTruckImage}
          alt="Truck Collection"
          width={750}
          height={502}
          className="object-contain relative z-10 shadow-2xl rounded-lg"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
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
    </div>
  );
};

export default PartnerSection2;
