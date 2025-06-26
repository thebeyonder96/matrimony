import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "profile-tick.svg",
    text: "Verified profiles with checks",
    alt: "Verified",
  },
  {
    icon: "security-user.svg",
    text: "Privacy-first approach",
    alt: "Privacy",
  },
  {
    icon: "24-support.svg",
    text: "Dedicated support team",
    alt: "Support",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const hoverEffect = {
  scale: 1.02,
  y: -5,
  transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }
};

const Why = () => {
  return (
    <section id="why" className="scroll-mt-56 mt-10 flex flex-col items-center px-5 text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        Why Choose{" "}
        <motion.span 
          className="bg-gradient-to-r from-[#800020] via-[#a0002a] to-[#800020] bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Destiné
        </motion.span>
        ?
      </motion.h2>
      
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 bg-neutral-300/20 backdrop-blur-[1px] dark:bg-neutral-800 shadow-md dark:shadow-lg dark:shadow-neutral-900/20 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-neutral-900/30 transition-all duration-300 border border-transparent dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-600"
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover={hoverEffect}
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.4 }}
            >
              {/* <img 
                src={feature.icon} 
                alt={feature.alt} 
                className="w-10 h-10 dark:bg-white rounded-full" 
              /> */}
              <Image src={feature.icon} 
              width={10}
              height={10}
                alt={feature.alt} 
                className="w-10 h-10 dark:bg-white rounded-full"  />
            </motion.div>
            
            <motion.p 
              className="text-neutral-700 dark:text-neutral-200 font-medium"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {feature.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#800020]/5 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#800020]/5 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};

export default Why;