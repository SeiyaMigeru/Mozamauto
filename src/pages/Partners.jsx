import FloatingIcon from "../components/FloatingIcon";
import Nav from "../components/Nav";
import { PartnersHero, PartnerSection1, PartnerSection2, PartnerSection3, Footer } from "../sections";
import React, { useState, useEffect } from "react";

const Partners = () => {
  const [isFloatingIconFixed, setIsFloatingIconFixed] = useState(true);

  const checkFloatingIconPosition = () => {
    const footer = document.querySelector(".footer-container");
    if (!footer) return;

    let footerPosition = footer.offsetTop;
    let parent = footer.offsetParent;
    while (parent) {
      footerPosition += parent.offsetTop;
      parent = parent.offsetParent;
    }

    const scrollPosition = window.scrollY + window.innerHeight;

    console.log("Footer Position:", footerPosition);
    console.log("Scroll Position:", scrollPosition);

    if (scrollPosition >= footerPosition) {
      setIsFloatingIconFixed(false);
    } else {
      setIsFloatingIconFixed(true);
    }
  };

  useEffect(() => {
    checkFloatingIconPosition();
    window.addEventListener("scroll", checkFloatingIconPosition);
    return () => {
      window.removeEventListener("scroll", checkFloatingIconPosition);
    };
  }, []);
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <section className="">
        <PartnersHero />
      </section>
      <section className="padding-x ">
        <PartnerSection1 />
      </section>
      <section className="padding-x overflow-hidden">
        <PartnerSection2 />
      </section>
      <section className="padding ">
        <PartnerSection3 />
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default Partners;
