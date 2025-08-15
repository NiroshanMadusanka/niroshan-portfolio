import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import ThemeSelectorPopup from "./components/ThemeSelectorPopup";

function App() {
  return (
    <div className="min-h-screen bg-theme">
      <ThemeSelectorPopup />
      <Navbar />
      <main className="md:ml-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        <AnimatedSection direction="up" delay={0.1}>
          <About />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <Education />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.5}>
          <Contact />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.6}>
          <Footer />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;
