import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.scss";
import ServicesContent from "./ServicesContent";

const Services = () => {
  return (
    <section className="services">
      <div className="services-top">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <span>DESIGN</span> THAT NOT JUST <br />
          <span className="design-line">
            SEEN <span className="line"></span>
          </span>
          <span>BUT FELT</span>
        </motion.h1>
      </div>

      <ServicesContent />
    </section>
  );
};

export default Services;
