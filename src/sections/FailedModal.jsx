import { Failed } from "../assets/icons";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../language/LanguageContext";
import { generalModalContent } from "../constants/modalContent";

const FailedModal = ({ closeModal }) => {
  const modalContentRef = useRef(null);
  const { language } = useContext(LanguageContext);
  

  useEffect(() => {
    // Disable scrolling when the modal is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the modal is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal fixed top-0 left-0 w-full h-full flex items-start justify-center bg-black bg-opacity-50 z-20">
      <div
        ref={modalContentRef}
        className="modal-content flex flex-col justify-center items-center gap-5 bg-white px-15 py-5 rounded-xl shadow-xl min-w-[20vw] overflow-y-auto mt-20"
      >
        <img src={Failed} width={100} />
        <p className="font-bold font-palanquin text-xl">
          {generalModalContent[language].failed}
        </p>
        <button
          onClick={closeModal}
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-1 uppercase rounded-md font-bold font-palanquin"
        >
          {generalModalContent[language].close}
        </button>
      </div>
    </div>
  );
};

export default FailedModal;
