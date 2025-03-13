import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FounderSection from "./sections/Founder";
import Header from "./sections/Header";
import HeroSection from "./sections/Hero";
import LatestUpdates from "./sections/LatestUpdates";
import LegalRepresentative from "./sections/LegalRepresentative";
import MapSection from "./sections/Map";
import Services from "./sections/Service";
import Stats from "./sections/Stat";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <WhyChooseUs />
      <FounderSection />

      <Services />
      <Stats />
      <LatestUpdates />

      <LegalRepresentative />
      <MapSection />

      <Contact />

      <Footer />
    </div>
  );
}
