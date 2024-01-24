import FloatingIcon from '../components/FloatingIcon';
import Nav from '../components/Nav';
import { Footer, ContactUsForm, ContacUsHero, SuccessfullModal, FailedModal} from '../sections';
import React, { useState, useEffect } from "react";
import { sendContactUsForm } from '../functions/sendMail';
import GeneralModal from '../sections/GeneralModal';


const ContactUs = () => {
  const [isFloatingIconFixed, setIsFloatingIconFixed] = useState(true);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [status, setStatus] = useState("loading");

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
    setModalVisibility(true);

    try {
      var result = await sendContactUsForm(formData);
      setStatus("loading");

      console.log(result);

      if (result.data.message === "success") {
        setStatus("success");
      } else {
        setStatus("failed");
      }


      console.log("isModalVisible:", isModalVisible);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("failed");
    }
  };
  

  const closeModal = () => {
    setStatus("loading");
    setModalVisibility(false);
  };

  useEffect(() => {
    console.log(isModalVisible);
  }, [isModalVisible]);

  return (
    <main className="relative">
      <Nav/>
      
      <section className="padding-x ">
        <ContacUsHero/>
      </section>
      <section className='padding'>
        <ContactUsForm submitForm={submitForm}/>
        <FloatingIcon isFixed={isFloatingIconFixed} />
      </section>


      {/* Gumagana na to check mo, nilagay ko lang muna dito. Di siya mapindot pag asa taas eh. Pag natapos mo yung css siguro mapipndot na siya kasi nasa ibabaw na */}
      <GeneralModal isVisible={isModalVisible} status={status} closeModal={closeModal} />


      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default ContactUs