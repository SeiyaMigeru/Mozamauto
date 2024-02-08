import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"
import FloatingIcon from "../components/FloatingIcon";
import { AboutUsHero, Footer, VM, Brands, WhoIsMozam, LeadersOfMozam } from "../sections"

const AboutUs = () => {
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
    <main className="relative">
      <Nav/>
      <section className="">
        <AboutUsHero />
      </section>
      <section className="padding">
        <VM/>
      </section>
      <section>
        <WhoIsMozam/>
      </section>
      <section>
        <LeadersOfMozam/>
      </section>
      <section className="padding">
        <Brands/>
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default AboutUs