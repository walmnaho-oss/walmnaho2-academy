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
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          style={{ scale: scaleCard, opacity: opacityCard, rotateX: rotateCard }}
          className="relative max-w-6xl mx-auto rounded-[3rem] p-10 md:p-24 text-center overflow-hidden z-20"
        >
          {/* Glass Container */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-50/90 to-white/50 backdrop-blur-3xl border border-slate-200 shadow-[0_30px_100px_rgba(0,0,0,0.05)] z-0" />
          
          {/* Chromatic top border */}
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent z-10" />
          
          {/* Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100/30 to-transparent w-full h-[200%] rotate-45 animate-[spin-slow_20s_linear_infinite] opacity-50 z-0 pointer-events-none" />

          <div className="relative z-20 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-teal-600 animate-pulse" />
              <span className="text-sm font-semibold tracking-widest uppercase text-teal-700">Begin Your Journey</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 mb-8 leading-[1.1] ${isRtl ? "font-cairo leading-[1.3]" : "font-serif"}`}
            >
              {t.cta.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto font-light leading-relaxed"
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
                className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 text-xl font-bold tracking-wide rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-[1.03] w-full sm:w-auto shadow-lg shadow-teal-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">{t.cta.button}</span>
                <ArrowRight className={`relative z-10 w-6 h-6 transition-transform duration-500 group-hover:translate-x-2 ${isRtl ? "rotate-180 group-hover:-translate-x-2" : ""}`} />
              </Link>
              
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 text-xl font-medium rounded-full text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-500 w-full sm:w-auto overflow-hidden hover:scale-[1.02] shadow-sm hover:shadow"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <MessageCircle className="relative z-10 w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-500" />
                <span className="relative z-10">{isRtl ? "تواصل عبر واتساب" : "Contact via WhatsApp"}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
