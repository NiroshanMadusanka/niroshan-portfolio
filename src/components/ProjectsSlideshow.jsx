import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import TiltWrapper from "./TiltWrapper";

const ProjectsSlideshow = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slideshow Container */}
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TiltWrapper
              className="glassmorphism-card p-4"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                <img
                  src={projects[currentIndex].imageUrl}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {projects[currentIndex].title}
                </h3>

                <p className="text-gray-600 mb-3 text-sm">
                  {projects[currentIndex].description}
                </p>

                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-900 mb-1">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {projects[currentIndex].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a
                    href={projects[currentIndex].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </a>
                  <a
                    href={projects[currentIndex].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous project"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next project"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-primary-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

export default ProjectsSlideshow;
