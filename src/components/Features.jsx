import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/Features.scss";

const Features = () => {
  const { scrollYProgress } = useViewportScroll();
  const [stacked, setStacked] = useState(false);

  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
    ]
  );

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setStacked(latest > 0.3);
    });
  }, [scrollYProgress]);

  const cards = [
    {
      id: 1,
      img: "feature1.webp",
      title: "Fast Performance",
      author: "Alex Carter",
      date: "Nov 2025",
    },
    {
      id: 2,
      img: "feature2.webp",
      title: "Secure Platform",
      author: "Jamie Lee",
      date: "Nov 2025",
    },
    {
      id: 3,
      img: "feature3.webp",
      title: "Intuitive Design",
      author: "Taylor Kim",
      date: "Nov 2025",
    },
  ];

  return (
    <motion.section
      className="feature-section"
      style={{ background: gradient }}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="feature-container">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h1>

        <motion.h4
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore thoughts on design, process insights, and creative experiments that inspire, challenge, and shape the work behind every project.
        </motion.h4>

        <div className="feature-cards">
          {cards.map((card) => (
            <motion.div
              className="feature-card"
              key={card.id}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="card-image">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="card-text">
                <h3>{card.title}</h3>
                <div className="line"></div>
                <div className="info">
                  <span className="author">{card.author}</span>
                  <span className="date">{card.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
