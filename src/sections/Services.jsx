import { useContext, useEffect, useState } from "react"
import ServiceCard from "../components/ServiceCard"

import { LanguageContext } from "../language/LanguageContext";
import { services } from "../constants/homeContent";

const Services = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services[language].map ((service) => (
        <ServiceCard key={service.label}
        {...service}/>
      ))}
    </section>
  )
}

export default Services