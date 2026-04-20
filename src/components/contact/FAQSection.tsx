"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const { isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qAr: "هل أحتاج لمعرفة سابقة باللغة العربية لبدء حفظ القرآن؟",
      qEn: "Do I need prior knowledge of Arabic to start memorizing the Quran?",
      aAr: "لا، برامجنا مصممة لتناسب جميع المستويات من الصفر. سيبدأ معك المعلم ببرنامج التأسيس (القاعدة النورانية) حتى تتقن القراءة.",
      aEn: "No, our programs are designed for all levels starting from scratch. The tutor will start with you on a foundational program until you master reading."
    },
    {
      qAr: "كيف يتم تحديد مواعيد الدروس؟",
      qEn: "How are lesson times scheduled?",
      aAr: "بمرونة تامة. بعد الاشتراك، ستختار الأوقات والأيام التي تناسبك من جدول المعلم المتاح على مدار 24 ساعة.",
      aEn: "With complete flexibility. After subscribing, you choose the times and days that suit you from the tutor's 24/7 available schedule."
    },
    {
      qAr: "هل الشهادات معتمدة؟",
      qEn: "Are the certificates accredited?",
      aAr: "نعم، نقدم شهادات إتمام مستويات، بالإضافة إلى المسار المتقدم الذي يمنحك (الإجازة بالسند المتصل) والمعتمدة من كبار القراء.",
      aEn: "Yes, we provide level completion certificates, plus the advanced track which grants you an (Ijazah with continuous chain) accredited by senior reciters."
    },
    {
      qAr: "هل يوجد دروس تجريبية قبل الاشتراك؟",
      qEn: "Are there trial lessons before subscribing?",
      aAr: "بالطبع! نقدم جلسة تقييم وتجربة مجانية تماماً لتتعرف على المعلم وطريقة التدريس وتحديد مستواك.",
      aEn: "Absolutely! We offer a completely free evaluation and trial session to meet the tutor, see the teaching method, and assess your level."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-bold uppercase tracking-wider mb-6">
            {isRtl ? "الأسئلة الشائعة" : "FAQ"}
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}>
            {isRtl ? "إجابات لاستفساراتك" : "Answers to your inquiries"}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-white border-teal-200 shadow-xl shadow-teal-500/5" : "bg-white/50 border-slate-100 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors pr-8 ${isOpen ? "text-teal-600" : "text-slate-800"} ${isRtl ? "font-cairo text-right pr-0 pl-8" : ""}`}>
                    {isRtl ? faq.qAr : faq.qEn}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-teal-50 text-teal-600 rotate-180" : "bg-slate-50 text-slate-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-slate-600 text-lg leading-relaxed border-t border-slate-50">
                        {isRtl ? faq.aAr : faq.aEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
