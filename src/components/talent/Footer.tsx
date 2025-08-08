import React from "react";
import {
  IconWorld,
  IconMail,
  IconBrandLinkedin,
  IconMapPin,
  IconArrowUpRight,
} from "@tabler/icons-react";
// import logo from "../assets/brand/edge-digeto-logo.svg"; // optional

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-primary-blue via-cyan-400 to-primary-blue" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: heading + blurb */}
          <div className="lg:col-span-6">
            {/* <img src={logo} alt="EDGE by Digeto" className="h-8 mb-6" /> */}
            <h3 className="text-4xl font-extrabold text-black">Contact Us</h3>
            <p className="mt-3 text-lg text-neutral-700">
              Ready to <span className="font-semibold">grow your impact</span> with purpose-driven talent?
              Reach out to our team today.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://edge.digeto.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-primary-blue/10 hover:bg-primary-blue/15 text-black px-5 py-3 transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-blue text-white">
                  <IconWorld size={18} />
                </span>
                <span className="font-semibold">www.edge.digeto.com</span>
                <IconArrowUpRight size={18} className="ml-auto text-neutral-600 group-hover:text-black" />
              </a>

              <a
                href="mailto:edge@digeto.com"
                className="group flex items-center gap-3 rounded-full bg-primary-blue/10 hover:bg-primary-blue/15 text-black px-5 py-3 transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-blue text-white">
                  <IconMail size={18} />
                </span>
                <span className="font-semibold">edge@digeto.com</span>
              </a>

              <a
                href="https://www.linkedin.com/company/edge-by-digeto"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full bg-primary-blue/10 hover:bg-primary-blue/15 text-black px-5 py-3 transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-blue text-white">
                  <IconBrandLinkedin size={18} />
                </span>
                <span className="font-semibold">linkedin.com/company/edge-by-digeto</span>
                <IconArrowUpRight size={18} className="ml-auto text-neutral-600 group-hover:text-black" />
              </a>

              <div className="flex items-center gap-3 rounded-full bg-primary-blue/10 text-black px-5 py-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-blue text-white">
                  <IconMapPin size={18} />
                </span>
                <span className="font-semibold">
                  Digeto, 8 bis, rue Abel, 75012 Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Right: quick CTA card */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-3xl bg-gradient-to-br from-primary-blue to-cyan-500 p-8 text-white shadow-md">
              <p className="text-sm opacity-90">Get started</p>
              <h4 className="mt-1 text-2xl font-extrabold leading-tight">
                Join the EDGE community
              </h4>
              <p className="mt-2 text-white/90">
                Apply now or email us your CV to start your impact journey.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:edge@digeto.com?subject=EDGE%20Application"
                  className="block w-full text-center rounded-full bg-white text-primary-blue px-5 py-3 font-semibold hover:bg-white/90 transition"
                >
                  Email your CV
                </a>
                <a
                  href="https://www.jotform.com/form/250922808027052#preview"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-full bg-black/10 px-5 py-3 font-semibold backdrop-blur hover:bg-black/20 transition"
                >
                  Start Application
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} EDGE by Digeto. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="/privacy" className="hover:text-black">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="/terms" className="hover:text-black">Terms</a>
            <span className="opacity-40">•</span>
            <a href="/cookies" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;