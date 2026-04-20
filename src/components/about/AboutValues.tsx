"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Target, Eye } from "lucide-react";

export function AboutValues() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card bg-white/[0.02] border-white/10 p-10 md:p-14 rounded-[3rem] hover:bg-white/[0.04] transition-colors relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-teal-400" />
            </div>
            
            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {t.aboutUs.mission.title}
            </h3>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              {t.aboutUs.mission.description}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card bg-white/[0.02] border-white/10 p-10 md:p-14 rounded-[3rem] hover:bg-white/[0.04] transition-colors relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-indigo-400" />
            </div>
            
            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}>
              {t.aboutUs.vision.title}
            </h3>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              {t.aboutUs.vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
