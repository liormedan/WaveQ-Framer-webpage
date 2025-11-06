"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            למה זה חשוב
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            עולמות ה-UI והאודיו מתקרבים זה לזה. WaveQ מאפשר לנו לעצב ממשקים
            שחיים ונושמים — ממשקים שמדברים, זזים, מגיבים, ויוצרים חוויה של
            יצירה דיגיטלית חיה.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

