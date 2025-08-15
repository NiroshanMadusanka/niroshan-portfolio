import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => ({
          id: link.href.substring(1),
          element: document.querySelector(link.href),
        }))
        .filter((item) => item.element);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "home"; // Default section

      sections.forEach(({ id, element }) => {
        const { offsetTop, offsetHeight } = element;
        const sectionTop = offsetTop - 100; // Offset for navbar height
        const sectionBottom = offsetTop + offsetHeight - 100;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = id;
        }
      });

      // Handle edge case - when at bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-40 bg-black z-50 border-r border-sky-400/10 hidden md:flex flex-col">
        <div className="flex flex-col h-full p-4">
          <div className="mb-8">
            <h1 className="text-base font-bold text-white mb-1">NIROxDev</h1>
            <div className="w-6 h-0.5 bg-sky-400/80"></div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative transition-all duration-300 font-medium py-2 px-4 rounded-full text-center text-xs text-gray-200
                  ${
                    activeSection === link.href.substring(1)
                      ? "bg-sky-500/20 border border-sky-400/50 shadow-lg shadow-sky-400/20"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/30"
                  }`}
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-full py-2 px-4 rounded-full text-center text-xs font-medium transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/30 text-gray-200"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 bg-black z-50 border border-white/10 rounded-lg">
        <div className="container-custom px-4 py-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium text-sm">Menu</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-sky-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 pb-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-2 px-3 text-sm text-gray-200 hover:text-sky-400 transition-colors duration-200 font-medium rounded-full text-center
                    ${
                      activeSection === link.href.substring(1)
                        ? "bg-sky-500/20 text-sky-300"
                        : "hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
