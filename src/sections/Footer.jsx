import { copyrightSign, footerLogo } from "../assets/icons"
import { socialmedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-row">
        
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-sm text-center leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Explore our selection of products and experience excellence in every detail</p>

            <div className="flex items-center gap-5 mt-8">
              {socialmedia.map((icon) => (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={icon.alt}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
       
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img
                src={copyrightSign}
                alt="Copyright Sign"
                width={20}
                height={20}
                className="rounded-ful m-0"
              />
              <p>Copyright. All Rights Reserved</p>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer