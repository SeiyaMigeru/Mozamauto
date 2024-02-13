import { ShacmanCert, LovolCert, FirenzaCert } from "../assets/images";

const PartnerSection2 = () => {
  return (
    <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto overflow-hidden">
      <div class="relative max-w-[40%] m-auto">
        <div class="flex overflow-x-auto border-gray-600 border-4 snap-mandatory snap-x scroll-smooth rounded-3xl shadow-2xl">
          <img
            className=" flex-shrink-0 w-full flex-grow overflow-x-auto snap-x snap-start object-contain "
            src={ShacmanCert}
            id="slide-1"
            alt="Shacman Certificate"
          />
          <img
            className=" flex-shrink-0 w-full flex-grow overflow-x-auto snap-x snap-start object-contain "
            src={LovolCert}
            id="slide-2"
            alt="Lovol Certificate"
          />
          <img
            className=" flex-shrink-0 w-full flex-grow overflow-x-auto snap-x snap-start object-contain "
            src={FirenzaCert}
            id="slide-3"
            alt="Firenza Certificate"
          />
        </div>
        <div class="flex absolute bottom-8 left-2/4 z-[1] gap-x-4 transform -translate-x-1/2">
          <a
            className=" w-4 h-4 bg-slate-500 opacity-75 rounded-full transition-opacity ease duration-250 hover:opacity-100"
            href="#slide-1"
          />
          <a
            className=" w-4 h-4 bg-slate-500 opacity-75 rounded-full transition-opacity ease duration-250 hover:opacity-100"
            href="#slide-2"
          />
          <a
            className=" w-4 h-4 bg-slate-500 opacity-75 rounded-full transition-opacity ease duration-250 hover:opacity-100"
            href="#slide-3"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection2;
