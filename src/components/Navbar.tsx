import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/brand/edge-digeto-logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { kind: "hash", href: "about", label: "About" },
    { kind: "hash", href: "program-structure", label: "Program Structure" },
    { kind: "hash", href: "team", label: "Team" },
    { kind: "hash", href: "fees", label: "Fees" },
    { kind: "route", to: "/startups", label: "For Startups" },
  ] as const;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  // --- Class logic: keep pill on mobile when closed; hide it when expanded. Desktop always keeps pill.
  const baseContainer =
    "w-[92%] sm:w-[88%] lg:w-[60%] px-4 sm:px-6 py-2.5 lg:py-3 rounded-full";
  const mobilePillWhenClosed =
    "bg-white/10 backdrop-blur-md border border-white/15 shadow-md";
  const mobilePillWhenOpen = "bg-transparent backdrop-blur-0 border-0 shadow-none";
  const desktopPill =
    "lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/15 lg:shadow-md";

  return (
    <nav className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <div
        className={`${baseContainer} ${
          isOpen ? mobilePillWhenOpen : mobilePillWhenClosed
        } ${desktopPill}`}
      >
        <div className="flex justify-between items-center h-14 lg:h-16">
          <img
            className="w-28 h-auto cursor-pointer"
            src={logo}
            alt="EDGE Digeto Logo"
            onClick={() => navigate("/")}
          />

          {/* Desktop (unchanged) */}
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

          {/* Desktop CTA (unchanged) */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              target="_blank"
              href="https://www.jotform.com/form/250922808027052#preview"
              className="bg-primary-blue text-white px-5 py-2.5 rounded-full hover:bg-secondary-blue transition-all duration-300 font-medium transform hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile toggle — centered + a11y */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="grid place-items-center h-10 w-10 rounded-full text-primary-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/40 bg-white/70 backdrop-blur-sm ring-1 ring-black/[0.06]"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown: smooth slide + fade */}
        <div
          id="mobile-nav"
          className={`
            lg:hidden overflow-hidden
            transition-[max-height,opacity,transform] duration-300 ease-out
            ${isOpen ? "max-h-[560px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
          `}
        >
          <div className="mt-2 px-4 pt-4 pb-6 bg-white rounded-2xl shadow-sm border border-black/[0.06]">
            <div className="space-y-2">
              {navLinks.map((link) =>
                link.kind === "route" ? (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={(e) => handleRoute(e, link.to)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-all font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Mobile CTA */}
            <a
              href="https://www.jotform.com/form/250922808027052#preview"
              className="mt-4 block text-center px-4 py-3 bg-primary-blue text-white rounded-xl hover:bg-secondary-blue transition-all font-medium transform hover:-translate-y-0.5"
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