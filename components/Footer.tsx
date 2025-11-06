"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-gray-400">
            פותח על ידי <span className="font-semibold text-white">ליאור מדן</span>
          </p>
          <p className="text-gray-500 text-sm">מפתח ממשקים ואנימציות דינמיות</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              liormedan.dev
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Vercel Projects
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

