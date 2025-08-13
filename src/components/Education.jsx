import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <FaGraduationCap className="text-4xl text-primary-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Bachelor of Science (BSc)
                </h3>
                <p className="text-primary-600 font-semibold">
                  Applied Mathematics and Computing
                </p>
                <p className="text-gray-600">
                  University of Jaffna – Vavuniya Campus
                </p>
                <p className="text-gray-500 text-sm">
                  Year of graduation: 2025
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Relevant Coursework
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Computational Mathematics</li>
                <li>• Statistics & Data Analysis</li>
                <li>• Computer Security</li>
                <li>• Programming Languages (C, C++, Java, Python)</li>
                <li>• Database Systems (MySQL, MongoDB)</li>
                <li>• Web Development (HTML, CSS, JavaScript)</li>
                <li>• Software Engineering Principles</li>
                <li>• Cybersecurity Fundamentals</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
