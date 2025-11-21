import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ServiceContent.scss";
import data from "../data/servicesData.json";

const ServicesContent = () => {
  const [active, setActive] = useState(data[0]);

  return (
    <section className="services-section">
        <div className="services-list">
          {data.map((item) => (
            <div
              key={item.id}
              className={`service-item ${active.id === item.id ? "active" : ""}`}
              onMouseEnter={() => setActive(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
        
      <motion.div
        className="services-preview"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        key={active.id}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="image-wrapper">
          <img src={active.image} alt={active.title} />
        </div>
        <div className="service-text">
          <h2>{active.title}</h2>
          <p>{active.description}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesContent;  
