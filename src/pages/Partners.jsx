import React from "react";
import Nav from "../components/Nav";
import { PartnersHero, PartnerSection1, PartnerSection2, PartnerSection3, Footer } from "../sections";

const Partners = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-x ">
        <PartnersHero />
      </section>
      <section className="padding-x ">
        <PartnerSection1 />
      </section>
      <section className="padding-x ">
        <PartnerSection2 />
      </section>
      <section className="padding-x ">
        <PartnerSection3 />
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default Partners;
