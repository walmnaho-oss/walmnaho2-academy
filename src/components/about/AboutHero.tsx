"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  const { t, isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 bg-[#F8FAFC] z-[-2]" />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-100 to-transparent z-[-1]" />
      
      {/* Decorative Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-10%] w-[40vw] h-[40vw] bg-teal-400/10 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-teal-600 text-sm font-bold tracking-wide uppercase mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" />
              {t.aboutUs.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 ${isRtl ? "font-cairo leading-[1.3]" : "font-serif"}`}
          >
            {isRtl ? "رحلة في رحاب " : "A Journey in "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 animate-gradient bg-300%">
              {isRtl ? "العلم الشرعي" : "Sacred Knowledge"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {t.aboutUs.subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
