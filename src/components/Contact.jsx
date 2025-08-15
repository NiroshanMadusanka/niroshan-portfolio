import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-theme">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Contact Me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-theme-secondary-50 rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-6">
                  Have an idea or opportunity in mind? Let’s talk! I’m always
                  open to collaborating, sharing ideas, and creating solutions
                  that make an impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-primary-600 text-xl" />
                    <a
                      href="mailto:niroshanmadu531@gmail.com"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      niroshanmadu531@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaLinkedin className="text-primary-600 text-xl" />
                    <a
                      href="https://linkedin.com/in/niroshanmadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      LinkedIn Profile
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaGithub className="text-primary-600 text-xl" />
                    <a
                      href="https://github.com/niroshanmadu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      GitHub Profile
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-primary-600 text-xl" />
                    <span className="text-gray-700">
                      Available for collaboration
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to collaborate on exciting projects or discuss new
                  opportunities.
                </p>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    I'm always open to discussing new opportunities, creative
                    ideas, or how I can help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
