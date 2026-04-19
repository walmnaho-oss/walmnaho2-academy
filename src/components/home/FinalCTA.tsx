"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FinalCTA() {
  const { t, isRtl } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scaleCard = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const opacityCard = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateCard = useTransform(scrollYProgress, [0, 0.5], [2, 0]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-slate-50">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          style={{ scale: scaleCard, opacity: opacityCard, rotateX: rotateCard }}
          className="relative max-w-6xl mx-auto rounded-[3rem] p-10 md:p-24 text-center overflow-hidden z-20 shadow-[0_40px_100px_rgba(0,0,0,0.06),0_10px_40px_rgba(13,148,136,0.06)] bg-white/70 backdrop-blur-3xl border border-slate-200/60"
        >
          {/* Light Theme Premium Container */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-teal-50/40 z-0" />
          
          {/* Professional Inner Border Highlight */}
          <div className="absolute inset-0 rounded-[3rem] border-[3px] border-white/60 pointer-events-none z-10 mix-blend-overlay" />
          <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent z-10" />
          
          {/* Subtle Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100/40 to-transparent w-full h-[200%] rotate-45 animate-[spin-slow_20s_linear_infinite] opacity-50 z-0 pointer-events-none" />

          <div className="relative z-20 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-50 border border-teal-100 shadow-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-teal-600 animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase text-teal-700">Begin Your Journey</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1] ${isRtl ? "font-cairo leading-[1.3]" : "font-serif"}`}
            >
              {t.cta.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              {t.cta.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 text-xl font-bold tracking-wide rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-[1.03] w-full sm:w-auto shadow-[0_10px_30px_rgba(20,184,166,0.3)] hover:shadow-[0_15px_40px_rgba(20,184,166,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{t.cta.button}</span>
                <ArrowRight className={`relative z-10 w-6 h-6 transition-transform duration-500 group-hover:translate-x-2 ${isRtl ? "rotate-180 group-hover:-translate-x-2" : ""}`} />
              </Link>
              
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 text-xl font-bold rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-500 w-full sm:w-auto overflow-hidden hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <MessageCircle className="relative z-10 w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
                <span className="relative z-10">{isRtl ? "تواصل عبر واتساب" : "Contact via WhatsApp"}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
