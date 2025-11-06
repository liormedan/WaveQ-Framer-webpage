"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Framer Motion", role: "מנוע האנימציה הראשי" },
  { name: "React / Next.js", role: "מבנה האפליקציה" },
  { name: "Tailwind CSS / shadcn/ui", role: "עיצוב וקומפוננטות מודרניות" },
  { name: "Lucide Icons", role: "אייקונים אינטראקטיביים" },
  { name: "AudioContext API", role: "הדמיית עריכת קול" },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white"
      >
        טכנולוגיות בשימוש
      </motion.h2>

      <div className="space-y-4 perspective-container">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -30, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              translateZ: 30,
              scale: 1.05,
              rotateY: 5,
            }}
            className="card-3d p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 depth-shadow optimized-3d"
            style={{
              transformStyle: "preserve-3d",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              <p className="text-gray-400">{tech.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

