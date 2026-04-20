"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Users, BookOpen, Award } from "lucide-react";

export function AboutStats() {
  const { t, isRtl } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: t.aboutUs.stats.students,
      label: t.aboutUs.stats.studentsLabel,
      color: "from-teal-400 to-emerald-500",
      bgLight: "bg-teal-50",
      iconColor: "text-teal-600",
      shadow: "shadow-teal-500/20"
    },
    {
      icon: BookOpen,
      value: t.aboutUs.stats.scholars,
      label: t.aboutUs.stats.scholarsLabel,
      color: "from-amber-400 to-orange-500",
      bgLight: "bg-amber-50",
      iconColor: "text-amber-600",
      shadow: "shadow-amber-500/20"
    },
    {
      icon: Award,
      value: t.aboutUs.stats.years,
      label: t.aboutUs.stats.yearsLabel,
      color: "from-indigo-400 to-violet-500",
      bgLight: "bg-indigo-50",
      iconColor: "text-indigo-600",
      shadow: "shadow-indigo-500/20"
    }
  ];

  return (
    <section className="py-20 relative z-20 -mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card bg-white/80 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center group relative overflow-hidden border border-white hover:border-slate-100 transition-colors shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className={`w-20 h-20 rounded-3xl ${stat.bgLight} flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110 shadow-lg ${stat.shadow}`}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <stat.icon className={`w-10 h-10 ${stat.iconColor} relative z-10`} />
              </div>
              
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-3 font-serif tracking-tight">
                {stat.value}
              </h3>
              
              <p className={`text-slate-500 font-bold uppercase tracking-widest text-sm ${isRtl ? "font-cairo" : ""}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
