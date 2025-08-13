import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/niroshanmadu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/niroshanmadu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:niroshanmadu531@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} D M N M Dissanayaka. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Designed & developed with ❤️ by me
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
