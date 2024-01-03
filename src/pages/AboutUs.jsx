import Nav from "../components/Nav"
import { AboutUsHero, Footer, VM, Brands, WhoIsMozam, LeadersOfMozam } from "../sections"

const AboutUs = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="padding-x">
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
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default AboutUs