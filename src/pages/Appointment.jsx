import Nav from "../components/Nav";
import { AppointmentHero, Calendar, Footer } from "../sections";

const Appointment = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-x ">
        <AppointmentHero />
      </section>
      <section>
        <Calendar/>
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default Appointment;
