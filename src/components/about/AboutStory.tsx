"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutStory() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left: Image / Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="glass-card p-4 rounded-[3rem] bg-white border-slate-100 shadow-2xl relative z-10">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-slate-100 overflow-hidden relative">
                {/* Placeholder Image or Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-20 mix-blend-overlay" />
                
                {/* Center play button for future video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} glass-card bg-white p-6 rounded-3xl shadow-xl z-20`}>
              <p className={`text-4xl font-bold text-teal-600 mb-1 ${isRtl ? 'font-cairo' : 'font-serif'}`}>+10k</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{isRtl ? 'ساعة تعليمية' : 'Learning Hours'}</p>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/10 blur-[80px] rounded-full pointer-events-none z-0" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-bold uppercase tracking-wider mb-6">
              {isRtl ? "قصتنا" : "Our Story"}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.2] ${isRtl ? "font-cairo" : "font-serif"}`}>
              {isRtl ? "نضيء دروب العلم برؤية معاصرة" : "Illuminating the paths of knowledge with a modern vision"}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                {t.aboutUs.description}
              </p>
              <p>
                {isRtl 
                  ? "لقد صممنا أكاديميتنا لتكون منصة عالمية تجمع بين أصالة العلم الشرعي المستمد من كبار علماء الأزهر الشريف، وبين أحدث تقنيات التعليم عن بعد. هدفنا هو تذليل كل الصعاب أمام طالب العلم، أينما كان وفي أي وقت."
                  : "We designed our academy to be a global platform that combines the authenticity of sacred knowledge derived from senior Al-Azhar scholars with the latest remote learning technologies. Our goal is to overcome all obstacles for the seeker of knowledge, wherever they are and at any time."
                }
              </p>
            </div>

            {/* Checkmarks list */}
            <ul className="mt-10 space-y-4">
              {[
                isRtl ? "مناهج معتمدة وأكاديمية" : "Accredited & Academic Curriculums",
                isRtl ? "إجازات بسند متصل" : "Ijazah with Continuous Chain",
                isRtl ? "متابعة وتقييم مستمر" : "Continuous Monitoring & Evaluation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-800 font-bold">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
