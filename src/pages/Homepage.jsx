import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Homepage