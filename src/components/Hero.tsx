import StatusPing from "./misc/StatusPing";
import { IconArrowRight } from '@tabler/icons-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/refracted-glass-bg.png')" }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <StatusPing />
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-xl">
              Launch your Impact Career with <span className="text-primary-blue">EDGE</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg font-light text-white md:text-xl">
              Join our hands-on accelerator connecting changemakers with purpose-driven startups, expert mentors, and global networks.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                target="_blank"
                href="https://www.jotform.com/form/250922808027052#preview"
              >
                <button className="rounded-full bg-white text-black px-4 py-2 md:text-lg border border-white/15">
                  Apply by August 25th
                </button>
              </a>
              <a href="#about">
                <button className="flex items-center justify-center space-x-2 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-white px-4 py-2 font-medium md:text-lg">
                  <span>Learn More</span>
                  <IconArrowRight size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;