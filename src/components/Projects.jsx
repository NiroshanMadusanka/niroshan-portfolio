import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltWrapper from "./TiltWrapper";

const Projects = () => {
  const projects = [
    // {
    //   title: "FixItGo",
    //   description:
    //     "An on-demand mechanic connection app with real-time GPS tracking, built using React Native, Node.js, and MongoDB.",
    //   techStack: [
    //     "React Native",
    //     "Node.js",
    //     "MongoDB",
    //     "GPS Integration",
    //     "Real-time Updates",
    //   ],
    //   githubUrl: "https://github.com/niroshanmadu/fixitgo",
    //   liveUrl: "https://fixitgo-demo.vercel.app",
    //   imageUrl: "/api/placeholder/400/300",
    // },
    {
      title: "RENT & RIDE",
      description:
        "Vehicle renting website with PHP backend and role-based user management. Features include booking system, payment integration, and admin dashboard.",
      techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/niroshanmadu/rent-ride",
      liveUrl: "https://rent-ride-demo.vercel.app",
      imageUrl: "/api/placeholder/400/300",
    },
    {
      title: "DoughGo",
      description:
        "Bakery delivery management platform using React.js, React Native, Node.js, and MongoDB. Includes order tracking, payment processing, and inventory management.",
      techStack: [
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "Stripe API",
      ],
      githubUrl: "https://github.com/niroshanmadu/doughgo",
      liveUrl: "https://doughgo-demo.vercel.app",
      imageUrl: "/api/placeholder/400/300",
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.03}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
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
