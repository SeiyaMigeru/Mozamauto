import { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";

const Lang = () => {

  const { language, changeLanguage } = useContext(LanguageContext);
    
  return (
    <div className="flex ml-4 items-center space-x-4">

      <button onClick={() => changeLanguage('en')} className="text-gray-700 text-xs font-montserrat hover:text-gray-900 border-b-2 border-transparent hover:border-gray-500 transition">
        English
      </button>

      <div className="border-l h-6 border-gray-400"></div>

      <button onClick={() => changeLanguage('es')} className="text-gray-700 text-xs font-montserrat hover:text-gray-900 border-b-2 border-transparent hover:border-gray-500 transition">
        Portuguese
      </button>
    </div>
  );
};

export default Lang;
