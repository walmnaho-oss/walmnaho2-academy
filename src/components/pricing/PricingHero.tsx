"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wallet } from "lucide-react";

export function PricingHero() {
  const { isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-[#F8FAFC]">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-xl">
              <Wallet className="w-10 h-10 text-teal-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6 ${isRtl ? "font-cairo leading-[1.4]" : "font-serif"}`}
          >
            {isRtl ? "خطط أسعار " : "Pricing "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500">
              {isRtl ? "مرنة" : "Plans"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            {isRtl 
              ? "استثمر في تعليمك مع باقاتنا المتنوعة التي تناسب ميزانيتك ووقتك."
              : "Invest in your education with our diverse plans that fit your budget and schedule."}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
