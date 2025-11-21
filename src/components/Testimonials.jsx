import React from "react";
import { motion } from "framer-motion";
import "../styles/Testimonials.scss";

const testimonials = [
    { id: 1, text: "They truly understood our vision and brought it to life beautifully." },
    { id: 2, text: "A seamless experience from start to finish — highly recommended!" },
    { id: 3, text: "Their design not only looks great but feels right for our brand." },
    { id: 4, text: "Exceptional attention to detail and a fantastic team to work with." },
    { id: 5, text: "Working with them was one of the best decisions we made." },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <motion.h2
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                CLIENTS' <span>WORDS</span>
            </motion.h2>

            <motion.div
                className="cards"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
            >
                {testimonials.map((t, i) => (
                    <div key={t.id} className={`card card-${i + 1}`}>
                        <div className="overlay">
                            <p>"{t.text}"</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
