"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wallet, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function PricingHero() {
  const { isRtl } = useLanguage();

  return (
    <div className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-slate-950">
      {/* ═══ Dark Cinematic Background ═══ */}
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Glow Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-500/15 blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/15 blur-[150px] pointer-events-none mix-blend-screen" />
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* ═══ Content ═══ */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span className="text-xs md:text-sm font-bold text-slate-300 uppercase tracking-widest">
                {isRtl ? "استثمار آمن ومضمون" : "Secure & Guaranteed Investment"}
              </span>
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-20 h-20 rounded-3xl bg-slate-900/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 blur-xl" />
              <Wallet className="w-10 h-10 text-teal-400 relative z-10" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "خطط أسعار " : "Flexible "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500">
              {isRtl ? "مرنة ومناسبة" : "Pricing Plans"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {isRtl 
              ? "استثمر في تعليمك الشرعي مع باقاتنا المتنوعة التي صممت خصيصاً لتناسب وقتك وميزانيتك."
              : "Invest in your Islamic education with our diverse plans specifically designed to fit your schedule and budget."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            {/* Primary Button */}
            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02] w-full sm:w-[300px]"
            >
              <span className={`text-sm md:text-base font-bold tracking-wide ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? "استكشف الكورسات" : "Explore Courses"}
              </span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 w-full sm:w-[300px] shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-slate-700 group-hover:text-teal-600 transition-colors duration-300" />
              <span className={`text-sm md:text-base font-bold tracking-wide ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? "تواصل معنا" : "Contact Us"}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade to merge with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none z-20" />
    </div>
  );
}
