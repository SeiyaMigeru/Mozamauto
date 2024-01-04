import { copyrightSign, footerLogo } from "../assets/icons";
import { socialmedia } from "../constants";

const Footer = () => {
  const googleMapsLocationURL = "https://maps.app.goo.gl/DKhmj7NGojxYcAeGA";

  return (
    <footer className="footer-container max-container grid grid-cols-3 grid-rows-2 gap-8">
      {/* Logo */}
      <div className="col-span-1 row-span-1">
        <a href="/">
          <img src={footerLogo} width={150} height={46} alt="Footer Logo" />
        </a>
      </div>

      {/* Description */}
      <p className="mt-6 text-sm text-center justify-self-center leading-7 font-montserrat text-white-400 sm:max-w-sm col-span-1 row-span-1">
        Explore our selection of products and experience excellence in every
        detail
      </p>

      {/* Social Media Icons */}
      <div className="flex items-center gap-5 mt-8 col-span-1 row-span-1 justify-self-end">
        {socialmedia.map((icon) => (
          <div
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            key={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} width={24} height={24} />
          </div>
        ))}
      </div>

      {/* Copyright and Address */}
        <div className="flex justify-start col-span-1 row-span-2 text-white items-center gap-2 font-montserrat cursor-pointer mt-10">
          <img
            src={copyrightSign}
            alt="Copyright Sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All Rights Reserved</p>
        </div>
        <a
          className="flex col-span-1 row-span-2 text-xs mt-5 text-center underline leading-7 font-montserrat justify-self-center text-white-400 sm:max-w-sm "
          href={googleMapsLocationURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Av. Samora Machel, Munhava - Casquinha beira Sofala, 2100
        </a>
        <p className="font-montserrat text-white col-span-1 row-span-2 cursor-pointer items-center flex mt-10 justify-self-end">
          Terms & Conditions
        </p>
    </footer>
  );
};

export default Footer;
