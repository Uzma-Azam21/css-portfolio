"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store built with Next.js and Stripe integration.",
      image: "/ecommerce.png",
    },
    {
      title: "Task Management App",
      description:
        "A React-based application for managing tasks and projects with real-time updates.",
      image: "/task.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my skills and projects.",
      image: "/portfolio.png",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
