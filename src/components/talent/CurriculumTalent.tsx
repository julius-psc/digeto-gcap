import React from "react";
import {
  IconWorld,
  IconBrain,
  IconCurrencyDollar,
  IconLeaf,
  IconUsers,
  IconChartBar,
  IconCompass,
  IconNetwork,
  IconRocket,
} from "@tabler/icons-react";

const curriculum = [
  { icon: IconWorld, title: "Global Business Strategy" },
  { icon: IconBrain, title: "AI For Good" },
  { icon: IconCurrencyDollar, title: "Impact Investment & Venture Strategy" },
  { icon: IconLeaf, title: "ESG Frameworks" },
  { icon: IconUsers, title: "Cross-Cultural Collaboration" },
  { icon: IconChartBar, title: "Global Sales Strategy" },
  { icon: IconCompass, title: "Career Development & Coaching" },
  { icon: IconNetwork, title: "Global Network Access" },
  { icon: IconRocket, title: "Building Your Startup" },
];

const CurriculumTalent: React.FC = () => {
  return (
    <section id="curriculum" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black">
            Curriculum <span className="text-primary-blue">Overview</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            The EDGE Talent Program blends theory with hands-on practice, giving you
            the skills and mindset to thrive in global impact careers.
          </p>
        </header>

        {/* Curriculum grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculum.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue text-white flex-shrink-0"
                  aria-hidden
                >
                  <Icon size={24} />
                </div>
                <div className="leading-snug">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurriculumTalent;