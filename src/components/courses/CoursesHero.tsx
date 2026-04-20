"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Sparkles, GraduationCap } from "lucide-react";

export function CoursesHero() {
  const { t, isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-[#0B1120]">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* Decorative Glows */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
              <GraduationCap className="w-10 h-10 text-teal-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.2] mb-6 ${isRtl ? "font-cairo leading-[1.4]" : "font-serif"}`}
          >
            {isRtl ? "اكتشف " : "Discover "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              {t.courses.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t.courses.subtitle}
          </motion.p>
        </div>
      </div>
      
      {/* Bottom fade to content */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </div>
  );
}
