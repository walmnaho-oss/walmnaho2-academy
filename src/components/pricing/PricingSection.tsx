"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { pricingData, Duration } from "@/data/pricing";
import { CheckCircle2, Star, Clock, Zap, Crown } from "lucide-react";
import Link from "next/link";

interface PricingSectionProps {
  showViewAllButton?: boolean;
}

const icons = {
  starter: Star,
  regular: Clock,
  intensive: Zap,
  premium: Crown,
};

export function PricingSection({ showViewAllButton = false }: PricingSectionProps) {
  const { isRtl } = useLanguage();
  const [duration, setDuration] = useState<Duration>("30");

  const durations: { value: Duration; labelAr: string; labelEn: string }[] = [
    { value: "30", labelAr: "30 دقيقة", labelEn: "30 Minutes" },
    { value: "45", labelAr: "45 دقيقة", labelEn: "45 Minutes" },
    { value: "60", labelAr: "60 دقيقة", labelEn: "60 Minutes" },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-bold mb-6 text-slate-900 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "اختر " : "Choose Your "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
              {isRtl ? "باقتك" : "Plan"}
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl"
          >
            {isRtl 
              ? "اختر الباقة المثالية بناءً على مدة الحصة والتكرار المفضل لديك."
              : "Select the perfect plan based on your preferred class duration and frequency."}
          </motion.p>
        </div>

        {/* Duration Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="flex p-1.5 bg-white rounded-full border border-slate-200 shadow-xl">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
                  duration === d.value ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {duration === d.value && (
                  <motion.div
                    layoutId="duration-indicator"
                    className="absolute inset-0 bg-[#0B1120] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {isRtl ? d.labelAr : d.labelEn}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingData.map((plan, idx) => {
            const isPopular = plan.isPopular;
            const Icon = icons[plan.id as keyof typeof icons] || Star;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 group ${
                  isPopular 
                    ? "bg-[#0B1120] text-white shadow-2xl z-10 scale-105" 
                    : "bg-white text-slate-900 border border-slate-100 shadow-lg hover:shadow-2xl"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-400 to-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                    {isRtl ? "الأكثر شعبية" : "Most Popular"}
                  </div>
                )}

                {/* Card Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${
                  isPopular ? "bg-white/10 text-teal-400" : "bg-teal-50 text-teal-600"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isRtl ? "font-cairo" : "font-serif"}`}>
                  {isRtl ? plan.titleAr : plan.titleEn}
                </h3>
                <p className={`${isPopular ? "text-teal-400" : "text-teal-600"} text-xs font-bold uppercase tracking-widest mb-4`}>
                  {isRtl ? plan.classesPerWeekAr : plan.classesPerWeekEn}
                </p>
                <p className={`${isPopular ? "text-slate-400" : "text-slate-500"} text-sm leading-relaxed mb-8 min-h-[40px]`}>
                  {isRtl ? plan.descriptionAr : plan.descriptionEn}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`${isPopular ? "text-slate-400" : "text-slate-400"} font-bold`}>$</span>
                    <span className="text-5xl font-bold leading-none">{plan.prices[duration].monthly}</span>
                    <span className={`${isPopular ? "text-slate-400" : "text-slate-500"} mb-1`}>{isRtl ? "/شهر" : "/mo"}</span>
                  </div>
                  <div className={`${isPopular ? "text-slate-500" : "text-slate-400"} text-xs font-medium`}>
                    ${plan.prices[duration].perSession} {isRtl ? "للحصة" : "per session"}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${isPopular ? "text-teal-400" : "text-teal-500"}`} />
                      <span className={`${isPopular ? "text-slate-300" : "text-slate-600"} text-sm`}>{isRtl ? feat.textAr : feat.textEn}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 mt-auto ${
                  isPopular
                    ? "bg-gradient-to-r from-teal-400 to-indigo-500 text-white shadow-xl hover:shadow-teal-500/20"
                    : "bg-slate-50 text-slate-700 hover:bg-[#0B1120] hover:text-white"
                }`}>
                  {isPopular ? (isRtl ? "ابدأ الآن" : "Get Started Now") : (isRtl ? "اختر الباقة" : "Choose Plan")}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* View All Pricing Button (Optional) */}
        {showViewAllButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              href="/pricing" 
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#0B1120] text-white font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {isRtl ? "شاهد جميع خطط الأسعار" : "View All Pricing Plans"}
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
