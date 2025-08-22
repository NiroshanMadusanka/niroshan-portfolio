import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.png";
import TiltWrapper from "./TiltWrapper";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Profile Picture and Name */}
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
            className="mb-6 relative"
          >
            {/* Outer gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>

            {/* Inner pulse ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse opacity-50"></div>

            <TiltWrapper
              className="max-w-xs md:max-w-sm rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative z-10"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
            >
              <div className="glassmorphism-profile p-2">
                <img
                  src={profilePic}
                  alt="D M N M Dissanayaka"
                  className="w-full h-auto object-cover rounded-full"
                />
              </div>
            </TiltWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism-light p-6 mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-theme-primary mb-3">
              D M N M Disanayaka
            </h1>

            <div className="text-lg md:text-xl text-theme-secondary space-y-1">
              <p className="font-semibold">
                Full-Stack Developer | Data Scientist | AI/ML Enthusiast
              </p>
              <p className="text-base md:text-lg">
                Building intelligent solutions through code and data
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Typing Animation and Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          <div className="glassmorphism-light p-6 space-y-4">
            <div className="text-xl md:text-2xl text-theme-secondary font-semibold space-y-2">
              <div>
                <TypingAnimation
                  text="Hi, I'm Niroshan Madusanka..."
                  speed={60}
                  className="inline"
                />
              </div>
              <div>
                <TypingAnimation
                  text="A Full-Stack Developer & Data Scientist"
                  speed={50}
                  delay={1500}
                  className="inline"
                />
              </div>
              <div>
                <TypingAnimation
                  text="passionate about intelligent solutions..."
                  speed={50}
                  delay={3000}
                  className="inline"
                />
              </div>
              <div>
                <TypingAnimation
                  text="Merging code, data, and mathematics."
                  speed={50}
                  delay={4500}
                  className="inline"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glassmorphism-light p-4"
          >
            <div className="flex space-x-6">
              <a
                href="https://github.com/NiroshanMadusanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-gray hover:text-theme-secondary transition-colors duration-200"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/d-m-n-madusanka-disanayaka-54736128b"
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
