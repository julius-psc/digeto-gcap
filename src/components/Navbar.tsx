import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brand/edge-digeto-logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { kind: "hash", href: "about", label: "About" },
    { kind: "hash", href: "program-structure", label: "Program Structure" },
    { kind: "hash", href: "curriculum", label: "Curriculum" },
    { kind: "hash", href: "what-sets-edge-apart", label: "What Sets EDGE Apart" },
    { kind: "hash", href: "testimonials", label: "Testimonials" },
    { kind: "hash", href: "team", label: "Team" },
    { kind: "hash", href: "fees", label: "Fees" },
    { kind: "route", to: "/startups", label: "For Startups" },
  ] as const;

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    } else {
      navigate("/");
      setIsOpen(false);
    }
  };

  const handleRoute = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    e.preventDefault();
    navigate(to);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <div className="w-[75%] px-6 py-3 border border-white/15 bg-white/10 backdrop-blur-md rounded-full shadow-md">
        <div className="flex justify-between items-center h-16">
          <img
            className="w-28 h-auto cursor-pointer"
            src={logo}
            alt="EDGE Digeto Logo"
            onClick={() => navigate("/")}
          />

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.kind === "route" ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => handleRoute(e, link.to)}
                  className="text-black hover:text-primary-blue transition-all duration-300 tracking-wide hover:scale-105"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-black hover:text-primary-blue transition-all duration-300 tracking-wide hover:scale-105"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              target="_blank"
              href="https://www.jotform.com/form/250922808027052#preview"
              className="bg-primary-blue text-white px-5 py-2.5 rounded-full hover:bg-secondary-blue transition-all duration-300 font-medium transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-blue focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-6 pb-6 space-y-3 bg-white rounded-b-xl">
            {navLinks.map((link) =>
              link.kind === "route" ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => handleRoute(e, link.to)}
                  className="block px-4 py-2 text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-4 py-2 text-gray-600 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="https://www.jotform.com/form/250922808027052#preview"
              className="block px-4 py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-all font-medium transform hover:-translate-y-0.5"
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