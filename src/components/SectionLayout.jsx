import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SectionLayout = ({ id, title, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsActive(rect.top <= window.innerHeight / 2 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <section id={id} className="relative min-h-screen">
      <div className="flex">
        {/* Fixed Sidebar Heading */}
        <motion.div
          className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-300 ${
            isActive ? "opacity-100 translate-x-0" : "opacity-50 -translate-x-4"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-theme border-theme border-r-4 px-6 py-4 shadow-lg">
            <h2 className="text-2xl font-bold text-theme-primary whitespace-nowrap">
              {title}
            </h2>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 ml-0">
          <div className="container-custom section-padding">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
