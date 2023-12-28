import React from 'react';
import Nav from '../components/Nav';
import { Footer, ContactUsForm, ContacUsHero, } from '../sections';

const ContactUs = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="padding-x ">
        <ContacUsHero/>
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