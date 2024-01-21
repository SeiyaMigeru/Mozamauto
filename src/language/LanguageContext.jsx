// LanguageContext.js
import React, { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  
  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState(storedLanguage || 'en');


  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };