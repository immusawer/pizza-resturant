import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Chefs from "./components/Chefs";
import BookTable from "./components/BookTable";
import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <About />
        <WhyUs />
        <Stats />
        <Menu />
        <Testimonials />
        <Events />
        <Chefs />
        <BookTable />
        <Gallery />
        {/* <Contact /> */}
      </main>

      <Footer />
    </>
  );
}
