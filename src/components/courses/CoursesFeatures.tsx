"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BookOpen, Clock, Users, ShieldCheck } from "lucide-react";

export function CoursesFeatures() {
  const { isRtl } = useLanguage();

  const features = [
    {
      icon: Users,
      titleAr: "جلسات فردية مباشرة",
      titleEn: "1-on-1 Live Sessions",
      descAr: "تواصل مباشر مع معلمك الخاص لضمان أعلى مستويات التركيز والاستفادة.",
      descEn: "Direct communication with your private tutor to ensure the highest levels of focus."
    },
    {
      icon: Clock,
      titleAr: "مرونة كاملة في المواعيد",
      titleEn: "Complete Flexibility",
      descAr: "اختر أوقات الدراسة التي تناسب جدولك اليومي، نحن نعمل على مدار الساعة.",
      descEn: "Choose study times that fit your daily schedule, we operate 24/7."
    },
    {
      icon: ShieldCheck,
      titleAr: "مسار موثوق للإجازة",
      titleEn: "Trusted Ijazah Track",
      descAr: "برامج متخصصة تنتهي بالحصول على إجازة بسند متصل إلى النبي ﷺ.",
      descEn: "Specialized programs ending with obtaining an Ijazah with a continuous chain."
    },
    {
      icon: BookOpen,
      titleAr: "مناهج الأزهر الشريف",
      titleEn: "Al-Azhar Curriculums",
      descAr: "نعتمد في تدريسنا على مناهج الأزهر الشريف الموثوقة والمعتمدة عالمياً.",
      descEn: "We rely on the globally trusted and accredited Al-Azhar curriculums."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold uppercase tracking-wider mb-6">
            {isRtl ? "لماذا تختارنا؟" : "Why Choose Us?"}
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}>
            {isRtl ? "تجربة تعليمية لا تضاهى" : "An Unmatched Learning Experience"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feat.icon className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className={`text-xl font-bold text-slate-900 mb-3 ${isRtl ? "font-cairo" : ""}`}>
                {isRtl ? feat.titleAr : feat.titleEn}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {isRtl ? feat.descAr : feat.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
