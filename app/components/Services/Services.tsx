"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and performant websites using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and attractive user interfaces for web applications.",
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile apps using React Native.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What I Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
