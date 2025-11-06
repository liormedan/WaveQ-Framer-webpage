"use client";

import { motion } from "framer-motion";
import { MessageSquare, Music, Zap, Sparkles, Palette } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "צ'אט מונפש",
    description: "עם הודעות שנכנסות ויוצאות בצורה חלקה",
    emoji: "💬",
  },
  {
    icon: Music,
    title: "עריכת אודיו מדומה",
    description: "עם אנימציות של Trim, Fade, ו-Play",
    emoji: "🎚️",
  },
  {
    icon: Zap,
    title: "מעברים חכמים",
    description: "בין מסכים ומצבים (Chat ↔ Editor)",
    emoji: "⚡",
  },
  {
    icon: Sparkles,
    title: "אפקטים בזמן אמת",
    description: "בעזרת Framer Motion",
    emoji: "🪄",
  },
  {
    icon: Palette,
    title: "עיצוב מודרני כהה",
    description: "עם תנועה עדינה בכל רכיב",
    emoji: "🎨",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
        >
          מאפיינים בולטים
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                z: 20,
                scale: 1.05,
                y: -5,
              }}
              className="card-3d p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 depth-shadow optimized-3d"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex items-center gap-3 mb-4" style={{ transformStyle: "preserve-3d" }}>
                <motion.span
                  className="text-3xl"
                  role="img"
                  aria-label={feature.title}
                  whileHover={{ rotateZ: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.emoji}
                </motion.span>
                <motion.div
                  whileHover={{ rotateZ: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

