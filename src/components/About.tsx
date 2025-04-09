import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import aboutImg from "../assets/images/team-meet2.jpg";

const About: React.FC = () => {
  return (
    <div id="about" className="relative bg-white py-20">
      <div className="container relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            About the{" "}
            <span className="text-[#36B1CF]">
              Global Career Accelerator Program
            </span>
          </h2>
          <div className="h-1 w-24 bg-[#36B1CF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <img
                src={aboutImg}
                alt="Global professionals at work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Are you a recent graduate or professional aiming for a global
              career? Digeto's immersive 3-month Global Career Accelerator
              Program empowers you with the skills, experience, and network to
              succeed in the international arena.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Paris, France, Digeto is a Global Impact Services Company
              specializing in impact investment, global expansion, and impact
              education. We're here to help individuals and businesses create
              positive change on a global scale.
            </p>

            <div className="mt-6 flex items-center space-x-4 py-4 px-6 bg-gradient-to-r from-[#BFE2EB]/30 to-transparent rounded-lg">
              <Sparkles className="h-6 w-6 text-[#36B1CF]" />
              <p className="font-medium text-gray-900">
                <span className="text-[#36B1CF] font-bold">Digeto:</span>{" "}
                Empowering Global Impact.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                target="_blank"
                href="https://www.jotform.com/form/250922808027052#preview"
              >
                <button className="flex items-center justify-center rounded-lg bg-[#36B1CF] px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-[#36B1CF]/90">
                  Join the Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </a>
              <a href="mailto:contact@digeto.com">
                <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-[#36B1CF] shadow-sm transition-all hover:bg-gray-50 hover:border-[#BFE2EB]">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
