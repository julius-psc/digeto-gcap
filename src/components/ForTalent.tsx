import React from 'react'

// A simple icon component for demonstration purposes
const FeatureIcon: React.FC<{ emoji: string; className?: string }> = ({ emoji, className }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-2xl ${className}`}>
    {emoji}
  </div>
);

const ForTalent: React.FC = () => {
  return (
    <div id="for-talent" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-primary-blue">FOR TALENT</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Unlock Your Global{" "}
            <span className="bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
              Impact Career
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            EDGE is not just another course — it’s a launchpad. We bridge the gap between ambition and action,
            equipping you with the real-world skills and network to thrive in the impact economy.
          </p>
        </div>

        {/* Core Program Phases: Learn, Do, Grow */}
        <div className="mx-auto mt-16 max-w-none sm:mt-20">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            
            {/* Learn Phase */}
            <div className="flex flex-col items-center">
              <FeatureIcon emoji="🧠" />
              <h3 className="mt-5 text-2xl font-semibold text-white">Learn</h3>
              <p className="mt-2 text-lg leading-7 text-gray-400">
                Master in-demand skills with expert-led masterclasses and personalized 1:1 mentorship in ESG, impact measurement, marketing, and more.
              </p>
            </div>

            {/* Do Phase */}
            <div className="flex flex-col items-center">
              <FeatureIcon emoji="⚙️" />
              <h3 className="mt-5 text-2xl font-semibold text-white">Do</h3>
              <p className="mt-2 text-lg leading-7 text-gray-400">
                Gain invaluable hands-on experience by working on real projects with our portfolio of innovative, impact-driven startups.
              </p>
            </div>

            {/* Grow Phase */}
            <div className="flex flex-col items-center">
              <FeatureIcon emoji="🌍" />
              <h3 className="mt-5 text-2xl font-semibold text-white">Grow</h3>
              <p className="mt-2 text-lg leading-7 text-gray-400">
                Join a lifelong global network, with access to continuous coaching, exclusive events, and curated job opportunities post-program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForTalent;