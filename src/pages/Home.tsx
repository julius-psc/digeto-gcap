import React from "react";
import Hero from "@/components/Hero";
import AboutTalent from "@/components/talent/AboutTalent";
import ProgramStructureTalent from "@/components/talent/ProgramStructureTalent";
import CurriculumTalent from "@/components/talent/CurriculumTalent";
import WhatSetsEdgeApart from "@/components/talent/WhatSetsEdgeApart";
import TestimonialsTalent from "@/components/talent/TestimonialsTalent";
import ProgramOptionsAndApply from "@/components/talent/ProgramOptionsAndApply";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
        <AboutTalent />
        <ProgramStructureTalent />
        <CurriculumTalent />
        <WhatSetsEdgeApart />
        <TestimonialsTalent />
        <ProgramOptionsAndApply />
        <Footer />
      </section>
    </main>
  );
};

export default Home;