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
import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "../components/ModalProvider";
import GeneralModal from "../sections/GeneralModal";
import { sendSuggestionForm } from "../functions/sendMail";

const HomePage = () => {
  const [isFloatingIconFixed, setIsFloatingIconFixed] = useState(true);

  const {isModalVisible, status, openModal, closeModal, updateStatus} = useContext(ModalContext);

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

  const submitForm = async (formData) => {
    openModal();

    try {
      var result = await sendSuggestionForm(formData);
      updateStatus("loading");

      console.log(result);

      if (result.data.message === "success") {
        updateStatus("success");
      } else {
        updateStatus("failed");
      }


      console.log("isModalVisible:", isModalVisible);
    } catch (error) {
      console.error("Form submission error:", error);
      updateStatus("failed");
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
        <Subscribe submitForm={submitForm} />
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>

      <GeneralModal isVisible={isModalVisible} status={status} closeModal={closeModal} />

      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
