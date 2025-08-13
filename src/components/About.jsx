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

          <div className="bg-theme/80 backdrop-blur-sm rounded-xl p-8 shadow-theme">
            <div className="space-y-6 text-theme-primary">
              <ScrollReveal direction="up" delay={0.2} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Educational Background
                  </h3>
                  <p className="text-theme-gray">
                    I completed my Bachelor of Science in Applied Mathematics
                    and Computing from the University of Jaffna – Vavuniya
                    Campus, where I gained solid foundations in computational
                    mathematics, statistics, and computer security.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Skills Summary
                  </h3>
                  <p className="text-theme-gray">
                    As a full-stack developer, I combine strong programming
                    skills with a deep understanding of mathematical modeling
                    and cybersecurity principles to build robust, user-friendly
                    applications.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6} duration={0.8}>
                <div>
                  <h3 className="text-xl font-semibold text-theme-secondary mb-3">
                    Personal Motivation
                  </h3>
                  <p className="text-theme-gray">
                    I strive to continuously learn, improve, and apply my
                    diverse knowledge to real-world challenges, bridging the
                    domains of software and mathematics.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
