"use client";

import { motion } from "framer-motion";

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Mesh Pattern Layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)
          `,
          transform: "translateZ(10px)",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          transform: "translateZ(20px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          transform: "translateZ(30px)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50"
        style={{ transform: "translateZ(40px)" }}
      />
    </div>
  );
}

