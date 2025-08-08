import React from "react";
import About from "../components/About";
import KeyMetrics from "../components/KeyMetrics";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
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