import React from 'react';
import Nav from '../components/Nav';
import { ContactUsHero, Footer, ContactDetails, ContactUsForm } from '../sections';

const ContactUs = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="padding-x ">
        <ContactUsHero />
      </section>
      <section className='padding'>
        <ContactUsForm/>
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default ContactUs