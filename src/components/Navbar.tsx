import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/brand/edge-digeto-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: 'about', label: 'About Us' },
    { href: 'highlights', label: 'Program Highlights' },
    { href: 'structure', label: 'Program Structure' },
    { href: 'apply', label: 'How to Apply' },
    { href: 'fees', label: 'Fees' },
    { href: 'footer', label: 'Contact' },
  ];

  // Handle smooth scroll
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="flex justify-center">
      <div className="px-6 py-4 backdrop-blur-sm bg-white bg-opacity-90 w-[80%]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img className="w-36 h-auto" src={logo} alt="EDGE Digeto Logo" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-black hover:text-primary-blue transition-all duration-300 ease-in-out font-medium tracking-wide hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              target="_blank"
              href="https://www.jotform.com/form/250922808027052#preview"
              className="bg-primary-blue text-white px-5 py-2.5 rounded-lg hover:bg-secondary-blue transition-all duration-300 ease-in-out font-medium transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-blue focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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