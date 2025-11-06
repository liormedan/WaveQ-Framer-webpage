"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 perspective-container">
      <FloatingParticles count={25} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-3d optimized-3d"
          style={{
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            rotateX: 5,
            rotateY: -5,
            z: 10,
            scale: 1.02,
          }}
        >
          WaveQ
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          דוגמת ממשק אינטראקטיבי עם אנימציות, צ'אט ועריכת אודיו חכמה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              z: 10,
              boxShadow: "0 10px 30px rgba(255,255,255,0.2), 0 5px 15px rgba(255,255,255,0.1)",
            }}
            whileTap={{
              scale: 0.95,
              z: -5,
            }}
            aria-label="צפה בהדגמה של WaveQ"
            className="button-3d inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 optimized-3d"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            צפה בהדגמה
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Placeholder for demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 w-full max-w-3xl mx-auto aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center card-3d depth-shadow optimized-3d"
          style={{
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            rotateY: 5,
            rotateX: -3,
            z: 15,
            scale: 1.02,
          }}
        >
          <p className="text-gray-500 text-sm">תמונת/וידאו הדגמה</p>
        </motion.div>
      </div>
    </section>
  );
}

