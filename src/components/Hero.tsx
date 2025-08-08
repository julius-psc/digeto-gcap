import StatusPing from "./misc/StatusPing";
import { IconArrowRight } from '@tabler/icons-react';
import heroImg from '../assets/images/team1.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-white">
      <div className="relative z-10 h-full flex">
        
        {/* Left column - text */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="container mx-auto max-w-xl px-6 lg:px-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6">
                <StatusPing />
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
                Launch your Impact Career with <span className="text-primary-blue">EDGE</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg font-light text-black md:text-xl">
                Join our hands-on accelerator connecting changemakers with purpose-driven startups, expert mentors, and global networks.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <a
                  target="_blank"
                  href="https://www.jotform.com/form/250922808027052#preview"
                >
                  <button className="rounded-full bg-primary-blue text-white px-4 py-2 md:text-lg">
                    Apply by August 25th
                  </button>
                </a>
                <a href="#about">
                  <button className="flex items-center justify-center space-x-2 rounded-full backdrop-blur-md bg-black/10 text-black px-4 py-2 font-medium md:text-lg">
                    <span>Learn More</span>
                    <IconArrowRight size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - image */}
        <div className="hidden lg:block w-1/2 h-full">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;