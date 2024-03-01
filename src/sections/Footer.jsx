import { useContext } from "react";
import { copyrightSign, footerLogo } from "../assets/icons";
import { socialmedia } from "../constants";
import { LanguageContext } from "../language/LanguageContext";
import { footerContent } from "../constants/homeContent";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const googleMapsLocationURL = "https://maps.app.goo.gl/DKhmj7NGojxYcAeGA";
  const googleMapsLocationURL2 = "https://maps.app.goo.gl/azGxRwDoFjyuVQGs8";
  return (
    <footer className="footer-container max-container grid grid-cols-3 grid-rows-2 gap-2">
      {/* Logo */}
      <div className="col-span-1 row-span-1 self-start">
        <a href="/" className="">
          <img src={footerLogo} width={200} height={100} alt="Footer Logo" />
        </a>
      </div>

      {/* Description */}
      <p
        className="self-start text-xs md:text-sm text-center leading-7 font-montserrat text-white-400  col-span-1 row-span-1"
        dangerouslySetInnerHTML={{
          __html: footerContent[language].footerTagline,
        }}
      />

      {/* Social Media Icons */}
      <div className="flex items-center gap-5 self-start col-span-1 row-span-1 justify-self-end">
        {socialmedia.map((icon) => (
          <div
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            key={icon.alt}
          >
            <a href={icon.href}>
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </a>
          </div>
        ))}
      </div>

      {/* Copyright and Address */}
      <div className="flex justify-start col-span-1 row-span-2 text-white gap-2 font-montserrat cursor-pointer self-end">
        <img
          src={copyrightSign}
          alt="Copyright Sign"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="self-center">{footerContent[language].copyright}</p>
      </div>
      <div className="flex flex-col self-end">
        <p className="text-white font-montserrat text-xs font-bold text-center tracking-widest md:tracking-[10px] uppercase my-8 md:my-0">
          Beira
        </p>
        <a
          className="mb-3 text-xs underline leading-7 font-montserrat text-white-400 text-center hidden md:block"
          href={googleMapsLocationURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Antiga Estrada N6 Munhava Casquinha Beira Sofala 2100
        </a>
        <p className="text-white font-montserrat text-xs font-bold text-center tracking-widest md:tracking-[10px] uppercase">
          Maputo
        </p>
        <a
          className="text-xs underline leading-7 font-montserrat text-white-400 text-center hidden md:block"
          href={googleMapsLocationURL2}
          target="_blank"
          rel="noopener noreferrer"
        >
          Av. Samora Machel EN4, Tchumene, Matola
        </a>
      </div>

      <p className="font-montserrat text-white col-span-1 row-span-2 cursor-pointer flex justify-self-end self-end">
        {footerContent[language].termsAndCondi}
      </p>
    </footer>
  );
};

export default Footer;
