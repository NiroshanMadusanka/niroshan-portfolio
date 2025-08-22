import React from "react";
import ScrollReveal from "./ScrollReveal";
import ScrollRevealGroup from "./ScrollRevealGroup";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-theme">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={0.8}>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-8 text-center">
              About Me
            </h2>
          </ScrollReveal>

          <div className="glassmorphism-content">
            <ScrollRevealGroup>
              <ScrollReveal direction="up" delay={0.2} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Educational Background
                  </h3>
                  <p className="text-theme-gray">
                    I completed my Bachelor of Science in Applied Mathematics
                    and Computing from the University of Jaffna – Vavuniya
                    Campus, where I gained strong foundations in computational
                    mathematics, statistical analysis, machine learning, and
                    computer security - providing the perfect blend for data
                    science and AI/ML applications.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Skills Summary
                  </h3>
                  <p className="text-theme-gray">
                    I combine expertise in full-stack development, data science,
                    computational mathematics, and AI/ML to design intelligent,
                    data-driven solutions. My background in applied mathematics
                    provides the analytical foundation for building robust
                    machine learning models and scalable software systems.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Personal Motivation
                  </h3>
                  <p className="text-theme-gray">
                    Fueled by curiosity, I push boundaries, embrace new
                    technologies, and merge software with mathematics to create
                    solutions that make a real impact
                  </p>
                </div>
              </ScrollReveal>
            </ScrollRevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
