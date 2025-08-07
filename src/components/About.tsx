import React from "react";

const About: React.FC = () => {
  return (
    <div id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/refracted-glass-bg.png')" }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Content Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content - Spans 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Heading with Creative Typography */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                About
                <span className="block text-primary-blue bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
                  EDGE
                </span>
                <span className="block text-2xl lg:text-3xl font-light text-white/60 mt-2">
                  by DIGETO
                </span>
              </h2>
            </div>

            {/* Single Description Paragraph */}
            <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl p-5 shadow-2xl">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                DIGETO is a <span className="text-primary-blue font-semibold">global impact ecosystem</span> founded 
                to connect impact-driven startups with strategic investors, while equipping future talent 
                with real-world skills in sustainability, innovation, and global expansion. EDGE is the core talent initiative within Digeto's ecosystem, designed as a 
                <span className="text-cyan-400 font-semibold"> hands-on accelerator</span> that trains 
                the next generation of impact professionals through real startup projects and global collaboration.
                It's not just another course - it's a launchpad into global impact careers.
              </p>
            </div>
          </div>

          {/* Right Visual Element - Spans 5 columns (IMPROVED STATS PANEL) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            
            {/* IMPROVEMENT: Unified Stats Panel
              - Replaced scattered absolute-positioned cards with a single, clean panel.
              - Uses modern layout (Grid & Flexbox) for perfect alignment and responsiveness.
              - Creates a clear visual hierarchy while maintaining a cohesive, glassmorphism design.
            */}
            <div className="w-full max-w-sm space-y-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-[2.5rem] p-8 shadow-2xl">
                
                {/* Primary Stat: Most important metric, styled to match the main heading */}
                <div className="text-center">
                    <p className="text-6xl font-bold bg-gradient-to-r from-primary-blue to-cyan-400 bg-clip-text text-transparent">
                      90+
                    </p>
                    <p className="text-xl text-white/80 font-light tracking-wide mt-2">
                      Impact Startups
                    </p>
                </div>

                {/* Subtle Divider */}
                <hr className="border-white/20" />

                {/* Secondary Stats: Displayed side-by-side for a balanced layout */}
                <div className="grid grid-cols-2 divide-x divide-white/20">
                    
                    <div className="text-center px-4">
                        <p className="text-4xl font-bold text-white">15+</p>
                        <p className="text-lg text-white/70 font-light mt-1">Countries</p>
                    </div>
                    
                    <div className="text-center px-4">
                        <p className="text-4xl font-bold text-white">€18M+</p>
                        <p className="text-lg text-white/70 font-light mt-1">Funded</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;