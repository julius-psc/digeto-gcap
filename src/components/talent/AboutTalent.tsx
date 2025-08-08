import React from "react";

const AboutTalent: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold tracking-tight text-black leading-none">
                About <span className="text-primary-blue">EDGE</span>
              </h2>
              <p className="text-2xl lg:text-3xl font-light text-neutral-600">
                The Global Impact Career Accelerator
              </p>
            </div>

            <p className="text-xl text-neutral-800 leading-relaxed font-light">
              <span className="font-semibold text-primary-blue">EDGE</span> is the Global Impact Career Accelerator powered by Digeto, 
              designed to connect <span className="font-semibold">impact-driven startups</span> with 
              <span className="font-semibold"> strategic investors</span> while cultivating the 
              <span className="font-semibold"> next generation of impact leaders</span>.
            </p>

            <p className="text-xl text-neutral-800 leading-relaxed font-light">
              It combines <span className="font-semibold">hands-on training</span>, 
              <span className="font-semibold"> real-world startup projects</span>, and 
              <span className="font-semibold"> global networking</span> to launch careers in 
              <span className="font-semibold"> social innovation</span>, 
              <span className="font-semibold"> sustainability</span>, and 
              <span className="font-semibold"> digital impact</span>.
            </p>
          </div>

          {/* Right highlight box */}
          <div className="lg:col-span-5">
            <div className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                Why Join EDGE?
              </h3>
              <ul className="space-y-3 text-neutral-800">
                <li>🌍 Global network of peers, mentors & founders</li>
                <li>🎯 Skills in ESG, impact investing, & innovation</li>
                <li>💼 Real-world projects with impact startups</li>
                <li>🚀 Launchpad into global impact careers</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTalent;
