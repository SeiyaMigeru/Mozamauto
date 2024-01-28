import Nav from "../components/Nav";
import FloatingIcon from "../components/FloatingIcon";
import { AppointmentHero, Calendar, Footer } from "../sections";
import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "../components/ModalProvider";
import GeneralModal from "../sections/GeneralModal";
import { sendAppointmentForm, sendContactUsForm } from "../functions/sendMail";

const Appointment = () => {
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

  const submitForm = async (formData) => {
    openModal();

    try {
      var result = await sendAppointmentForm(formData);
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

  const closeAndRefresh = ()  => {
    closeModal();
    window.location.reload();
  }

  return (
    <main className="relative">
      <Nav />
      <section className="padding-x ">
        <AppointmentHero />
      </section>
      <section className="padding">
        <Calendar submitForm={submitForm }/>
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>

      <GeneralModal isVisible={isModalVisible} status={status} closeModal={closeAndRefresh} />

      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default Appointment;
