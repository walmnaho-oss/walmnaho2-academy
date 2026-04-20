"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutTeam() {
  const { isRtl } = useLanguage();

  const team = [
    {
      id: 1,
      nameAr: "الشيخ أحمد محمد",
      nameEn: "Sheikh Ahmed Mohammed",
      roleAr: "عالم أزهري - دكتوراه في التفسير",
      roleEn: "Al-Azhar Scholar - PhD in Tafseer",
      image: "https://images.unsplash.com/photo-1506869640319-a1b9ab6b9076?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      nameAr: "الشيخة فاطمة عبد الله",
      nameEn: "Sheikha Fatima Abdullah",
      roleAr: "مجازة بالقراءات العشر",
      roleEn: "Certified in 10 Qira'at",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      nameAr: "الشيخ عمر محمود",
      nameEn: "Sheikh Omar Mahmoud",
      roleAr: "أستاذ الفقه المقارن",
      roleEn: "Professor of Comparative Fiqh",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${isRtl ? "font-cairo" : "font-serif"}`}
          >
            {isRtl ? "نخبة من علماء الأزهر الشريف" : "Elite Al-Azhar Scholars"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            {isRtl 
              ? "تعلم على يد كوكبة من المشايخ والعلماء المعتمدين، أصحاب الأسانيد المتصلة والخبرة الطويلة في التعليم."
              : "Learn from a constellation of certified sheikhs and scholars with continuous chains of transmission and long teaching experience."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-4 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500">
                <div className="aspect-square rounded-[2rem] overflow-hidden relative mb-6">
                  {/* Grayscale filter to keep the premium feel, revealing color on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={isRtl ? member.nameAr : member.nameEn}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Subtle overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                </div>
                
                <div className="text-center pb-4">
                  <h3 className={`text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors ${isRtl ? "font-cairo" : "font-serif"}`}>
                    {isRtl ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {isRtl ? member.roleAr : member.roleEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
