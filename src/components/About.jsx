import React from "react";
import { motion } from "framer-motion";
import "../styles/About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="define-heading">
        <h1>
          <motion.span
            className="we-dont-just"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            WE DON'T JUST <br />
          </motion.span>

          <motion.span
            className="design-line"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            DESIGN <span className="line"></span>
          </motion.span>
          <br />

          <motion.span
            className="define-accent"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span>WE</span> DEFINE
          </motion.span>
        </h1>
      </div>

      <motion.div
        className="define-body"
        initial={{ x: 100, y: 80, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p>
          We believe great design isn't just about looking good — it's about
          creating experiences that resonate. From your brand's first impression
          to the smallest interface detail, we combine strategy, aesthetics, and
          empathy to build digital identities that last. Based on a deep
          understanding of your goals and your audience, we design with
          intention — every color, every layout, every interaction serving a
          purpose.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
