import React from 'react'
import video from '../assets/hero2.mp4'
import logo from '../assets/logoMLP.png'
import hero from '../assets/hero.jpeg'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/variants'

const HeroSection = () => {
  
  return (
    <section className="relative flex h-screen items-center justify-center" id="hero">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video 
          src={video}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline 
          muted
          //poster={hero}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          src={logo} 
          alt="mlp" 
          className="w-full p-4" 
        />
        <p className="p-4 text-lg tracking-tighter text-white">
          Málaga
        </p>
      </div>
    </section>
  )
}

export default HeroSection