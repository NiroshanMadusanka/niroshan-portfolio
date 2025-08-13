import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FixedSidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed left-4 top-20 z-50 hidden lg:flex flex-col space-y-4"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`px-4 py-2 text-left rounded-lg transition-all duration-300 cursor-pointer ${
            activeSection === section.id
              ? "bg-theme-secondary text-white shadow-lg"
              : "bg-theme border-theme text-theme-primary hover:bg-theme-secondary hover:text-white"
          }`}
          whileHover={{ scale: 1.1, x: 10 }}
          whileTap={{ scale: 0.95 }}
          aria-label={section.label}
        >
          {/* Only show label, no additional content */}
          {section.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FixedSidebar;
