import React from "react";
import { IconRocket, IconBriefcase, IconUsers } from "@tabler/icons-react";

const steps = [
  {
    title: "Weeks 1–2: Develop Your Skills",
    description:
      "Through expert-led masterclasses, workshops, and 1:1 mentorship, you’ll build in-demand skills in impact measurement, ESG, sustainable business, marketing, fundraising, and leadership.",
    icon: IconRocket,
  },
  {
    title: "Weeks 3–12: Gain Real-World Experience",
    description:
      "Work directly with cutting-edge impact startups that are driving change. Contribute to real projects and learn how purpose-driven businesses grow, innovate, and scale globally.",
    icon: IconBriefcase,
  },
  {
    title: "Beyond: Build Your Network",
    description:
      "Join a global cohort of like-minded peers, mentors, and experts. Collaborate across cultures, form lasting relationships, and unlock career opportunities worldwide.",
    icon: IconUsers,
  },
];

const ProgramTalentStructure: React.FC = () => {
  return (
    <section id="program-structure" className="bg-white py-20">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-black">
            Program <span className="text-primary-blue">Structure</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Over three months, the EDGE Talent Program combines training, hands-on experience, 
            and global networking to help you launch a career in impact.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary-blue">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="mb-12 ml-6">
                {/* Icon */}
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue text-white shadow-md">
                  <Icon size={24} />
                </span>
                {/* Content */}
                <h3 className="text-xl font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-neutral-700">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramTalentStructure;