import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.png";
import TiltWrapper from "./TiltWrapper";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="container-custom section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Profile Picture, Name, Title, Contact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <TiltWrapper
              className="max-w-xs md:max-w-sm rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
            >
              <img
                src={profilePic}
                alt="D M N M Dissanayaka"
                className="w-full h-auto object-cover"
              />
            </TiltWrapper>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-theme-primary mb-3"
          >
            D M N M Dissanayaka
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-theme-secondary font-semibold mb-6"
          >
            Full-Stack Developer | Applied Mathematics & Computing Graduate
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/niroshanmadu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-gray hover:text-theme-secondary transition-colors duration-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/niroshanmadu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-gray hover:text-theme-secondary transition-colors duration-200"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:niroshanmadu531@gmail.com"
              className="text-theme-gray hover:text-theme-secondary transition-colors duration-200"
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Detailed Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-theme-primary mb-4">
            About Me
          </h3>

          <p className="text-lg text-theme-gray leading-relaxed">
            Graduate from the University of Jaffna – Vavuniya Campus with a BSc
            in Applied Mathematics and Computing. Passionate about developing
            scalable web applications, computational problem solving, and
            cybersecurity.
          </p>

          <p className="text-lg text-theme-gray leading-relaxed">
            Bridging the gap between mathematics, computing, and secure software
            solutions. I specialize in creating robust full-stack applications
            with modern technologies while maintaining a strong focus on
            security and performance optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
