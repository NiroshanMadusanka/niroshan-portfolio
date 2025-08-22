import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSlidersH, FaTh } from "react-icons/fa";
import TiltWrapper from "./TiltWrapper";
import ProjectsSlideshow from "./ProjectsSlideshow";
import rentRideImage from "../assets/rent-ride.jpeg";
import doughGoImage from "../assets/doughgo.jpg";
import bmsImage from "../assets/BMS.PNG";
import lmsImage from "../assets/LMS.PNG";

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'slideshow'

  const projects = [
    {
      title: "RENT & RIDE",
      description:
        "Vehicle renting website with PHP backend and role-based user management. Features include booking system, payment integration, and admin dashboard.",
      techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      githubUrl:
        "https://github.com/NiroshanMadusanka/CSC3132_Project_Vehicle_Renting_Website",
      liveUrl: "#",
      imageUrl: rentRideImage,
    },
    {
      title: "DoughGo (Group Project)",
      description:
        "DoughGo is a full-stack bakery delivery management system developed for coordinating bakery item deliveries between bakery owners, drivers, and customers. It includes a React.js web application for bakery owners, a React Native mobile application for drivers and customers, and a Node.js + Express.js + MongoDB backend.",
      techStack: [
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/kavindacena99/DoughGo",
      liveUrl: "#",
      imageUrl: doughGoImage,
    },
    {
      title: "Bank Management System (BMS)",
      description:
        "A comprehensive Java-based Object-Oriented Programming project demonstrating banking operations management. Features include account management, transaction processing, user authentication, and financial reporting.",
      techStack: [
        "Java",
        "OOP Principles",
        "Swing GUI",
        "File I/O",
        "Data Structures",
      ],
      githubUrl:
        "https://github.com/NiroshanMadusanka/oop_project/tree/main/Bank-Management-System/src",
      liveUrl: "#",
      imageUrl: bmsImage,
    },
    {
      title: "Library Management System (LMS)",
      description:
        "A Python-based Object-Oriented Programming project showcasing library operations management. Includes book catalog management, member registration, borrowing/returning system, and inventory tracking with clean modular architecture.",
      techStack: [
        "Python",
        "OOP Principles",
        "Tkinter GUI",
        "File Handling",
        "Modular Design",
      ],
      githubUrl:
        "https://github.com/NiroshanMadusanka/oop_project/tree/main/Library-Management-System",
      liveUrl: "#",
      imageUrl: lmsImage,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-theme">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my diverse technical expertise across Full-Stack
            Development, Data Science, AI/ML, and Object-Oriented Programming
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-primary-600 text-white"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              <FaTh size={14} />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode("slideshow")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                viewMode === "slideshow"
                  ? "bg-primary-600 text-white"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              <FaSlidersH size={14} />
              <span>Slideshow</span>
            </button>
          </div>
        </motion.div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltWrapper
                  className="glassmorphism-card p-4 h-full flex flex-col"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glareColor="#ffffff"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-3 text-sm flex-1">
                      {project.description}
                    </p>

                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-900 mb-1">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
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
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                      >
                        <FaGithub size={14} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
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
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProjectsSlideshow projects={projects} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
