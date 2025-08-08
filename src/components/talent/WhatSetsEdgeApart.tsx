import React from "react";
import { IconTarget, IconBriefcase, IconWorld, IconUserCheck } from "@tabler/icons-react";

const benefits = [
  {
    icon: IconTarget,
    title: "Real-World Impact Training",
    description:
      "Work with startups solving global challenges and learn from experts in ESG, impact investing, and social innovation. Lead your own project to create meaningful impact and build a portfolio that matters.",
  },
  {
    icon: IconBriefcase,
    title: "Career Confidence with Purpose",
    description:
      "Build a CV that reflects your values. With expert coaching and hands-on experience, stand out to mission-driven employers and shape a career aligned with impact.",
  },
  {
    icon: IconWorld,
    title: "Global Network for Life",
    description:
      "Join a worldwide community of purpose-driven peers, mentors, and founders. Stay connected to new opportunities and support long after the program ends.",
  },
];

const audience = [
  "Recent graduates looking to kickstart their career in a meaningful way.",
  "Young professionals seeking to transition into the social impact or venture capital space.",
  "Anyone passionate about impact who wants to learn from the ground up and build a career that matters.",
];

const WhatSetsEdgeApart: React.FC = () => {
  return (
    <section id="what-sets-edge-apart" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-black">
            What Sets <span className="text-primary-blue">EDGE</span> Apart
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl mx-auto">
            EDGE is your launchpad into global impact careers through{" "}
            <span className="font-semibold">hands-on training</span>,{" "}
            <span className="font-semibold">personalised support</span>, and a{" "}
            <span className="font-semibold">lifelong network</span>.
          </p>
        </header>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue text-white mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-neutral-700">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Who Should Apply */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-6">Who Should Apply?</h3>
          <ul className="space-y-4">
            {audience.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">
                  <IconUserCheck size={22} className="text-primary-blue" />
                </span>
                <p className="text-neutral-700">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Previous Cohorts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-primary-blue">Where They're From</h4>
            <p className="mt-2 text-neutral-700">
              Global: Spain, Mexico, Malaysia, Japan, Zimbabwe, South Africa, France, Ireland, Singapore, Nigeria, Hong Kong.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-primary-blue">What They Do</h4>
            <p className="mt-2 text-neutral-700">
              Multidisciplinary: Fintech, Sustainability, Education, Health Tech, Climate Innovation, Social Impact, Marketing, Digital Strategy, International Development, Renewable Energy, Technology & Innovation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-primary-blue">Why They Joined</h4>
            <p className="mt-2 text-neutral-700">
              To launch a purpose-driven global career through real-world experience and a high-impact international network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsEdgeApart;