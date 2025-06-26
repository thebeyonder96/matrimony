import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mt-10 px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-800 dark:text-neutral-100 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          &ldquo;Where{" "}
          <motion.span 
            className="bg-gradient-to-r from-[#800020] via-[#a0002a] to-[#800020] bg-clip-text text-transparent animate-pulse"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            hearts
          </motion.span>{" "}
          meet, <br />
          and{" "}
          <motion.span 
            className="bg-gradient-to-r from-[#800020] via-[#a0002a] to-[#800020] bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            lives
          </motion.span>{" "}
          begin anew.&rdquo
        </motion.p>
        
        <motion.p 
          className="mt-4 text-neutral-600 dark:text-neutral-300 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Discover meaningful relationships that lead to marriage with our
          trusted matrimony platform.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-[#800020] to-[#a0002a] text-white rounded-lg hover:from-[#a0002a] hover:to-[#800020] transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 10px 30px rgba(128, 0, 32, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            Get Started
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: 0, 
            ease: "easeInOut" 
          }}
        >
          <motion.img
            src="hero.svg"
            className="w-full max-w-md mx-auto md:max-w-full filter dark:brightness-90 dark:contrast-110"
            alt="Hero"
            whileHover={{ 
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Floating hearts animation */}
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%",
                opacity: 0
              }}
              animate={{ 
                y: "-20%",
                opacity: [0, 0.3, 0],
                x: `${Math.random() * 100}%`
              }}
              transition={{ 
                duration: 6 + i * 2, 
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
            >
              <span className="text-[#800020]">💕</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero