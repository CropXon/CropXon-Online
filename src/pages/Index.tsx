import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

import About from "@/components/About";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import CaseStudies from "@/components/CaseStudies";
import IoTFarming from "@/components/IoTFarming";
import SmartFarming from "@/components/SmartFarming";
import SmartKits from "@/components/SmartKits";
import Finance from "@/components/Finance";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CropXonAssistant from "@/components/CropXonAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section id="government-schemes">
          <GovernmentSchemes />
        </section>
        <section id="iot-farming">
          <IoTFarming />
        </section>
        <section id="smart-farming">
          <SmartFarming />
        </section>
        <section id="smart-kits">
          <SmartKits />
        </section>
        <section id="finance">
          <Finance />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <CropXonAssistant />
    </div>
  );
};

export default Index;
