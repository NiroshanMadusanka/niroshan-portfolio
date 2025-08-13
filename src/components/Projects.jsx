import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltWrapper from "./TiltWrapper";

const Projects = () => {
  const projects = [
    {
      title: "RENT & RIDE",
      description:
        "Vehicle renting website with PHP backend and role-based user management. Features include booking system, payment integration, and admin dashboard.",
      techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      githubUrl:
        "https://github.com/NiroshanMadusanka/CSC3132_Project_Vehicle_Renting_Website",
      liveUrl: "#",
      imageUrl: "/src/assets/rent-ride.jpeg",
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
      imageUrl: "/src/assets/doughgo.jpg",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
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
            A showcase of my recent work demonstrating various technologies and
            problem-solving approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TiltWrapper
                className="glassmorphism-card p-6"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </TiltWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
