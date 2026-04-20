"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { MapPin } from "lucide-react";

export function ContactHero() {
  const { isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-32 overflow-hidden bg-[#F8FAFC]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100">
              <MapPin className="w-8 h-8 text-indigo-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6 ${isRtl ? "font-cairo leading-[1.4]" : "font-serif"}`}
          >
            {isRtl ? "نحن هنا " : "We are here "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500">
              {isRtl ? "لمساعدتك" : "to help you"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            {isRtl 
              ? "فريقنا متواجد على مدار الساعة للرد على استفساراتك، ومساعدتك في اختيار البرنامج المناسب لك."
              : "Our team is available 24/7 to answer your inquiries and help you choose the right program."}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
