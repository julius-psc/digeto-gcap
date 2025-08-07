import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/brand/edge-digeto-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'highlights', label: 'For Talent' },
    { href: 'structure', label: 'For Startups' },
    { href: 'apply', label: 'Program Structure' },
    { href: 'fees', label: 'Curriculum' },
    { href: 'footer', label: 'Fees' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <div className="w-[60%] px-6 py-3 border border-white/15 bg-white/10 backdrop-blur-md rounded-full shadow-md">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img className="w-28 h-auto" src={logo} alt="EDGE Digeto Logo" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white hover:text-primary-blue transition-all duration-300 ease-in-out tracking-wide hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              target="_blank"
              href="https://www.jotform.com/form/250922808027052#preview"
              className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-secondary-blue transition-all duration-300 ease-in-out font-medium transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-blue focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-6 pb-6 space-y-3 bg-white rounded-b-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-2 text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.jotform.com/form/250922808027052#preview"
              className="block px-4 py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-all duration-300 font-medium transform hover:-translate-y-0.5"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;