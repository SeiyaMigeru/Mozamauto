import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  HomeHero
} from "../sections";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <Hero />
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
      <section className="bg-[#f1e9d2] padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="sm:px-16 px-8 sm:pt-6 pt-3 pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
