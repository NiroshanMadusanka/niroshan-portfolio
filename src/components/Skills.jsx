import React from "react";
import ScrollReveal from "./ScrollReveal";
import ScrollRevealGroup from "./ScrollRevealGroup";
import TiltWrapper from "./TiltWrapper";
import {
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaCalculator,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          level: "Advanced",
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-500" />,
          level: "Intermediate",
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-500" />,
          level: "Intermediate",
        },
        {
          name: "C",
          icon: <FaCode className="text-blue-600" />,
          level: "Intermediate",
        },
        {
          name: "C++",
          icon: <FaCode className="text-purple-600" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-500" />,
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          level: "Advanced",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-orange-500" />,
          level: "Advanced",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "JavaScript (ES6+)",
          icon: <FaJs className="text-yellow-500" />,
          level: "Advanced",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          level: "Advanced",
        },
        {
          name: "Express.js",
          icon: <FaNodeJs className="text-green-600" />,
          level: "Advanced",
        },
        {
          name: "PHP",
          icon: <SiPhp className="text-purple-500" />,
          level: "Intermediate",
        },
        {
          name: "REST APIs",
          icon: <FaCode className="text-gray-600" />,
          level: "Advanced",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          level: "Advanced",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-600" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-red-500" />,
          level: "Advanced",
        },
        {
          name: "GitHub",
          icon: <FaGitAlt className="text-gray-800" />,
          level: "Advanced",
        },
        {
          name: "VS Code",
          icon: <FaCode className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "Postman",
          icon: <FaCode className="text-orange-500" />,
          level: "Intermediate",
        },
        {
          name: "Figma",
          icon: <FaCode className="text-pink-500" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Data Science & AI/ML",
      skills: [
        {
          name: "Python Data Science",
          icon: <FaPython className="text-blue-500" />,
          level: "Intermediate",
        },
        {
          name: "Pandas",
          icon: <SiPandas className="text-purple-500" />,
          level: "Intermediate",
        },
        {
          name: "NumPy",
          icon: <SiNumpy className="text-blue-600" />,
          level: "Intermediate",
        },
        {
          name: "Scikit-learn",
          icon: <FaBrain className="text-orange-500" />,
          level: "Intermediate",
        },
        {
          name: "Data Visualization",
          icon: <FaChartLine className="text-green-500" />,
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Other Domains",
      skills: [
        {
          name: "Computer Security",
          icon: <FaShieldAlt className="text-red-600" />,
          level: "Intermediate",
        },
        {
          name: "Computational Mathematics",
          icon: <FaCalculator className="text-blue-600" />,
          level: "Advanced",
        },
        {
          name: "Statistical Analysis",
          icon: <FaCalculator className="text-green-600" />,
          level: "Intermediate",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-theme">
      <div className="container-custom">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various
              domains
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup
          direction="up"
          staggerDelay={0.1}
          duration={0.6}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <TiltWrapper
              key={category.title}
              className="bg-theme-secondary-50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltWrapper>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
};

export default Skills;
