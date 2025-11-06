"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          מהות הפרויקט
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          WaveQ מציג כיצד ניתן ליצור חוויית משתמש זורמת, טבעית ואלגנטית במערכת
          המדמה צ'אט אינטראקטיבי שיכול לערוך קטעי אודיו. השילוב בין אנימציה,
          ממשק שיחה ועריכת קול – מייצר תחושת עומק וחיות בממשק.
        </p>
      </motion.div>
    </section>
  );
}

