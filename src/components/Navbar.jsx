import React, { useState, useEffect } from 'react'
import '../styles/Navbar.scss'
import { motion } from 'framer-motion'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['Home.', 'About Us.', 'Services.', 'Contact.']
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <motion.div
        className="nav1"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <motion.div
          className="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          {isOpen ? <RiCloseLine size={20} color="#FFF" /> : <RiMenu3Line size={20} color="#FFF" />}
        </motion.div>

        {isOpen && (
          <motion.div
            className="circle-menu"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {menuItems.map((item, index) => (
              <motion.h4
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.h4>
            ))}
          </motion.div>
        )}
      </motion.div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.1 }}
      >
        zobiit
      </motion.h1>

      <motion.div
        className="nav2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.2 }}
      >
        {['ri-twitter-fill', 'ri-instagram-fill', 'ri-meta-fill'].map((icon, i) => (
          <motion.i
            key={i}
            className={icon}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          />
        ))}
      </motion.div>
    </nav>
  )
}

export default Navbar
