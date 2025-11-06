"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          רוצה לראות איך זה עובד בפועל? צפה בדמו החי.
        </p>
        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
            z: 10,
            boxShadow: "0 10px 30px rgba(255,255,255,0.2), 0 5px 15px rgba(255,255,255,0.1)",
            rotateY: 5,
          }}
          whileTap={{
            scale: 0.95,
            z: -5,
          }}
          aria-label="צפה בהדגמה החיה של WaveQ"
          className="button-3d glow-effect inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 optimized-3d"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <ExternalLink className="w-5 h-5" aria-hidden="true" />
          צפה בהדגמה החיה
        </motion.a>
      </motion.div>
    </section>
  );
}

