import StatusPing from "./misc/StatusPing";
import { IconArrowRight } from "@tabler/icons-react";
import heroImg from "../assets/images/edge-zoom.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const goToApply = () => {
    navigate("/form");
  };

  return (
    <section className="relative w-full bg-white py-32">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        {/* Ping */}
        <div className="mb-6 flex justify-center">
          <StatusPing />
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
          Launch your Impact Career with{" "}
          <span className="text-primary-blue">EDGE</span>
        </h1>

        {/* Subtext */}
        <p className="mb-8 mx-auto max-w-2xl text-lg font-light text-black md:text-xl">
          Join our hands-on accelerator connecting changemakers with
          purpose-driven startups, expert mentors, and global networks.
        </p>

        {/* Buttons */}
        <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <button
            onClick={goToApply}
            className="rounded-full bg-primary-blue px-6 py-3 text-lg font-semibold text-white"
          >
            Apply by August 25th
          </button>

          <a href="#about">
            <button className="flex items-center justify-center space-x-2 rounded-full border border-black/20 bg-black/5 px-6 py-3 text-lg font-medium text-black backdrop-blur-md hover:bg-black/10">
              <span>Learn More</span>
              <IconArrowRight size={20} />
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="rounded-2xl shadow-lg w-full max-w-4xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
