"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowRight, Send } from "lucide-react";

export function ContactFormSection() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Form Context */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-bold uppercase tracking-wider mb-6">
              <Send className="w-4 h-4" />
              {isRtl ? "تواصل مباشر" : "Direct Contact"}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.2] ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "دعنا نبدأ رحلتك التعليمية معاً" : "Let's start your learning journey together"}
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              {isRtl 
                ? "سواء كان لديك استفسار عن برامجنا، أو تحتاج مساعدة في تحديد مستواك، فريقنا الأكاديمي جاهز للرد عليك في أسرع وقت."
                : "Whether you have an inquiry about our programs or need help determining your level, our academic team is ready to respond as quickly as possible."}
            </p>

            <div className="flex flex-col gap-6">
              <div className="glass-card bg-slate-50 border-slate-100 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl font-bold text-teal-600">
                  1
                </div>
                <div>
                  <h4 className={`text-lg font-bold text-slate-900 ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? "أرسل استفسارك" : "Send your inquiry"}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {isRtl ? "عبر النموذج أو الواتساب مباشرة" : "Via the form or direct WhatsApp"}
                  </p>
                </div>
              </div>
              <div className="glass-card bg-slate-50 border-slate-100 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl font-bold text-indigo-600">
                  2
                </div>
                <div>
                  <h4 className={`text-lg font-bold text-slate-900 ${isRtl ? "font-cairo" : ""}`}>
                    {isRtl ? "تواصل أكاديمي" : "Academic Contact"}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {isRtl ? "نناقش أهدافك ونحدد مستواك" : "We discuss your goals and assess your level"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card bg-white border-slate-200 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-transparent rounded-bl-full rounded-tr-[3rem] opacity-50" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">{isRtl ? "الاسم الأول" : "First Name"}</label>
                    <input 
                      id="firstName"
                      type="text" 
                      placeholder={isRtl ? "مثال: عبدالله" : "e.g. Abdullah"}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">{isRtl ? "اسم العائلة" : "Last Name"}</label>
                    <input 
                      id="lastName"
                      type="text" 
                      placeholder={isRtl ? "مثال: الفارسي" : "e.g. Al-Farsi"}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">{isRtl ? "البريد الإلكتروني" : "Email"}</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">{isRtl ? "رقم الواتساب" : "WhatsApp Number"}</label>
                  <div className="flex gap-2">
                    <input 
                      aria-label="Country Code"
                      type="text" 
                      placeholder="+20"
                      className="w-24 bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none text-center focus:border-teal-500/50 transition-all text-slate-900 font-bold"
                    />
                    <input 
                      id="whatsapp"
                      type="tel" 
                      placeholder="101 451 7018"
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">{isRtl ? "الرسالة" : "Message"}</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder={isRtl ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 outline-none focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-[#0B1120] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 group"
                >
                  {isRtl ? "إرسال الرسالة" : "Send Message"}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
