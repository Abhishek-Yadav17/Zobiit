import React, { useState } from 'react'
import '../styles/Hero.scss'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Hero = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 50, damping: 25 })
  const smoothY = useSpring(y, { stiffness: 50, damping: 25 })

  const handleMouseMove = (e) => {
    x.set((e.clientX / window.innerWidth - 0.5) * 200)
    y.set((e.clientY / window.innerHeight - 0.5) * 200)
  }

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      <h1 className="hero-bg-text">design & strategy</h1>
      <div className="hero-content">
        <motion.img
          src="/hero.png"
          alt="hero"
          style={{ x: smoothX, y: smoothY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        />
      </div>
      <div className="hero-bottom">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.9, rotate: -1 }}
          >
            Explore More <i class="ri-arrow-right-up-fill"></i>
          </motion.button>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim deleniti repudiandae, veritatis amet quasi beatae optio doloremque porro nihil cumque atque perferendis architecto est pariatur unde.</h4>
        </div>
    </div>
  )
}

export default Hero
