import React from 'react';
import { Globe } from 'lucide-react';
import logo from '../assets/brand/digeto.png';

const Footer: React.FC = () => {
  const primaryBlue = "var(--color-primary-blue)";
  const secondaryBlue = "var(--color-secondary-blue)";

  return (
    <footer className="relative text-gray-800 py-12 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: secondaryBlue }}
        ></div>
        <div
          className="absolute top-0 right-0 h-72 w-72 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: primaryBlue }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12 md:text-left md:items-start">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src={logo}
                  alt="EDGE Digeto Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Global Impact Services Company
              </p>
              <p className="text-gray-600 text-sm">Paris, France</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: primaryBlue }}>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@digeto.com"
                  className="block text-gray-600 text-sm hover:text-primary-blue transition-colors duration-300"
                >
                  contact@digeto.com
                </a>
                <a
                  href="https://www.digeto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start text-gray-600 text-sm hover:text-primary-blue transition-colors duration-300"
                >
                  <Globe size={16} className="mr-2" />
                  www.digeto.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: primaryBlue }}>
                Connect With Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* LinkedIn for Digeto */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-semibold text-sm">Digeto</span>
                  <a
                    href="https://linkedin.com/company/digeto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ color: primaryBlue }}
                    aria-label="LinkedIn for Digeto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.64v2.16h.05c.51-.96 1.77-1.97 3.65-1.97 3.9 0 4.61 2.57 4.61 5.91V24h-4v-7.72c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8z" />
                    </svg>
                  </a>
                </div>
                {/* LinkedIn for Accelerator Program */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-semibold text-sm">EDGE</span>
                  <a
                    href="https://www.linkedin.com/showcase/edge-global-career-accelerator-program/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ color: primaryBlue }}
                    aria-label="LinkedIn for Accelerator Program"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.64v2.16h.05c.51-.96 1.77-1.97 3.65-1.97 3.9 0 4.61 2.57 4.61 5.91V24h-4v-7.72c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 w-full">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Digeto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;