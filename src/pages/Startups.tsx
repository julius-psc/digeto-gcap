import React from "react";
import About from "../components/startup/About";
import KeyMetrics from "../components/startup/KeyMetrics";
import Offer from "../components/startup/Offer";
import Testimonials from "../components/startup/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Startups: React.FC = () => {
  return (
    <main>
      <About />
      <KeyMetrics />
      <Offer />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
};

export default Startups;