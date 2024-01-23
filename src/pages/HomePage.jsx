import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  NewHero
} from "../sections";
import FloatingIcon from "../components/FloatingIcon";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";

const HomePage = () => {
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
      <Nav />      
      <section className="padding">
        <NewHero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="bg-gray-600 padding">
        <CustomerReviews />
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
